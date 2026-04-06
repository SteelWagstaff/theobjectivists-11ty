# Responsive Design Testing Checklist

## Breakpoints Found in CSS
- 490px (mobile + extra)
- 600px (tablet)
- 780px (medium desktop)
- 920px (large desktop)
- 1150px (extra large)

## Test Results

### Mobile (320px - 490px)
**Navigation:**
- [ ] Menu button visible and clickable
- [ ] Menu items stack vertically
- [ ] Site title readable at small size

**Content:**
- [ ] Text remains readable (no horizontal scroll)
- [ ] Images scale properly
- [ ] Paragraphs have proper line height
- [ ] Footnotes/links accessible

**Footer:**
- [ ] Search form fits on screen
- [ ] Links legible and tappable
- [ ] Copyright text readable

### Tablet (490px - 780px)
**Navigation:**
- [ ] Menu transitions to inline layout
- [ ] Title and description side-by-side
- [ ] Navigation items horizontally aligned

**Content:**
- [ ] Grid layouts reflow to 2-3 columns
- [ ] Text width optimal (max-width: 680px applied)
- [ ] Poet cards display in grid
- [ ] Section headers prominent

**Footer:**
- [ ] Search form properly sized
- [ ] All footer links accessible

### Desktop (780px+)
**Navigation:**
- [ ] Fixed position navigation at 920px+
- [ ] All menu items visible
- [ ] Title, description, and menu properly spaced

**Content:**
- [ ] Full grid layouts display (3-4 items per row)
- [ ] Poet cards with hover effects visible
- [ ] Two-column layout for text + sidebar
- [ ] Optimal line lengths maintained

**Typography:**
- [ ] Headlines at full size
- [ ] Body text comfortable to read
- [ ] Line heights appropriate

### Print
- [ ] Footnote tooltips hidden
- [ ] Header/footer hidden
- [ ] Images hidden
- [ ] Text dark on white background

## Assets to Verify on Mobile
- [ ] Background image loads (or gracefully degrades)
- [ ] Google Fonts load on slow connections
- [ ] Typekit fonts load or fallback works
- [ ] No layout shift from font loading
- [ ] Images lazy-load (if applicable)

## Search Form Verification
- [ ] Form visible in footer
- [ ] Input field clickable
- [ ] Submit button accessible
- [ ] Text field has adequate padding for touch
- [ ] Form styling matches design intent

## Known Issues to Check
- [ ] No horizontal scroll on any viewport
- [ ] No text overflow
- [ ] No unintended font size changes
- [ ] Menu doesn't overlap content
- [ ] Footnote links work on touch devices
