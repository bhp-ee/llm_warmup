# ⚡ Quick Reference Card

## 📝 Add New Section (2 Steps)

### 1️⃣ Create Markdown
`content/section-X.md`
```markdown
# X. Title

## Chapter X.1: Name

Content here...
```

### 2️⃣ Update Config
`config.js`
```javascript
{
    id: "section-X",
    title: "Title",
    file: "content/section-X.md",
    subsections: ["Name"]
}
```

---

## 🔧 Quick Edits

| What | Where | Edit |
|------|-------|------|
| Site Title | `config.js` | `title: "..."` |
| Add Section | `config.js` | Add to `sections: []` |
| Remove Section | `config.js` | Delete from array |
| Reorder Sections | `config.js` | Move in array |
| Update Date | `config.js` | `lastUpdated: "..."` |
| Edit Content | `content/*.md` | Edit markdown |
| Add Image | `images/` + markdown | `![](../images/...)` |
| Styling | `styles.css` | CSS variables |

---

## 📂 File You'll Edit

✅ **Often**: `config.js`, `content/*.md`  
🟡 **Sometimes**: `styles.css`  
❌ **Rarely**: `index.html`, `script.js`

---

## 🎯 Config Template

```javascript
{
    id: "section-X",              // Unique ID
    title: "Section Name",        // TOC display
    file: "content/file.md",      // Markdown path
    subsections: ["A", "B"]       // Optional
}
```

---

## 🚀 Workflow

1. Create `.md` file
2. Add to `config.js`
3. Refresh browser
4. Done! ✅

---

## 💡 Tips

- IDs: `section-1`, `section-2`, etc.
- Files: `content/section-1.md`
- Test in browser after each change
- Commit often with Git

---

## 🐛 Debug Checklist

- [ ] Config syntax correct? (commas, brackets)
- [ ] Markdown file exists?
- [ ] File path correct?
- [ ] Browser console errors? (F12)
- [ ] Local server running?

---

## 📞 Need Help?

1. Check [UPDATE-GUIDE.md](UPDATE-GUIDE.md)
2. Check [MARKDOWN-GUIDE.md](MARKDOWN-GUIDE.md)
3. Check browser console (F12)
