---
layout: default
title: About
permalink: /about/
---

# About This Site

This is a data-driven Jekyll site that showcases how GitHub Actions can be used to automatically generate data for your website.

## How It Works

Every time there's a push to the main branch of this repository, a GitHub Action runs that:

1. Generates a new CSV file with random data (or data from an API)
2. Commits that CSV file to the repository
3. Triggers a Jekyll rebuild

The data from the CSV file is then displayed on the home page in an aesthetically pleasing card layout.

## Technologies Used

- **Jekyll**: A static site generator written in Ruby
- **GitHub Actions**: Automated workflows that run on GitHub
- **SCSS**: For styling the site
- **JavaScript**: For interactive elements
- **CSV**: For storing and presenting data

## Get Started

To create your own data-driven Jekyll site:

1. Fork this repository
2. Customize the GitHub Action to generate the data you need
3. Modify the templates and CSS to match your design preferences
4. Push your changes to GitHub

Enjoy building your data-driven static site!