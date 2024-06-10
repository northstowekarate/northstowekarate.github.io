const Image = require("@11ty/eleventy-img");

// Only one module.exports per configuration file, please!
module.exports = function (eleventyConfig) {
	eleventyConfig.addShortcode("image",
    async (
      src,
      alt,
      widths = [480, 800],
      formats = ['jpeg'],
      sizes = '(max-width: 600px) 480px, 800px',
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
        loading: "lazy",
        decoding: "async",
      };

      return Image.generateHTML(imageMetadata, imageAttributes);
    }
  );
  eleventyConfig.addPassthroughCopy("static");
};

