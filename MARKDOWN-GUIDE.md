# Markdown Quick Reference Guide

## Links

### Basic Link
```markdown
[Link Text](https://url.com)
```
**Example:** [OpenAI](https://openai.com)

### Link with Title (tooltip)
```markdown
[Link Text](https://url.com "Hover text")
```
**Example:** [OpenAI](https://openai.com "Visit OpenAI's website")

### Reference-style Links
```markdown
[Link Text][1]

[1]: https://url.com
```

## Images

### Basic Image
```markdown
![Alt Text](path/to/image.jpg)
```

### From Images Folder (local)
```markdown
![My Diagram](../images/diagram.png)
```

### From URL (remote)
```markdown
![Remote Image](https://example.com/image.jpg)
```

### Image with Title
```markdown
![Alt Text](image.jpg "Hover text")
```

## Image Sizing (HTML in Markdown)

### Specific Width
```markdown
<img src="../images/logo.png" alt="Logo" width="300">
```

### Width and Height
```markdown
<img src="../images/banner.jpg" alt="Banner" width="600" height="200">
```

### Responsive Image
```markdown
<img src="../images/photo.jpg" alt="Photo" style="max-width: 100%; height: auto;">
```

## Clickable Images (Image as Link)

```markdown
[![Image Alt Text](image.jpg)](https://link-destination.com)
```

**Example:**
```markdown
[![OpenAI Logo](../images/openai-logo.png)](https://openai.com)
```

## File Structure for Images

```
llm_warmup/
├── index.html
├── content/
│   ├── section-1.md  ← Your markdown files
│   └── section-2.md
└── images/           ← Put images here
    ├── logo.png
    ├── diagram.jpg
    └── screenshot.png
```

## Relative Paths

From a `.md` file in `content/` folder:
- `../images/photo.jpg` - Goes up one level, then into images
- `../images/subfolder/photo.jpg` - With subfolder
- `https://...` - Full URL for remote images

## Image Examples by Use Case

### 1. Architecture Diagram
```markdown
![LLM Architecture](../images/architecture-diagram.png)

*Figure 1: Transformer architecture overview*
```

### 2. Screenshot
```markdown
![Dashboard Screenshot](../images/dashboard.png)

The dashboard shows real-time metrics...
```

### 3. Logo/Icon
```markdown
<img src="../images/icon.png" alt="Icon" width="50" style="vertical-align: middle;"> **Company Name**
```

### 4. Side-by-side Images (HTML)
```markdown
<div style="display: flex; gap: 10px;">
  <img src="../images/before.jpg" alt="Before" width="45%">
  <img src="../images/after.jpg" alt="After" width="45%">
</div>
```

### 5. Image Gallery
```markdown
![Image 1](../images/img1.jpg) ![Image 2](../images/img2.jpg) ![Image 3](../images/img3.jpg)
```

## Video Embeds

### YouTube
```markdown
[![Video Title](https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg)](https://www.youtube.com/watch?v=VIDEO_ID)
```

### YouTube Embed (HTML)
```html
<iframe width="560" height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>
```

## Advanced: Image with Caption

```markdown
<figure>
  <img src="../images/chart.png" alt="Performance Chart" width="600">
  <figcaption style="text-align: center; font-style: italic; color: #666;">
    Figure 1: Model performance comparison
  </figcaption>
</figure>
```

## Tips

1. **Alt Text**: Always add descriptive alt text for accessibility
2. **File Names**: Use lowercase, hyphens (no spaces): `my-image.jpg`
3. **Formats**: Use .jpg for photos, .png for graphics/logos, .svg for icons
4. **Size**: Optimize images before uploading (compress large files)
5. **Remote Images**: Make sure URLs are https:// and publicly accessible
6. **Path Issues**: If image doesn't show, check the relative path

## Testing Images

After adding an image:
1. Save the `.md` file
2. Refresh your browser (http://localhost:8000)
3. If image doesn't appear:
   - Check browser console (F12) for errors
   - Verify file path is correct
   - Ensure image exists in the `images/` folder

## Common Issues

**Image not showing?**
- ✅ Check file path: `../images/file.jpg` (from content folder)
- ✅ Check file extension matches actual file
- ✅ Check file permissions
- ✅ Use forward slashes `/` not backslashes `\`
- ✅ No spaces in file names (use hyphens)

**Image too large?**
- Use `<img>` tag with `width` attribute
- Or add CSS: `style="max-width: 600px;"`

**Want images side by side?**
- Use HTML `<div>` with flexbox (see example above)
