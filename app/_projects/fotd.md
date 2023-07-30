---
layout: project
title: Senior Capstone
lang: JavaScript
index: 1
repo: https://github.com/liampalmer0/fit-of-the-day
techs:
  - Node
  - Express
  - Pug
  - PostgreSQL
preview: fotd/fotd.png
images:
  - [
      fotd/fotd.png,
      "A screenshot of the Fit of the Day website. There are drawings of clothes floating in the background and text that reads 'Daily outfits made for you'",
    ]
  - [
      fotd/fotd-login.png,
      "Fit of the Day login screenshot with green logo with t-shirt shape",
    ]
  - [
      fotd/fotd-dash.png,
      "Fit of the Day dashboard screenshot showing 3 recommended outfits, the day's current weather, and calendar events",
    ]
  - [
      fotd/fotd-closet.png,
      "Fit of the Day closet page screenshot showing a list of all uploaded articles including a thumbnail, title, and description",
    ]
  - [
      fotd/fotd-cal.png,
      "Fit of the Day calendar screenshot showing the entire current month with event indicators on a few days",
    ]
  - [
      fotd/fotd-erd.png,
      "An entity relationship diagram showing Fit of the Day's database schema. Tables include 'user', 'closet', 'article', 'outfit', 'event', 'garment type', and 'dress code'",
    ]
desc: A configurable outfit recommendation web app
---

A configurable outfit recommendation web app. Uses local weather, calendar events and a list of clothes to generate outfits. FOTD is based loosely on the computerized closet from the 1995 movie _Clueless_.

The site was built with Node.js and the web framework Express.js. PostgreSQL was used for persistence and an ORM called Sequelize was used to interact with the data.

Some of the final features included:

- CRUD operations for clothing items
- Outfit recommendations
- Encrypted sign up/login using Passport.js
- Built in calendar from Toast UI
- Configurable weather display with geolocation support

This project was my undergraduate senior design project and was completed over 8 months in a team of three. My role was lead/full stack developer, technical architect, and project manager.
