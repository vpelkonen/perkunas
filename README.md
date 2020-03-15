# Perkunas ry website
[![Netlify Status](https://api.netlify.com/api/v1/badges/dbfeb30a-e712-4b6e-bb5a-1a5718aacbea/deploy-status)](https://app.netlify.com/sites/perkunas/deploys)

This repo contains the Perkunas ry association website that is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org): **[Demo Link](https://gatsby-netlify-cms.netlify.com/)**.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Features

- A simple landing page with blog functionality built with Netlify CMS
- Editabe Pages: Landing, About, Product, Blog-Collection and Contact page with Netlify Form support
- Create Blog posts from Netlify CMS
- Tags: Separate page for posts under each tag
- Basic directory organization
- Uses Bulma for styling, but size is reduced by `purge-css-plugin`
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Uses `gatsby-image` with Netlify-CMS preview support
- Separate components for everything
- Netlify deploy configuration
- Netlify function support, see `lambda` folder
- Perfect score on Lighthouse for SEO, Accessibility and Performance (wip:PWA)
- ..and more
