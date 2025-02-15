const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

// Only one module.exports per configuration file, please!
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("customstyles");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("b4eef191457c4b6ebf0812ce0cbb16c5.txt");

  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
};


