// The tag browser of the index page.
//
// The top levels are chips (name and post count). Tapping one shows its
// posts and opens a tray with its sub-levels under the chips; tapping a
// sub-level narrows the list, tapping it again goes back up. The picked tag
// is kept in the address (#Code/AI) so it can be linked and the back button
// works. Nothing here knows the names of the tags except the order of the top
// levels (TOP_ORDER) and `all` as the default, so a new tag just appears.
(function () {
  var hierarchy = window.__TAG_HIERARCHY__;
  var allPages = window.__ALL_PAGES__;

  // The posts of a node and of everything under it (a post counts once).
  function computeAllPages(node) {
    node.allPages = node.value ? node.value.slice() : [];
    if (node.children) {
      Object.keys(node.children).forEach(function (k) {
        computeAllPages(node.children[k]);
        node.allPages = node.allPages.concat(node.children[k].allPages);
      });
    }
    var unique = new Map();
    node.allPages.forEach(function (p) { unique.set(p.url, p); });
    node.allPages = Array.from(unique.values());
  }
  computeAllPages(hierarchy);

  var topEl = document.getElementById("tag-top");
  var subEl = document.getElementById("tag-sub");
  var listEl = document.getElementById("page-list");
  var titleEl = document.getElementById("list-title");
  var countEl = document.getElementById("list-count");

  // Top levels in a fixed order (all, the six, draft); anything else after
  // them. Sub-levels: most posts first, then by name.
  var TOP_ORDER = ["all", "Code", "Philosophy", "Language", "Learning and mind", "Science and money", "Life", "draft"];
  function rank(k) {
    var i = TOP_ORDER.indexOf(k);
    return i < 0 ? TOP_ORDER.length - 1.5 : i;
  }
  function sortedKeys(children, isTop) {
    return Object.keys(children).sort(function (a, b) {
      if (isTop && rank(a) !== rank(b)) return rank(a) - rank(b);
      return children[b].allPages.length - children[a].allPages.length || a.localeCompare(b, "en");
    });
  }
  function label(key) { return key.charAt(0).toUpperCase() + key.slice(1); }

  // The picked tag as a path of names (`all` when nothing is picked).
  var path = ["all"];

  function nodeAt(p) {
    var node = hierarchy;
    for (var i = 0; i < p.length; i++) {
      node = node.children && node.children[p[i]];
      if (!node) return null;
    }
    return node;
  }
  function validPrefix(p) {
    var out = [];
    for (var i = 0; i < p.length; i++) {
      if (!nodeAt(out.concat(p[i]))) break;
      out.push(p[i]);
    }
    return out;
  }
  function fromHash() {
    var h = location.hash.replace(/^#/, "");
    var p = [];
    try {
      p = h ? validPrefix(h.split("/").map(decodeURIComponent)) : [];
    } catch (e) {}
    return p.length ? p : ["all"];
  }
  function hashOf(p) {
    return p.length === 1 && p[0] === "all" ? "" : "#" + p.map(encodeURIComponent).join("/");
  }

  function chip(key, node, state, onTap) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "chip" + (state ? " " + state : "");
    b.dataset.key = key;
    b.setAttribute("aria-pressed", state === "sel" ? "true" : "false");
    var name = document.createElement("span");
    name.textContent = label(key);
    var n = document.createElement("span");
    n.className = "n";
    n.textContent = node.allPages.length;
    b.appendChild(name);
    b.appendChild(n);
    b.addEventListener("click", onTap);
    return b;
  }

  function choose(p) {
    path = p;
    if (location.hash !== hashOf(p)) {
      history.pushState(null, "", location.pathname + location.search + hashOf(p));
    }
    render();
  }

  // One row of chips: the children of the node at `parent` (a path).
  function row(parent, container) {
    var node = nodeAt(parent);
    var isTop = parent.length === 0;
    sortedKeys(node.children, isTop).forEach(function (key) {
      var here = parent.concat(key);
      var onPath = path.length >= here.length && here.every(function (k, i) { return path[i] === k; });
      var state = onPath ? (path.length === here.length ? "sel" : "anc") : "";
      container.appendChild(
        chip(key, node.children[key], state, function () {
          // Tapping the picked sub-level again goes back up one level.
          if (state === "sel" && !isTop) choose(parent);
          else choose(here);
        })
      );
    });
  }

  function render() {
    topEl.textContent = "";
    row([], topEl);
    subEl.textContent = "";
    // A tray under the chips for each picked level that has sub-levels.
    for (var d = 1; d <= path.length; d++) {
      var parent = path.slice(0, d);
      var node = nodeAt(parent);
      if (!node || !node.children || !Object.keys(node.children).length) continue;
      var tray = document.createElement("div");
      tray.className = "tray chips";
      tray.setAttribute("role", "group");
      tray.setAttribute("aria-label", parent.map(label).join(" / ") + ", sub-levels");
      row(parent, tray);
      subEl.appendChild(tray);
    }
    showList(nodeAt(path), path);
  }

  function showList(node, p) {
    var pages = node.allPages.slice().sort(function (a, b) {
      return (a.title || a.url).localeCompare(b.title || b.url, "en", { numeric: true });
    });
    titleEl.textContent = p.length === 1 && p[0] === "all" ? "All posts" : p.map(label).join(" / ");
    countEl.textContent = pages.length + (pages.length === 1 ? " post" : " posts");
    listEl.textContent = "";
    if (!pages.length) {
      var none = document.createElement("p");
      none.className = "empty";
      none.textContent = "No posts.";
      listEl.appendChild(none);
      return;
    }
    pages.forEach(function (page) {
      var a = document.createElement("a");
      a.href = page.url;
      a.textContent = page.title || page.url;
      a.className = "page-link";
      listEl.appendChild(a);
    });
  }

  window.addEventListener("popstate", function () {
    path = fromHash();
    render();
  });

  path = fromHash();
  render();
})();
