import fs from 'fs-extra';
import path from 'path';
import { glob } from 'glob';
import matter from 'front-matter';
import { marked } from 'marked';
import ejs from 'ejs';

const srcDir = 'src';
const outDir = 'public';

// Clean output directory
await fs.emptyDir(outDir);

// Copy static assets
await fs.copy(path.join(srcDir, 'assets'), path.join(outDir, 'assets'));

// Find all markdown files
const markdownFiles = await glob(`${srcDir}/content/**/*.md`);

for (const filePath of markdownFiles) {
  // Read file content
  const fileContent = await fs.readFile(filePath, 'utf-8');
  
  // Parse front matter
  const { attributes, body } = matter(fileContent);
  
  // Convert markdown to HTML
  const contentHtml = marked(body);
  
  // Determine layout file (default to 'post.html' if not specified)
  const layoutFile = attributes.layout || 'post.html';
  const layoutPath = path.join(srcDir, 'layouts', layoutFile);
  
  if (!(await fs.pathExists(layoutPath))) {
    console.error(`Layout not found: ${layoutPath} for ${filePath}`);
    continue;
  }
  
  // Read layout template
  const layoutTemplate = await fs.readFile(layoutPath, 'utf-8');
  
  // Render layout with data
  const html = ejs.render(layoutTemplate, {
    ...attributes,
    content: contentHtml
  });
  
  // Determine output path
  // Remove src/content prefix, replace .md with .html
  const relativePath = path.relative(path.join(srcDir, 'content'), filePath);
  const outputPath = path.join(outDir, relativePath.replace(/\.md$/, '.html'));
  
  // Ensure output directory exists
  await fs.ensureDir(path.dirname(outputPath));
  
  // Write HTML file
  await fs.writeFile(outputPath, html);
  
  console.log(`Generated ${outputPath}`);
}

console.log('Build complete!');