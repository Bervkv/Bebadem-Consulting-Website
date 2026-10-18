// Configuration d'Eleventy : dossiers d'entrée/sortie et fichiers copiés tels quels
module.exports = function (eleventyConfig) {
  // Ces dossiers sont copiés sans transformation dans _site
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: { input: "src", output: "_site" },
  };
};