# Shortcode Conversion Complete

## What Was Done

Successfully converted **13 files** containing WordPress shortcodes:

### 1. Footnotes (`[ref]...[/ref]`)
- **Converted to:** Linked HTML footnotes with superscript numbers
- **Features:**
  - Each footnote gets a unique number in the text: `[1]`
  - Clicking the number jumps to the note at the bottom
  - Each note has a back arrow (↩) to return to the text
  - All notes collected in a "Notes" section at the end

**Example:**
```markdown
Before: text\[ref\]Citation here\[/ref\]
After: text<sup id="fnref-1"><a href="#fn-1">[1]</a></sup>

At end of file:
---

## Notes

<p id="fn-1">1. Citation here <a href="#fnref-1">↩</a></p>
```

### 2. Image Captions (`[caption]...[/caption]`)
- **Converted to:** HTML5 `<figure>` and `<figcaption>` elements
- **Features:**
  - Properly semantic HTML
  - Styled with CSS
  - Support for alignment (right/left floats)
  - Responsive sizing

**Example:**
```markdown
Before: [caption id="..." align="alignright" width="300"]![alt](url) caption text[/caption]
After: 
<figure>
  <img src="url" alt="alt" />
  <figcaption>caption text</figcaption>
</figure>
```

## Files Processed

- ✅ src/materials/bunting-materials.md
- ✅ src/materials/niedecker-materials.md
- ✅ src/materials/oppen-materials.md
- ✅ src/materials/reznikoff-materials.md
- ✅ src/pages/introduction.md
- ✅ src/pages/the-lives.md
- ✅ src/pages/the-scholarship.md
- ✅ src/pages/the-work.md
- ✅ src/people/carl-rakosi.md
- ✅ src/people/lorine-niedecker.md
- ✅ src/writing/niedeckers-writing.md
- ✅ src/writing/oppens-writing.md
- ✅ src/writing/rakosis-writing.md

## CSS Additions

Added styling for:
- Superscript footnote links
- Footnote reference paragraphs
- Figure elements with captions
- Image alignment (left/right floats)

## Testing

Run `npm run dev` and check:
1. Footnote links work and jump to notes
2. Back arrows return to text
3. Images display with captions
4. Responsive behavior on mobile

## Future Use

The conversion script (`convert-shortcodes.js`) can be run again if you:
- Add new content with WordPress shortcodes
- Import additional pages
- Need to reprocess files

Just run: `node convert-shortcodes.js`
