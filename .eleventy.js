const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

// Only one module.exports per configuration file, please!
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("b4eef191457c4b6ebf0812ce0cbb16c5.txt");

  eleventyConfig.addPassthroughCopy("{,!(_site)/**/}*.webp");
  eleventyConfig.addPassthroughCopy("{,!(_site)/**/}*.pdf");

	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// output image formats
		formats: ["webp"],

		// output image widths
		widths: [150, 320, 600, 800, 1200, 1920, "auto"],

		// optional, attributes assigned on <img> nodes override these values
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async",
        sizes: "max-width: 576px 100vw, max-width: 768px 100vw, max-width: 1200px 100vw, auto"
			},
			pictureAttributes: {}
		},
	});
};


