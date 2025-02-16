const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

// Only one module.exports per configuration file, please!
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("customstyles");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("b4eef191457c4b6ebf0812ce0cbb16c5.txt");

  eleventyConfig.addPassthroughCopy("{,!(_site)/**/}*.webp");

	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// output image formats
		formats: ["webp"],

		// output image widths
		widths: [200, 600, 800, "auto"],

		// optional, attributes assigned on <img> nodes override these values
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async",
        sizes: "max-width:576 200, max-width:768 600, max-width:1200 800, min-width:1200 auto"
			},
			pictureAttributes: {}
		},
	});
};


