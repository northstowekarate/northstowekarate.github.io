const Image = require("@11ty/eleventy-img");

// Only one module.exports per configuration file, please!
module.exports = function (eleventyConfig) {
	eleventyConfig.addShortcode("image",
    async (
      src,
      alt,
      classes = '',
      loading = 'lazy',
      widths = [480, 800, 1200],
      formats = ['webp'],
      sizes = '(max-width: 600px) 480px, 800px, 1200px',
    ) => {
      const imageMetadata = await Image(src, {
        widths: [...widths, null],
        formats: [...formats, null],
        outputDir: '_site/assets/images',
        urlPath: '/assets/images',
      });

      const imageAttributes = {
        alt,
        sizes,
        loading: loading,
        decoding: "async",
        class: classes,
      };

      return Image.generateHTML(imageMetadata, imageAttributes);
    }
  );
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("customstyles");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("b4eef191457c4b6ebf0812ce0cbb16c5.txt");
};

