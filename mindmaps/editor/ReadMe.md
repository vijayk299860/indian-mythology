# 🔱 Sanātana Universe — Dynamic Mind Map Editor

An interactive mind map editor for building and organizing the **Cosmic Architecture of Sanātana Universe** animation project. Add stories, descriptions, and source tags to any node — the mind map updates in real-time.

---

## 🚀 How to Run

1. Open `index.html` in any modern browser (Chrome, Firefox, Safari, Edge)
2. That's it — no server, no install, no build step needed

```bash
# macOS
open index.html

# Or just double-click index.html in Finder
```

> **Note:** Requires an internet connection on first load to fetch the Markmap library from CDN. After that, it works offline (data is stored locally).

---

## 📂 Project Structure

```
editor/
├── index.html   → Main app (open this in browser)
├── style.css    → Dark theme styling
├── app.js       → Core logic (CRUD, rendering, persistence)
├── data.js      → Default 10-branch dataset (pre-loaded)
└── ReadMe.md    → This file
```

---

## 🎯 What It Does

| Feature | Description |
|---|---|
| **Tree Editor** (left panel) | Browse, expand/collapse all branches and nodes |
| **Live Mind Map** (right panel) | Interactive markmap visualization, updates as you type |
| **Node Editor** | Click any node → edit title, description/story, source tag, status |
| **Add/Delete Nodes** | Create child nodes or delete branches |
| **Search** | Filter nodes by keyword |
| **Auto-Save** | Data persists in `localStorage` — survives page refresh |
| **Export JSON** | Download your tree data as a `.json` backup |
| **Import JSON** | Restore from a previously exported backup |
| **Export HTML** | Generate a standalone shareable mind map file |
| **Resizable Panels** | Drag the divider between tree and map |

---

## 🛠️ How to Use

### Adding Content
1. **Click any node** in the tree (left side) → the editor panel opens
2. **Edit the Title** — rename the node
3. **Add Description / Story** — write narrative, notes, research, or story content
4. **Set Source Tag** — classify the source:
   - `[S]` **Shruti** — Vedas, Upanishads (highest authority)
   - `[P]` **Purana** — Mythological narratives
   - `[I]` **Itihasa** — Epics (Ramayana, Mahabharata)
   - `[Ph]` **Philosophy** — Darshana (Sankhya, Vedanta, etc.)
   - `[R]` **Regional** — Temple tradition, oral expansion
5. **Set Status** — mark as ✅ Verified or ⚠️ Needs Review

### Adding New Nodes
- Click **+ Add Branch** (top of tree) to add a new top-level branch
- Select a node → click **+ Add Child** to add a sub-node under it

### Deleting Nodes
- Select a node → click **Delete** → confirm in the popup

### Searching
- Type in the search bar to filter nodes by keyword
- All branches auto-expand to show matches

### Keyboard Shortcuts
| Shortcut | Action |
|---|---|
| `Esc` | Close the editor panel |
| `Cmd+S` / `Ctrl+S` | Force save |

---

## 💾 Data & Backup

- **Auto-saves** to browser `localStorage` on every edit
- **Export JSON** → downloads `sanatana-universe-mindmap.json` as backup
- **Import JSON** → restores tree from a backup file
- **Reset** → reverts to the default 10-branch blueprint (⚠️ erases all changes)

> **Tip:** Export JSON regularly as a backup. `localStorage` is browser-specific — if you clear browser data, your edits are lost unless backed up.

---

## 📦 Tech Stack

- **Vanilla HTML/CSS/JS** — no framework, no build tools
- **[Markmap](https://markmap.js.org/)** — mind map rendering (loaded via CDN)
- **[D3.js](https://d3js.org/)** — used internally by Markmap
- **Google Fonts (Inter)** — typography

---

## 🏗️ Pre-loaded Data

The editor comes pre-loaded with the refined **10-branch Sanātana Universe structure**:

1. **The Unmanifest Absolute** — Parabrahman, Nasadiya Sukta, Nirguna vs Saguna
2. **Manifestation Engine** — Sankhya (Philosophical vs Theistic layers)
3. **Trimurti Perspectives** — Vaishnava, Shaiva, Shakta parallel origins
4. **Cosmic Structure** — 14 Lokas, Yugas, exact cosmic position
5. **Avatar Intervention Grid** — Dashavatara with logic pattern
6. **Sacred Geography Layer** — Scriptural Core vs Regional Oral Expansion
7. **Itihasa Integration** — Ramayana + Mahabharata timeline
8. **Present Era Mapping** — Kali Yuga thematic analysis
9. **Future Cosmology** — Kalki, Pralaya, Brahma's lifespan
10. **Source Validation Layer** — `[S] [P] [I] [Ph] [R]` tag system
