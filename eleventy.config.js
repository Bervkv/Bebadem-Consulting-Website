module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");

  // Date en français : "18 octobre 2026"
  eleventyConfig.addFilter("dateFr", (date) =>
    new Intl.DateTimeFormat("fr-FR", { dateStyle: "long", timeZone: "UTC" }).format(date)
  );

  // Articles du plus récent au plus ancien
  eleventyConfig.addCollection("news", (api) =>
    api.getFilteredByGlob("src/articles/*.md").sort((a, b) => b.date - a.date)
  );

  // Les trois derniers, pour l'accueil
  eleventyConfig.addCollection("latestNews", (api) =>
    api.getFilteredByGlob("src/articles/*.md").sort((a, b) => b.date - a.date).slice(0, 3)
  );

  return {
    // Sécurité : le Markdown n'est pas interprété comme du code de gabarit
    markdownTemplateEngine: false,
    dir: { input: "src", output: "_site" },
  };
};