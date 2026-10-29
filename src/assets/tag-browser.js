// tags: general / code;
(function () {
  const hierarchy = window.__TAG_HIERARCHY__;
  const allPages = window.__ALL_PAGES__;

  function computeAllPages(node) {
    node.allPages = node.value ? [...node.value] : [];
    if (node.children) {
      for (const child of Object.values(node.children)) {
        computeAllPages(child);
        node.allPages.push(...child.allPages);
      }
    }
    const unique = new Map();
    node.allPages.forEach((p) => unique.set(p.url, p));
    node.allPages = Array.from(unique.values());
  }
  computeAllPages(hierarchy);

  const treeEl = document.getElementById("tree");
  const pageListEl = document.getElementById("page-list");

  // Fixed order: `all` first, then the six top levels in the owner's order,
  // `draft` last. Anything else (a new top level, sub-levels) goes by post
  // count, then name, so the page does not depend on the order of the files.
  const TOP_ORDER = ["all", "Code", "Philosophy", "Language", "Learning and mind", "Science and money", "Life", "draft"];
  function sortedEntries(children, isTop) {
    const rank = (k) => (TOP_ORDER.indexOf(k) < 0 ? TOP_ORDER.length - 1.5 : TOP_ORDER.indexOf(k));
    return Object.entries(children).sort(([ka, a], [kb, b]) =>
      isTop && rank(ka) !== rank(kb)
        ? rank(ka) - rank(kb)
        : b.allPages.length - a.allPages.length || ka.localeCompare(kb)
    );
  }

  function renderTree(children, parentEl, isTop) {
    const ul = document.createElement("ul");

    for (const [key, node] of sortedEntries(children, isTop)) {
      const li = document.createElement("li");

      const header = document.createElement("div");
      header.className = "node-header";

      const toggle = document.createElement("span");
      toggle.className = "toggle";

      const nameSpan = document.createElement("span");
      nameSpan.className = "tag-name";
      nameSpan.textContent =
        key + (node.allPages.length ? ` (${node.allPages.length})` : "");
      nameSpan.addEventListener("click", (e) => {
        e.stopPropagation();
        document
          .querySelectorAll(".tag-name")
          .forEach((s) => s.classList.remove("selected"));
        nameSpan.classList.add("selected");
        displayPages(node.allPages);
      });

      header.appendChild(toggle);
      header.appendChild(nameSpan);
      li.appendChild(header);

      if (node.children && Object.keys(node.children).length > 0) {
        toggle.textContent = "▶"; // collapsed arrow
        const childContainer = document.createElement("div");
        childContainer.className = "children collapsed"; // start hidden
        renderTree(node.children, childContainer);
        li.appendChild(childContainer);

        toggle.addEventListener("click", (e) => {
          e.stopPropagation();
          childContainer.classList.toggle("collapsed");
          toggle.textContent = childContainer.classList.contains("collapsed")
            ? "▶"
            : "▼";
        });
      } else {
        toggle.textContent = " ";
        toggle.style.visibility = "hidden";
      }

      ul.appendChild(li);
    }

    parentEl.appendChild(ul);
  }

  renderTree(hierarchy.children, treeEl, true);
  displayPages(allPages);

  function displayPages(pages) {
    pageListEl.innerHTML = "";
    if (pages.length === 0) {
      pageListEl.textContent = "No pages.";
      return;
    }
    pages.forEach((page) => {
      const a = document.createElement("a");
      a.href = page.url;
      a.textContent = page.title || page.url;
      a.className = "page-link";
      pageListEl.appendChild(a);
    });
  }
})();
