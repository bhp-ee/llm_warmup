# LLM & AI Knowledge Archive

A responsive, markdown-based knowledge documentation system with **auto-generated navigation**.

## ⚡ Quick Start

### Add a New Section (2 Steps!)

1. **Create markdown file:** `content/section-X.md`
2. **Add to config:** Edit `config.js` - add one object to the array
3. **Refresh browser** - Done! ✅

## 📁 Project Structure

```
llm_warmup/
├── config.js              # ⭐ EDIT THIS to add/remove sections
├── index.html              # Clean, minimal (auto-generates)
├── script.js               # Handles all auto-generation
├── styles.css              # Styling
├── content/                # Markdown content files
│   ├── section-1.md
│   ├── section-2.md
│   ├── section-3.md
│   ├── section-4.md
│   └── section-5.md
├── images/                 # Your images
└── README.md              # This file
```

## ✏️ How to Edit Content

### Option 1: Edit Existing Content
Simply edit the `.md` files in the `content/` folder using Markdown syntax:

### Option 2: Add New Section
Edit `config.js`:

### Basic Markdown Syntax

```markdown
# Main Heading (H1)
## Section Heading (H2)
### Subsection (H3)

**Bold text**
*Italic text*

- Bullet point 1
- Bullet point 2
  - Nested bullet

1. Numbered list
2. Another item

[Link text](https://url.com)
```

## ➕ Adding a New Section

**Step 1:** Create `content/section-6.md`:
```markdown
# 6. Your New Topic

## Chapter 6.1: Subtopic

Content here...
```

**Step 2:** Add to `config.js`:
```javascript
{
    id: "section-6",
    title: "Your New Topic",
    file: "content/section-6.md",
    subsections: ["Subtopic"]
}
```

**That's it!** TOC, navigation, and content auto-generate. ✨

## 🚀 Running the Project

### Option 1: Simple HTTP Server (Python)
```bash
python3 -m http.server 8000
```
Then open: http://localhost:8000

### Option 2: Live Server (VS Code Extension)
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

### Option 3: Direct File Access
⚠️ Note: Due to CORS restrictions, opening `index.html` directly in a browser may not load the Markdown files. Use one of the server options above.

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* ... more colors */
}
```

### Layout
- Sidebar width: `--sidebar-width` variable
- Spacing: `--spacing-*` variables
- Breakpoints: `@media` queries at bottom of CSS

## 📱 Responsive Features

- **Desktop**: Fixed sidebar with smooth navigation
- **Tablet**: Adjusted spacing and font sizes
- **Mobile**: Collapsible hamburger menu
- **iOS**: Touch-optimized scrolling

## 🔧 Technical Details

- **Markdown Parser**: [Marked.js](https://marked.js.org/)
- **No Build Process**: Pure HTML/CSS/JS
- **No Dependencies**: Except marked.js from CDN
- **Performance**: Throttled scroll events, smooth animations

## 📝 Tips

1. **Keep it Simple**: Write in plain Markdown for easy editing
2. **Use Headings**: Proper heading hierarchy (H1 → H2 → H3)
3. **Stay Organized**: One section per `.md` file
4. **Test Locally**: Use a local server to preview changes
5. **Version Control**: Consider using Git to track changes

## 🐛 Troubleshooting

**Markdown files not loading?**
- Make sure you're using a local server (not opening file:// directly)
- Check browser console for errors
- Verify file paths are correct

**Menu not working?**
- Check that script.js is loaded
- Verify JavaScript is enabled in browser

**Styling issues?**
- Clear browser cache
- Check styles.css is linked correctly

## ✨ Features

- **Config-Driven**: Edit one file to update everything
- **Auto-Generated**: TOC and sections create automatically
- **Collapsible**: Click to collapse/expand chapters and TOC
- **Responsive**: Works on iOS, Windows, Mac, mobile
- **Markdown-Based**: Write in simple markdown syntax
- **Easy Updates**: Add sections in seconds, not minutes
- **Mobile Menu**: Hamburger menu for small screens
- **Active Highlighting**: Current section highlighted in TOC
- **Smooth Scrolling**: Pleasant navigation experience

## 📚 Documentation

- [UPDATE-GUIDE.md](UPDATE-GUIDE.md) - Complete guide to new system
- [QUICK-REFERENCE.md](QUICK-REFERENCE.md) - Quick reference card
- [MARKDOWN-GUIDE.md](MARKDOWN-GUIDE.md) - Markdown syntax guide
- [TOGGLE-GUIDE.md](TOGGLE-GUIDE.md) - Collapse/expand features
- [DEPLOY-INSTRUCTIONS.md](DEPLOY-INSTRUCTIONS.md) - How to publish

## 🎯 Key Files

| File | Purpose | Edit Frequency |
|------|---------|----------------|
| `config.js` | Add/remove sections | Often |
| `content/*.md` | Write content | Often |
| `styles.css` | Customize appearance | Sometimes |
| `index.html` | Structure (rarely change) | Rarely |
| `script.js` | Functionality (rarely change) | Rarely |

## 📄 License

Free to use and modify for your personal or commercial projects.
