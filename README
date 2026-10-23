# BEBADEM CONSULTING Website

The official website for **BEBADEM CONSULTING**, built with Eleventy (11ty), HTML, CSS, JavaScript, and Nunjucks. The website presents the company's services, approach, contact information, and news articles.

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Building and Deploying](#building-and-deploying)
- [Managing News Articles](#managing-news-articles)
- [Article Template](#article-template)
- [Publishing an Article Through GitHub](#publishing-an-article-through-github)
- [Website Maintenance](#website-maintenance)

## Overview

The website is a static website generated with Eleventy. This means that the source files are transformed into HTML pages that can be hosted on a static hosting platform.

The website includes pages such as:

- Home
- About (`À propos`)
- Services
- Approach (`Approche`)
- News and articles (`Actualités`)
- Contact
- Thank-you page (`Merci`)

The news section uses Markdown files, allowing new articles to be added without modifying the website's HTML templates or styling.

## Technologies

| Technology | Purpose |
|---|---|
| Eleventy (11ty) | Generates the website |
| HTML | Defines page content and structure |
| CSS | Controls appearance and layout |
| JavaScript | Provides interactive functionality |
| Nunjucks | Provides reusable templates and layouts |
| Markdown | Allows articles to be written in a simple, readable format |
| Netlify Forms | Intended to handle contact form submissions, subject to deployment configuration |

## Project Structure

The main project files and folders are organized as follows:

```text
Bebadem-Consulting-Website/
├── src/
│   ├── articles/       # News articles in Markdown
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript files
│   ├── images/         # Website images
│   ├── index.html      # Home page
│   ├── contact.html    # Contact page
│   ├── a-propos.html   # About page
│   ├── approche.html   # Approach page
│   ├── services.html   # Services page
│   ├── merci.html      # Thank-you page
│   └── actualites.njk  # News listing template
├── eleventy.config.js  # Eleventy configuration
├── package.json        # Project dependencies and commands
├── package-lock.json   # Locked dependency versions
└── README.md           # Project documentation
```

The `_site/` directory is generated when Eleventy builds the website. It contains the output that gets deployed. Do not normally edit the files inside `_site/` manually, because the next build will regenerate them.

## Getting Started

### Requirements

Install Node.js and npm before running the project.

### Install dependencies

Open a terminal in the project directory and run:

```bash
npm install
```

### Run the development server

```bash
npm run start
```

Eleventy starts a local development server. Open the local URL displayed in the terminal to preview the website.

Stop the server with `Ctrl + C`.

### Build the website

```bash
npm run build
```

This generates the website in the `_site/` directory.

## Building and Deploying

The website's source files must be built before the generated output is deployed.

If the hosting provider is connected to the GitHub repository, the usual workflow is:

1. Make a change to the source files.
2. Commit and push the change to the configured Git branch.
3. Allow the hosting platform to run the build.
4. Check the published website.

The exact build and publish settings depend on the hosting provider. For a typical Eleventy deployment, the build command is `npm run build` and the publish directory is `_site`.

Confirm these settings in the hosting dashboard before changing them.

## Managing News Articles

**You do not need to modify the website's code to add a normal news article.**

Articles are stored as Markdown files in:

```text
src/articles/
```

Each article is a separate `.md` file. Eleventy uses the article files to generate the news pages, while the existing templates control their appearance.

The website configuration includes collections for all news articles and the three latest articles. These collections sort articles by date, with the newest first.

### What the website owner needs to do

For each new article:

1. Create a new Markdown file in `src/articles/`.
2. Give the file a unique, descriptive filename.
3. Add the article's title, publication date, and content.
4. Save and publish the file through the existing deployment workflow.
5. Check the website after the build completes.

There is no need to edit `actualites.njk`, the CSS, JavaScript, or `eleventy.config.js` for an ordinary new article.

## Article Template

Copy this example when creating a new article:

```markdown
---
title: "Your Article Title"
date: 2026-10-23
description: "A short summary of the article."
---

# Your Article Title

Write your introduction here.

## First section

Write the main content of your article here.

## Conclusion

Write your closing remarks here.
```

Save the file with a unique name, for example:

```text
src/articles/importance-de-la-cybersecurite.md
```

**Important:**

- Replace the example title, date, description, and body with the real article information.
- Use a valid date in `YYYY-MM-DD` format.
- Use a unique filename for every article.
- Keep the opening and closing `---` lines around the metadata.
- Write the article in Markdown. Use `#` for a main heading and `##` for a section heading.
- Avoid copying the example article unchanged into the live website.
- Check existing articles to confirm the exact metadata fields and formatting supported by the current templates.

## Publishing an Article Through GitHub

The website owner can add an article using GitHub's website interface without installing software or opening the source code in an editor.

1. Open the website's GitHub repository.
2. Navigate to `src/articles/`.
3. Select **Add file**, then **Create new file**.
4. Enter a filename, for example `nouvel-article.md`.
5. Paste the article template and replace the example content.
6. Preview the changes if GitHub offers the option.
7. Commit the new file to the branch used by the website's deployment.
8. Wait for the hosting platform to finish deploying.
9. Visit the news section and confirm that the article appears correctly.

The owner needs appropriate write access to the repository. If they should not have access to the source code, a content-management system is a better solution.

### Adding images to articles

Before adding an image, check how the existing articles and templates handle images. Use an image location that will remain accessible after deployment. Do not assume that an image filename in Markdown will work unless the file is stored in the correct location and the image path is correct.

## Website Maintenance

For routine article publishing, the owner should only need to add Markdown files.

Changes to the following usually require development work:

- Website layout or navigation
- Styling and responsive design
- Contact form functionality
- Article templates or metadata processing
- Website configuration
- New features

### Recommended practices

- Keep a backup of important changes.
- Use unique article filenames.
- Preview changes before publishing when possible.
- Verify that the deployment succeeds.
- Never commit passwords, API keys, or other secrets to the repository.

## Content Management System (CMS)

The current Markdown-based workflow does not automatically provide a visual editor or publishing dashboard.

If the goal is for the owner to log in to a private dashboard, write an article in a form, add images, and click **Publish** without dealing with GitHub files, a CMS such as Decap CMS can be integrated with Eleventy.

That requires additional setup, including authentication, content configuration, and a publishing workflow. It is not automatically available simply because the website uses Markdown.

## Summary

BEBADEM CONSULTING is a static website generated with Eleventy. Its existing article system allows new content to be added as Markdown files without changing the website's design or code. The owner can publish through GitHub, while a CMS can provide an easier dashboard-based workflow if needed.
