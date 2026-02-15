/* ===== Dynamic Mind Map Editor — App Logic ===== */

(function () {
    'use strict';

    const STORAGE_KEY = 'sanatana-mindmap-tree';

    // ── State ──
    let treeData = null;
    let selectedNodeId = null;
    let mm = null; // Markmap instance
    let collapsedNodes = new Set();

    // ── DOM refs ──
    const treeContainer = document.getElementById('tree-container');
    const nodeEditor = document.getElementById('node-editor');
    const mindmapSvg = document.getElementById('mindmap-svg');
    const searchInput = document.getElementById('search-input');

    const editTitle = document.getElementById('edit-title');
    const editDescription = document.getElementById('edit-description');
    const editTag = document.getElementById('edit-tag');
    const editStatus = document.getElementById('edit-status');

    // ── Initialize ──
    function init() {
        loadData();
        renderTree();
        initMarkmap();
        renderMindmap();
        updateStats();
        bindEvents();
    }

    // ── Data Persistence ──
    function loadData() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try { treeData = JSON.parse(saved); } catch (e) { treeData = deepClone(DEFAULT_TREE_DATA); }
        } else {
            treeData = deepClone(DEFAULT_TREE_DATA);
        }
    }

    function saveData() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(treeData));
    }

    function deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    // ── Tree Rendering ──
    function renderTree(searchTerm = '') {
        treeContainer.innerHTML = '';
        const fragment = document.createDocumentFragment();
        treeData.children.forEach(child => {
            fragment.appendChild(createTreeNode(child, 0, searchTerm));
        });
        treeContainer.appendChild(fragment);
    }

    function createTreeNode(node, depth, searchTerm) {
        const div = document.createElement('div');
        div.className = 'tree-node';
        div.dataset.id = node.id;

        const hasChildren = node.children && node.children.length > 0;
        const isCollapsed = collapsedNodes.has(node.id);
        const isMatch = searchTerm && node.title.toLowerCase().includes(searchTerm.toLowerCase());

        // Row
        const row = document.createElement('div');
        row.className = 'tree-node-row' + (selectedNodeId === node.id ? ' active' : '') + (isMatch ? ' search-match' : '');
        row.style.paddingLeft = (10 + depth * 16) + 'px';

        // Toggle
        const toggle = document.createElement('span');
        toggle.className = 'tree-toggle' + (!hasChildren ? ' empty' : '') + (!isCollapsed && hasChildren ? ' open' : '');
        toggle.textContent = '▶';
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (hasChildren) {
                if (collapsedNodes.has(node.id)) collapsedNodes.delete(node.id);
                else collapsedNodes.add(node.id);
                renderTree(searchInput.value);
            }
        });

        // Label
        const label = document.createElement('span');
        label.className = 'tree-label';
        label.textContent = node.title;

        // Tag
        row.appendChild(toggle);
        row.appendChild(label);

        if (node.tag) {
            const tag = document.createElement('span');
            tag.className = 'tree-tag';
            tag.dataset.tag = node.tag;
            tag.textContent = node.tag;
            row.appendChild(tag);
        }

        if (node.status) {
            const status = document.createElement('span');
            status.className = 'tree-status';
            status.textContent = node.status === 'verified' ? '✅' : '⚠️';
            row.appendChild(status);
        }

        row.addEventListener('click', () => selectNode(node.id));
        div.appendChild(row);

        // Children
        if (hasChildren) {
            const childContainer = document.createElement('div');
            childContainer.className = 'tree-children' + (isCollapsed ? ' collapsed' : '');
            node.children.forEach(child => {
                childContainer.appendChild(createTreeNode(child, depth + 1, searchTerm));
            });
            div.appendChild(childContainer);
        }

        return div;
    }

    // ── Node Selection & Editing ──
    function selectNode(id) {
        selectedNodeId = id;
        const node = findNode(treeData, id);
        if (!node) return;

        editTitle.value = node.title || '';
        editDescription.value = node.description || '';
        editTag.value = node.tag || '';
        editStatus.value = node.status || '';
        nodeEditor.classList.remove('hidden');

        document.getElementById('editor-title').textContent = '✏️ ' + (node.title.length > 30 ? node.title.substring(0, 30) + '…' : node.title);

        // Disable delete on root children if it would leave tree empty
        const deleteBtn = document.getElementById('btn-delete-node');
        deleteBtn.disabled = (id === 'root');

        renderTree(searchInput.value);
    }

    function applyEdits() {
        if (!selectedNodeId) return;
        const node = findNode(treeData, selectedNodeId);
        if (!node) return;

        node.title = editTitle.value || 'Untitled';
        node.description = editDescription.value || '';
        node.tag = editTag.value || '';
        node.status = editStatus.value || '';

        saveData();
        renderTree(searchInput.value);
        renderMindmap();
        updateStats();
    }

    // ── Node CRUD ──
    function addChild(parentId) {
        const parent = findNode(treeData, parentId || selectedNodeId);
        if (!parent) return;
        if (!parent.children) parent.children = [];

        const newNode = {
            id: 'n_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
            title: 'New Node',
            description: '',
            tag: '',
            status: '',
            children: []
        };

        parent.children.push(newNode);
        collapsedNodes.delete(parent.id); // expand parent

        saveData();
        renderTree(searchInput.value);
        renderMindmap();
        updateStats();

        // Select the new node
        selectNode(newNode.id);
        editTitle.focus();
        editTitle.select();
    }

    function deleteNode(id) {
        if (id === 'root') return;
        const parent = findParent(treeData, id);
        if (!parent) return;

        parent.children = parent.children.filter(c => c.id !== id);

        selectedNodeId = null;
        nodeEditor.classList.add('hidden');

        saveData();
        renderTree(searchInput.value);
        renderMindmap();
        updateStats();
        toast('Node deleted', 'warning');
    }

    // ── Tree Traversal ──
    function findNode(root, id) {
        if (root.id === id) return root;
        if (root.children) {
            for (const child of root.children) {
                const found = findNode(child, id);
                if (found) return found;
            }
        }
        return null;
    }

    function findParent(root, id) {
        if (root.children) {
            for (const child of root.children) {
                if (child.id === id) return root;
                const found = findParent(child, id);
                if (found) return found;
            }
        }
        return null;
    }

    function countNodes(node) {
        let count = 1;
        if (node.children) {
            node.children.forEach(c => { count += countNodes(c); });
        }
        return count;
    }

    function countTagged(node) {
        let count = node.tag ? 1 : 0;
        if (node.children) {
            node.children.forEach(c => { count += countTagged(c); });
        }
        return count;
    }

    // ── Markmap Rendering ──
    function initMarkmap() {
        if (typeof markmap === 'undefined') {
            console.warn('Markmap library not loaded yet, retrying...');
            setTimeout(initMarkmap, 500);
            return;
        }
        const { Markmap } = markmap;
        mm = Markmap.create(mindmapSvg, {
            autoFit: true,
            duration: 300,
            maxWidth: 300,
            paddingX: 16,
            color: (node) => {
                const colors = ['#58a6ff', '#a371f7', '#f0883e', '#3fb950', '#d29922', '#f85149', '#79c0ff', '#d2a8ff'];
                return colors[node.state?.depth % colors.length] || '#58a6ff';
            }
        });
    }

    function treeToMarkmap(node, depth = 0) {
        const tagStr = node.tag ? ` \`[${node.tag}]\`` : '';
        const statusStr = node.status === 'verified' ? ' ✅' : (node.status === 'warning' ? ' ⚠️' : '');
        const title = node.title + tagStr + statusStr;

        const result = {
            content: title,
            children: []
        };

        // Show description as a leaf node if present
        if (node.description && depth > 0) {
            result.children.push({
                content: `<em style="color:#8b949e;font-size:12px">${escapeHtml(node.description)}</em>`,
                children: []
            });
        }

        if (node.children && node.children.length > 0) {
            node.children.forEach(child => {
                result.children.push(treeToMarkmap(child, depth + 1));
            });
        }

        return result;
    }

    function renderMindmap() {
        if (!mm) {
            setTimeout(renderMindmap, 300);
            return;
        }
        const data = treeToMarkmap(treeData);
        mm.setData(data);
        setTimeout(() => mm.fit(), 100);
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // ── Export / Import ──
    function exportJSON() {
        const blob = new Blob([JSON.stringify(treeData, null, 2)], { type: 'application/json' });
        downloadBlob(blob, 'sanatana-universe-mindmap.json');
        toast('JSON exported!', 'success');
    }

    function importJSON(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (data && data.id && data.children) {
                    treeData = data;
                    selectedNodeId = null;
                    nodeEditor.classList.add('hidden');
                    saveData();
                    renderTree();
                    renderMindmap();
                    updateStats();
                    toast('JSON imported!', 'success');
                } else {
                    toast('Invalid JSON structure', 'error');
                }
            } catch (err) {
                toast('Failed to parse JSON', 'error');
            }
        };
        reader.readAsText(file);
    }

    function exportHTML() {
        const md = treeToMarkdown(treeData, 0);
        const html = `<!DOCTYPE html>
<html><head>
<meta charset="UTF-8">
<title>🔱 Sanātana Universe — Mind Map</title>
<style>
  body { margin: 0; background: #0d1117; }
  #mindmap { width: 100vw; height: 100vh; }
</style>
</head><body>
<svg id="mindmap"></svg>
<script src="https://cdn.jsdelivr.net/npm/d3@7"><\/script>
<script src="https://cdn.jsdelivr.net/npm/markmap-view@0.15.4"><\/script>
<script src="https://cdn.jsdelivr.net/npm/markmap-lib@0.15.4"><\/script>
<script>
const md = ${JSON.stringify(md)};
const { Transformer } = markmap;
const transformer = new Transformer();
const { root } = transformer.transform(md);
const { Markmap } = markmap;
Markmap.create('#mindmap', { autoFit: true, color: (n) => {
  const c = ['#58a6ff','#a371f7','#f0883e','#3fb950','#d29922','#f85149'];
  return c[n.state?.depth % c.length];
}}, root);
<\/script>
</body></html>`;
        const blob = new Blob([html], { type: 'text/html' });
        downloadBlob(blob, 'sanatana-universe-mindmap.html');
        toast('HTML mind map exported!', 'success');
    }

    function treeToMarkdown(node, depth) {
        let prefix = '#'.repeat(Math.min(depth + 1, 6)) + ' ';
        if (depth === 0) prefix = '# ';

        const tagStr = node.tag ? ` \`[${node.tag}]\`` : '';
        const statusStr = node.status === 'verified' ? ' ✅' : (node.status === 'warning' ? ' ⚠️' : '');
        let md = prefix + node.title + tagStr + statusStr + '\n';

        if (node.description && depth > 0) {
            md += '\n' + node.description + '\n\n';
        }

        if (node.children) {
            node.children.forEach(child => {
                md += treeToMarkdown(child, depth + 1);
            });
        }

        return md;
    }

    function downloadBlob(blob, filename) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // ── Stats ──
    function updateStats() {
        document.getElementById('stat-nodes').textContent = 'Nodes: ' + countNodes(treeData);
        document.getElementById('stat-branches').textContent = 'Branches: ' + (treeData.children ? treeData.children.length : 0);
        document.getElementById('stat-tagged').textContent = 'Tagged: ' + countTagged(treeData);
    }

    // ── Toast ──
    function toast(msg, type = 'success') {
        const t = document.createElement('div');
        t.className = 'toast ' + type;
        t.textContent = msg;
        document.body.appendChild(t);
        setTimeout(() => t.remove(), 3000);
    }

    // ── Confirm Modal ──
    function showConfirm(title, message, onConfirm) {
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `
      <div class="modal-box">
        <h3>${title}</h3>
        <p>${message}</p>
        <div class="modal-actions">
          <button id="modal-cancel">Cancel</button>
          <button id="modal-confirm" class="btn-danger">Confirm</button>
        </div>
      </div>`;
        document.body.appendChild(overlay);

        overlay.querySelector('#modal-cancel').addEventListener('click', () => overlay.remove());
        overlay.querySelector('#modal-confirm').addEventListener('click', () => {
            onConfirm();
            overlay.remove();
        });
        overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
    }

    // ── Collapse / Expand All ──
    function collapseAll(node) {
        if (node.children && node.children.length > 0) {
            collapsedNodes.add(node.id);
            node.children.forEach(c => collapseAll(c));
        }
    }

    function expandAll(node) {
        collapsedNodes.delete(node.id);
        if (node.children) node.children.forEach(c => expandAll(c));
    }

    // ── Event Binding ──
    function bindEvents() {
        // Live edit
        editTitle.addEventListener('input', applyEdits);
        editDescription.addEventListener('input', applyEdits);
        editTag.addEventListener('change', applyEdits);
        editStatus.addEventListener('change', applyEdits);

        // Close editor
        document.getElementById('btn-close-editor').addEventListener('click', () => {
            selectedNodeId = null;
            nodeEditor.classList.add('hidden');
            renderTree(searchInput.value);
        });

        // Add child
        document.getElementById('btn-add-child').addEventListener('click', () => {
            if (selectedNodeId) addChild(selectedNodeId);
        });

        // Add root branch
        document.getElementById('btn-add-root-child').addEventListener('click', () => {
            addChild('root');
        });

        // Delete
        document.getElementById('btn-delete-node').addEventListener('click', () => {
            if (!selectedNodeId || selectedNodeId === 'root') return;
            const node = findNode(treeData, selectedNodeId);
            showConfirm('Delete Node', `Delete "<strong>${escapeHtml(node.title)}</strong>" and all its children?`, () => {
                deleteNode(selectedNodeId);
            });
        });

        // Search
        searchInput.addEventListener('input', () => {
            const term = searchInput.value.trim();
            if (term) {
                // Expand all to show matches
                expandAll(treeData);
            }
            renderTree(term);
        });

        // Toolbar
        document.getElementById('btn-export-json').addEventListener('click', exportJSON);
        document.getElementById('btn-import-json').addEventListener('click', () => {
            document.getElementById('file-import').click();
        });
        document.getElementById('file-import').addEventListener('change', (e) => {
            if (e.target.files[0]) {
                importJSON(e.target.files[0]);
                e.target.value = '';
            }
        });
        document.getElementById('btn-export-html').addEventListener('click', exportHTML);

        document.getElementById('btn-reset').addEventListener('click', () => {
            showConfirm('Reset Data', 'Reset to the default 10-branch blueprint? All changes will be lost.', () => {
                treeData = deepClone(DEFAULT_TREE_DATA);
                selectedNodeId = null;
                collapsedNodes.clear();
                nodeEditor.classList.add('hidden');
                saveData();
                renderTree();
                renderMindmap();
                updateStats();
                toast('Reset to defaults', 'success');
            });
        });

        document.getElementById('btn-collapse-all').addEventListener('click', () => {
            treeData.children.forEach(c => collapseAll(c));
            renderTree(searchInput.value);
        });

        document.getElementById('btn-expand-all').addEventListener('click', () => {
            expandAll(treeData);
            renderTree(searchInput.value);
        });

        // Resize handle
        initResizer();

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Escape closes editor
            if (e.key === 'Escape' && !nodeEditor.classList.contains('hidden')) {
                selectedNodeId = null;
                nodeEditor.classList.add('hidden');
                renderTree(searchInput.value);
            }
            // Ctrl+S saves (prevent default)
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault();
                saveData();
                toast('Saved!', 'success');
            }
        });
    }

    // ── Resizer ──
    function initResizer() {
        const handle = document.getElementById('resize-handle');
        const panel = document.getElementById('panel-left');
        let isResizing = false;

        handle.addEventListener('mousedown', (e) => {
            isResizing = true;
            handle.classList.add('active');
            document.body.style.cursor = 'col-resize';
            document.body.style.userSelect = 'none';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isResizing) return;
            const width = Math.max(280, Math.min(600, e.clientX));
            panel.style.width = width + 'px';
        });

        document.addEventListener('mouseup', () => {
            if (isResizing) {
                isResizing = false;
                handle.classList.remove('active');
                document.body.style.cursor = '';
                document.body.style.userSelect = '';
                // Re-fit mindmap after resize
                if (mm) setTimeout(() => mm.fit(), 100);
            }
        });
    }

    // ── Start ──
    document.addEventListener('DOMContentLoaded', init);

    // Fallback if DOMContentLoaded already fired
    if (document.readyState !== 'loading') init();
})();
