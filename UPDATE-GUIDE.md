# 🚀 Update Guide - Simplified System

## ✨ What Changed?

Your knowledge archive is now **config-driven** and **auto-generates** everything!

### Before (Complex):
- ❌ Edit HTML to add sections
- ❌ Manually update TOC
- ❌ Copy-paste section templates
- ❌ Keep TOC and content in sync

### After (Simple):
- ✅ Edit ONE config file
- ✅ Everything auto-generates
- ✅ Add sections in seconds
- ✅ Always in sync

---

## 📁 New File Structure

```
llm_warmup/
├── config.js          ← EDIT THIS to add/remove sections
├── index.html         ← Clean, minimal (rarely edit)
├── script.js          ← Handles all auto-generation
├── styles.css         ← No changes
├── content/           ← Your markdown files
│   ├── section-1.md
│   ├── section-2.md
│   └── ...
└── images/            ← Your images
```

---

## 🎯 How to Add a New Section (2 Steps!)

### Step 1: Create Markdown File
Create `content/section-6.md`:
```markdown
# 6. Your New Topic

## Chapter 6.1: Subtopic One

Your content here...

## Chapter 6.2: Subtopic Two

More content...
```

### Step 2: Add to Config
Edit `config.js` and add to the `sections` array:
```javascript
{
    id: "section-6",
    title: "Your New Topic",
    file: "content/section-6.md",
    subsections: [
        "Subtopic One",
        "Subtopic Two"
    ]
}
```

**That's it!** 🎉 Refresh your browser.

---

## 📝 Complete Example

### Add "Machine Learning Projects" Section

1. **Create file:** `content/section-6.md`
```markdown
# 6. Machine Learning Projects

## Chapter 6.1: Beginner Projects

- Image classifier
- Sentiment analysis
- ...

## Chapter 6.2: Intermediate Projects

- Chatbot with RAG
- Object detection
- ...
```

2. **Update config.js:**
```javascript
const SITE_CONFIG = {
    title: "LLM & AI Engineer Knowledge Archive",
    subtitle: "A comprehensive guide to Large Language Models and AI Engineering",
    lastUpdated: "March 4, 2026",
    
    sections: [
        {
            id: "section-1",
            title: "Fundamentals of LLMs & AI",
            file: "content/section-1.md",
            subsections: ["Introduction to LLMs", "Core Architecture", "Popular Models"]
        },
        // ... existing sections ...
        {
            id: "section-6",                           // ← New section
            title: "Machine Learning Projects",        // ← Shows in TOC
            file: "content/section-6.md",             // ← Markdown file
            subsections: [                             // ← TOC subsections
                "Beginner Projects",
                "Intermediate Projects"
            ]
        }
    ]
};
```

3. **Refresh browser** - Done!

---

## ⚙️ Config.js Explained

```javascript
const SITE_CONFIG = {
    // Site metadata
    title: "Your Site Title",           // Main h1 heading
    subtitle: "Your subtitle",           // Under title
    lastUpdated: "March 4, 2026",       // Last update date
    
    // All sections
    sections: [
        {
            id: "section-1",             // HTML id (must be unique)
            title: "Section Title",      // Shows in TOC
            file: "content/file.md",     // Path to markdown file
            subsections: [               // Optional: TOC subsections
                "Sub One",
                "Sub Two"
            ]
        }
        // Add more sections...
    ]
};
```

---

## 🔧 Common Modifications

### Change Site Title
Edit `config.js`:
```javascript
title: "My AI Knowledge Base",
subtitle: "Everything I know about AI",
```

### Remove a Section
Just delete or comment out in `config.js`:
```javascript
sections: [
    // { id: "section-3", ... },  ← Commented out
]
```

### Reorder Sections
Just move them in the array in `config.js`:
```javascript
sections: [
    { id: "section-5", ... },  // Now first
    { id: "section-1", ... },  // Now second
    // ...
]
```

### Update Last Modified Date
Edit `config.js`:
```javascript
lastUpdated: "March 5, 2026",
```

---

## 🎨 Advanced Customization

### Add More Subsections
```javascript
subsections: [
    "Subtopic 1",
    "Subtopic 2",
    "Subtopic 3",
    "Subtopic 4"
]
```

### No Subsections
Just omit the field:
```javascript
{
    id: "section-x",
    title: "Simple Section",
    file: "content/simple.md"
    // No subsections property
}
```

### Nested Content Folders
Organize markdown files:
```javascript
file: "content/advanced/neural-networks.md",
file: "content/basics/introduction.md",
```

---

## 📋 What Auto-Generates?

### ✅ Table of Contents
- All section links
- Subsection links
- Numbering (1. 2. 3.)
- Toggle icons

### ✅ Content Sections
- Section containers
- IDs for navigation
- Loading states
- Error handling

### ✅ Header
- Title
- Subtitle
- Last updated date

### ✅ Navigation
- Active section highlighting
- Smooth scrolling
- Mobile menu
- All toggles

---

## 🐛 Troubleshooting

### Section Not Showing?
1. Check `config.js` syntax (commas, brackets)
2. Verify markdown file path is correct
3. Check browser console for errors (F12)

### TOC Missing?
- Make sure `config.js` loads before `script.js` in `index.html`
- Check `subsections` array syntax

### Content Not Loading?
- Verify markdown file exists
- Check file path in `file:` property
- Look for CORS errors (use local server)

### Broken Layout?
- Validate `config.js` JavaScript syntax
- Check for missing commas between objects
- Use browser dev tools to debug

---

## 📊 Comparison: Before vs After

### Adding a Section

**Before (Old System):**
```html
<!-- Edit index.html -->
<li class="toc-item">
    <div class="toc-section-header">
        <span class="toc-toggle">▼</span>
        <a href="#section-6">6. New Section</a>
    </div>
    <ul class="toc-subsections">
        <li><a href="#section-6">6.1 Sub</a></li>
    </ul>
</li>

<!-- Also edit sections -->
<section id="section-6" data-markdown="content/section-6.md">
    <div class="loading">Loading...</div>
</section>
```
**Lines changed: ~15**

**After (New System):**
```javascript
// Edit config.js only
{
    id: "section-6",
    title: "New Section",
    file: "content/section-6.md",
    subsections: ["Sub"]
}
```
**Lines changed: 5**

---

## ✅ Benefits

1. **Simpler Updates**: Edit one config file
2. **Less Errors**: No HTML syntax mistakes
3. **Faster**: Add sections in seconds
4. **Maintainable**: Clear structure
5. **Flexible**: Easy to reorder/remove
6. **DRY**: Don't Repeat Yourself
7. **Scalable**: Add 100 sections easily

---

## 🎓 Pro Tips

1. **Backup Config**: Keep a copy of `config.js`
2. **Validate JSON**: Use JSHint or browser console
3. **Consistent Naming**: Use `section-1`, `section-2`, etc.
4. **Version Control**: Commit after each section
5. **Comment Sections**: Use `//` for notes in config

---

## 🔄 Migration Complete

Your old files are backed up:
- `index-old.html` - Original HTML
- `script-old.js` - Original JavaScript

You can delete these once you're comfortable with the new system.

---

## 📖 Next Steps

1. ✅ Refresh browser - everything should work
2. ✅ Try adding a test section
3. ✅ Update `lastUpdated` in config
4. ✅ Customize titles/content
5. ✅ Delete old backup files when ready

Happy documenting! 🚀
