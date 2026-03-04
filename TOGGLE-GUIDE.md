# Toggle Features Guide

## 🎯 New Collapsible Features

Your knowledge archive now has interactive toggle/collapse functionality for better navigation!

## 📑 Table of Contents Toggles

### Individual Section Collapse
- Click on any section header in the TOC (e.g., "1. Fundamentals of LLMs & AI")
- The subsections will collapse/expand
- The triangle icon (▼) rotates to show state
- Collapsed: ▶ | Expanded: ▼

### Collapse/Expand All Button
- Located at the top of the TOC
- **"Collapse All"** - Hides all subsections for a clean view
- **"Expand All"** - Shows all subsections
- Perfect for getting an overview or drilling down

## 📖 Chapter Collapsing in Content

### How It Works
- Each main chapter heading (h2 - the ones with "Chapter X.X") is now clickable
- Click any chapter heading to collapse/expand its content
- The triangle icon (▼) shows the current state:
  - ▼ = Expanded (content visible)
  - ▶ = Collapsed (content hidden)

### Benefits
- **Focus on what you need**: Collapse completed sections
- **Reduce scrolling**: Hide chapters you're not reading
- **Quick navigation**: Jump between chapters easily
- **Mobile-friendly**: Less scrolling on small screens

## 💡 Usage Tips

### Study Mode
1. Collapse all TOC sections
2. Expand only the section you're studying
3. In content, collapse chapters you've already read
4. Focus on one chapter at a time

### Quick Reference
1. Keep TOC expanded to see all subsections
2. Collapse chapters in content until you need them
3. Use browser's Find (Ctrl+F / Cmd+F) across collapsed sections

### Mobile Navigation
- TOC toggles help reduce scrolling in the sidebar
- Chapter toggles make content more manageable on small screens
- All animations are smooth and touch-friendly

## 🔧 Technical Details

### What Toggles
**TOC (Table of Contents):**
- Main sections toggle their subsection lists
- Clicking the section name (link) still navigates to the section
- Clicking anywhere else on the header line toggles

**Content Chapters:**
- H2 headings (Chapter titles) toggle their content
- Content wrapped until next chapter or horizontal rule
- All subheadings (h3, h4) within a chapter collapse together

### State Persistence
- Currently, toggle states reset on page reload
- To add persistence, we could use localStorage (optional enhancement)

## 🎨 Customization

Want to change the behavior? Edit these files:

**JavaScript:** `script.js`
- `initializeToggles()` - TOC toggle logic
- `makeChaptersCollapsible()` - Chapter collapse logic

**CSS:** `styles.css`
- `.toc-toggle` - Triangle icon style
- `.chapter-content` - Collapsed content animation
- `.toc-subsections` - TOC subsection behavior

**Timing:**
- Current animation: 0.3s ease
- Adjust `transition` properties in CSS

## 🚀 Future Enhancements

Possible additions:
1. **Remember state**: Save toggle preferences to localStorage
2. **Keyboard shortcuts**: Arrow keys to collapse/expand
3. **Collapse all chapters button**: In content area
4. **Auto-collapse on scroll**: Collapse previous sections
5. **Smooth scroll to chapter**: When expanding from TOC

## 📝 Notes

- Toggle states are independent (TOC vs Content)
- Clicking chapter headings doesn't navigate, it toggles
- All content remains searchable (Ctrl+F works on collapsed content)
- Print view automatically shows all content expanded
