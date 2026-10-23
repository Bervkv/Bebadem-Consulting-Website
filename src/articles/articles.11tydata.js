// Réglages communs à tous les articles
module.exports = {
  layout: "article.njk",
  eleventyComputed: {
    permalink: (data) => `/actualites/${data.page.fileSlug}/`,
  },
};