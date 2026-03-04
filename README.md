# LLM & AI Knowledge Archive

A responsive, markdown-based knowledge documentation system.

## 📁 Project Structure

```
llm_warmup/
├── index.html              # Main HTML file
├── styles.css              # Styling
├── script.js               # JavaScript functionality
├── content/                # Markdown content files
│   ├── section-1.md       # Fundamentals
│   ├── section-2.md       # Roadmap
│   ├── section-3.md       # Technologies
│   ├── section-4.md       # Advanced Topics
│   └── section-5.md       # Resources
└── README.md              # This file
```

## ✏️ How to Edit Content

Simply edit the `.md` files in the `content/` folder using Markdown syntax:

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

1. Create a new `.md` file in the `content/` folder (e.g., `section-6.md`)

2. Write your content in Markdown:
```markdown
# 6. Your New Section

## 6.1 Subsection Title

Your content here...
```

3. Add the section to `index.html`:
```html
<section id="section-6" class="content-section" data-markdown="content/section-6.md">
    <div class="loading">Loading content...</div>
</section>
```

4. Add a link in the Table of Contents (in `index.html`):
```html
<li><a href="#section-6" class="toc-link">6. Your New Section</a></li>
```

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

## 📄 License

Free to use and modify for your personal or commercial projects.
