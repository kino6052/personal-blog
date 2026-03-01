import fs from 'fs-extra';
import path from 'path';
import { glob } from 'glob';
import matter from 'front-matter';
import { marked } from 'marked';
import ejs from 'ejs';

const srcDir = 'src';
const outDir = 'docs';

// Clean output directory
await fs.emptyDir(outDir);

// Copy static assets (CSS, JS, images)
await fs.copy(path.join(srcDir, 'assets'), path.join(outDir, 'assets'));

// Data collections
const allPages = [];                 // { title, url }
const pagesByTag = new Map();         // tag → array of { title, url }

// Find all markdown files
const markdownFiles = await glob(`${srcDir}/content/**/*.md`);

for (const filePath of markdownFiles) {
  // Read file content
  const fileContent = await fs.readFile(filePath, 'utf-8');

  // Parse front matter
  const { attributes, body } = matter(fileContent);

  // Convert markdown to HTML
  const contentHtml = marked(body);

  // Determine output path
  const relativePath = path.relative(path.join(srcDir, 'content'), filePath);
  const outputPath = path.join(outDir, relativePath.replace(/\.md$/, '.html'));

  // Page info for linking
  const pageInfo = {
    title: attributes.title || path.basename(filePath, '.md'),
    url: relativePath.replace(/\.md$/, '.html')   // e.g. "One/Two/Three.html"
  };
  allPages.push(pageInfo);

  // Extract tags
  let tags = attributes.tags;
  if (tags) {
    if (typeof tags === 'string') {
      // Split by semicolon and trim
      tags = tags.split(';').map(t => t.trim()).filter(t => t);
    } else if (Array.isArray(tags)) {
      tags = tags.map(t => String(t).trim());
    } else {
      tags = [];
    }

    // Normalise tag paths (trim slashes, remove extra spaces)
    tags = tags.map(tag =>
      tag.split('/').map(segment => segment.trim()).join('/')
    );

    // Accumulate pages per tag
    for (const tag of tags) {
      if (!pagesByTag.has(tag)) {
        pagesByTag.set(tag, []);
      }
      pagesByTag.get(tag).push(pageInfo);
    }
  }

  // Determine layout file (default to 'post.html')
  const layoutFile = attributes.layout || 'post.html';
  const layoutPath = path.join(srcDir, 'layouts', layoutFile);

  if (!(await fs.pathExists(layoutPath))) {
    console.error(`Layout not found: ${layoutPath} for ${filePath}`);
    continue;
  }

  // Read and render layout
  const layoutTemplate = await fs.readFile(layoutPath, 'utf-8');
  const html = ejs.render(layoutTemplate, {
    ...attributes,
    content: contentHtml
  });

  // Ensure output directory exists
  await fs.ensureDir(path.dirname(outputPath));

  // Write HTML file
  await fs.writeFile(outputPath, html);
  console.log(`Generated ${outputPath}`);
}

// ----------------------------------------------------------------------
// Build tag hierarchy
// ----------------------------------------------------------------------

/**
 * Builds a nested hierarchy from an array of [path, value] tuples.
 * Paths are slash-separated strings (e.g., "One/Two/Three").
 */
function buildHierarchy(entries) {
  const root = { children: {} };

  for (const [pathStr, value] of entries) {
    const segments = pathStr.split('/');
    let currentLevel = root.children;

    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      const isLast = i === segments.length - 1;

      if (!currentLevel[segment]) {
        currentLevel[segment] = {};
      }

      const node = currentLevel[segment];

      if (isLast) {
        node.value = value;           // array of pageInfo objects
      } else {
        if (!node.children) {
          node.children = {};
        }
        currentLevel = node.children;
      }
    }
  }

  return root;
}

// Prepare entries for hierarchy: each tag → its pages
const hierarchyEntries = Array.from(pagesByTag.entries());
const tagHierarchy = buildHierarchy(hierarchyEntries);

// ----------------------------------------------------------------------
// Generate index.html with inline CSS/JS
// ----------------------------------------------------------------------

const indexLayoutPath = path.join(srcDir, 'layouts', 'index.html');
if (await fs.pathExists(indexLayoutPath)) {
  // Read the layout template
  const indexLayout = await fs.readFile(indexLayoutPath, 'utf-8');

  // Read the CSS and JS files to inline them
  const cssPath = path.join(srcDir, 'assets', 'style.css');
  const jsPath = path.join(srcDir, 'assets', 'tag-browser.js');

  let cssContent = '';
  let jsContent = '';

  if (await fs.pathExists(cssPath)) {
    cssContent = await fs.readFile(cssPath, 'utf-8');
  } else {
    console.warn('style.css not found, inline CSS will be empty.');
  }

  if (await fs.pathExists(jsPath)) {
    jsContent = await fs.readFile(jsPath, 'utf-8');
  } else {
    console.warn('tag-browser.js not found, inline JS will be empty.');
  }

  // Render the index page with all data and inline content
  const indexHtml = ejs.render(indexLayout, {
    hierarchy: tagHierarchy,
    allPages: allPages,
    cssContent: cssContent,
    jsContent: jsContent
  });

  await fs.writeFile(path.join(outDir, 'index.html'), indexHtml);
  console.log('Generated index.html (with inlined CSS/JS)');
} else {
  console.warn('No index.html layout found; skipping index generation.');
}
