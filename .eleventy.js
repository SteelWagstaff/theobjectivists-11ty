module.exports = function(eleventyConfig) {
  // Collections
  eleventyConfig.addCollection("people", c => c.getFilteredByTag("people"));
  eleventyConfig.addCollection("materials", c => c.getFilteredByTag("materials"));
  eleventyConfig.addCollection("scholarship", c => c.getFilteredByTag("scholarship"));
  eleventyConfig.addCollection("writing", c => c.getFilteredByTag("writing"));
  
  // Pass through assets
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Configure markdown to allow HTML
  eleventyConfig.setLibrary("md", require("markdown-it")({
    html: true,
    linkify: true,
    typographer: true
  }));
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
