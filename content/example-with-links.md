# Example: Links and Images in Markdown

## Adding Links

### External Links
Visit [OpenAI](https://openai.com) to learn more about GPT models.

Check out [Hugging Face](https://huggingface.co) for pre-trained models.

Learn from [Fast.ai](https://fast.ai) courses.

### Links with Descriptions
- [Anthropic Claude](https://anthropic.com) - AI safety research company
- [Google Gemini](https://deepmind.google/technologies/gemini/) - Multimodal AI system
- [Meta LLaMA](https://ai.meta.com/llama/) - Open-source language models

## Adding Images

### Local Images (from images folder)
![Architecture Diagram](../images/transformer-architecture.png)

### Remote Images (from URL)
![AI Neural Network](https://example.com/neural-network.jpg)

### Images with Different Sizes
You can control image size with HTML in Markdown:

<img src="../images/logo.png" alt="Logo" width="200">

## Combining Links and Images

### Clickable Image (Image as Link)
[![Click this image](https://via.placeholder.com/300x150)](https://example.com)

### Image Gallery
![Image 1](../images/img1.jpg) ![Image 2](../images/img2.jpg)

## Video Embeds (YouTube, etc.)

For videos, you can embed HTML:

```html
<iframe width="560" height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  frameborder="0" allowfullscreen>
</iframe>
```

Or use a clickable thumbnail:
[![Watch Video](https://img.youtube.com/vi/VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=VIDEO_ID)

## Code Blocks with Links

When sharing code examples:

```python
# Install transformers library
# https://github.com/huggingface/transformers
pip install transformers
```

Visit the [documentation](https://huggingface.co/docs/transformers) for more info.

## Tips

1. **Local images**: Store in `images/` folder at project root
2. **Remote images**: Use full HTTPS URLs
3. **Alt text**: Always add descriptive alt text for accessibility
4. **File paths**: Use relative paths like `../images/` from content folder
5. **Image formats**: Support .jpg, .png, .gif, .svg, .webp
