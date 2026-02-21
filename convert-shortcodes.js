const fs = require('fs');
const path = require('path');

// Recursively find all markdown files
function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findMarkdownFiles(filePath, fileList);
    } else if (file.endsWith('.md')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const files = findMarkdownFiles('src');

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Track footnotes for this file
  const footnotes = [];
  let footnoteCounter = 1;
  
  // Convert [ref]...[/ref] to linked footnotes
  content = content.replace(/\\\[ref\\\](.*?)\\\[\/ref\\\]/gs, (match, footnoteText) => {
    const noteNum = footnoteCounter++;
    footnotes.push({ num: noteNum, text: footnoteText });
    modified = true;
    return `<sup id="fnref-${noteNum}"><a href="#fn-${noteNum}">[${noteNum}]</a></sup>`;
  });
  
  // Add footnotes section at the end if any were found
  if (footnotes.length > 0) {
    content += '\n\n---\n\n## Notes\n\n';
    footnotes.forEach(note => {
      content += `<p id="fn-${note.num}">${note.num}. ${note.text} <a href="#fnref-${note.num}">↩</a></p>\n\n`;
    });
    modified = true;
  }
  
  // Convert WordPress caption shortcodes to HTML figures
  // Pattern: [caption id="..." align="..." width="..."]![alt](url) caption text[/caption]
  content = content.replace(
    /\\\[caption[^\]]*\\\]!\[([^\]]*)\]\(([^)]+)\)\s*([^\[]+)\\\[\/caption\\\]/g,
    (match, alt, url, caption) => {
      modified = true;
      return `<figure>
  <img src="${url}" alt="${alt}" />
  <figcaption>${caption.trim()}</figcaption>
</figure>`;
    }
  );
  
  // Save file if modified
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Processed: ${filePath}`);
  }
});

console.log('\nDone! All WordPress shortcodes converted.');
