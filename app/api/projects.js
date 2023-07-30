export async function getProjectDetails(slug) {
  const pathPrefix = "/assets/img/projects/";
  switch (slug) {
    case "css-art":
      return {
        title: "CSS Art",
        lang: "CSS",
        repo: "https://github.com/liampalmer0/css-art",
        images: [
          [pathPrefix + "css-art/bike.png", "A screenshot of a CSS drawing of a road bike"],
          [
            pathPrefix + "css-art/cube.png",
            "A screenshot of an animated spinning CSS cube with the letter 'A' drawn on each face",
          ],
          [
            pathPrefix + "css-art/traffic.png",
            "A screenshot of a CSS drawing of traffic light with blinking lights",
          ],
        ],
        action: { label: "View gallery", url: "/projects/css-art/gallery.html" },
        markdown: `
          My own small collection of art made with CSS. Inspired by Lynn Fisher's [A Single Div](https://a.singlediv.com/).
          \nWhen I saw Lynn Fisher's work I thought I would try my hand at both single div and multi-div CSS art. 
          This project has been a bit of an experiment but also a fantastic learning experience.
          \nWho would have thought a bunch of overlapping gradients could look so good?
          \n**[View Gallery](/projects/css-art/gallery.html)**
          `.trim(),
      };
    case "money-man":
      return {
        title: "Money Man",
        lang: "JavaScript",
        repo: "https://github.com/liampalmer0/MoneyMan",
        techs: ["Electron", "React"],
        images: [
          [pathPrefix + "moneyMan.png", "Screenshot of the Money Man Project (a spending planner)"],
        ],
        markdown: `
          Money Man is a money management desktop app made with Electron and React.
          \nThis project started out as a simple net income calculator for hourly workers and only used pure JavaScript and Electron. 
          I decided to overhaul the project during the first few months of 2021 by switching to React and building out some more features.
          \nThe project is still under development but most of the basic features are present and working.
        `.trim(),
      };
    case "meta-post":
      return {
        title: "liampalmer0.github.io",
        lang: "HTML",
        repo: "https://github.com/liampalmer0/liampalmer0.github.io",
        techs: ["Jekyll", "Liquid", "SCSS"],
        preview: "port.png",
        images: [
          [
            pathPrefix + "port.png",
            "A screenshot of the portfolio website. The main heading reads 'Hi, I'm Liam'",
          ],
        ],
        markdown: `
          An online showcase of my notable work so far.
          \nI built the site with Jekyll, Liquid, and SCSS. I chose to do all the styling and scripting myself instead of using a Jekyll theme.
          `.trim(),
      };
    case "fotd":
      return {
        title: "Fit of the Day",
        lang: "JavaScript",
        repo: "https://github.com/liampalmer0/fit-of-the-day",
        techs: ["Node", "Express", "Pug", "PostgreSQL"],
        images: [
          [
            pathPrefix + "fotd/fotd.png",
            "A screenshot of the Fit of the Day website. There are drawings of clothes floating in the background and text that reads 'Daily outfits made for you'",
          ],
          [
            pathPrefix + "fotd/fotd-login.png",
            "Fit of the Day login screenshot with green logo with t-shirt shape",
          ],
          [
            pathPrefix + "fotd/fotd-dash.png",
            "Fit of the Day dashboard screenshot showing 3 recommended outfits, the day's current weather, and calendar events",
          ],
          [
            pathPrefix + "fotd/fotd-closet.png",
            "Fit of the Day closet page screenshot showing a list of all uploaded articles including a thumbnail, title, and description",
          ],
          [
            pathPrefix + "fotd/fotd-cal.png",
            "Fit of the Day calendar screenshot showing the entire current month with event indicators on a few days",
          ],
          [
            pathPrefix + "fotd/fotd-erd.png",
            "An entity relationship diagram showing Fit of the Day's database schema. Tables include 'user', 'closet', 'article', 'outfit', 'event', 'garment type', and 'dress code'",
          ],
        ],
        markdown: `
          A configurable outfit recommendation web app. Uses local weather, calendar events and a list of clothes to generate outfits. 
          FOTD is based loosely on the computerized closet from the 1995 movie _Clueless_.
          \nThe site was built with Node.js and the web framework Express.js. 
          PostgreSQL was used for persistence and an ORM called Sequelize was used to interact with the data.
          \nSome of the final features included:
          \n- CRUD operations for clothing items
          \n- Outfit recommendations
          \n- Encrypted sign up/login using Passport.js
          \n- Built in calendar from Toast UI
          \n- Configurable weather display with geolocation support
          \nThis project was my undergraduate senior design project and was completed over 8 months in a team of three. 
          My role was lead/full stack developer, technical architect, and project manager.
        `.trim(),
      };
    case "dw-anki":
      return {
        repo: "https://github.com/liampalmer0/dw-anki-soup",
        title: " DW to Anki",
        lang: " Python",
        techs: ["BeautifulSoup4", "genanki", "Click"],
        images: [
          [
            pathPrefix + "dw-anki.png",
            "Screenshot of a terminal interface with the text 'DW Anki. Interactive Mode. Review and choose which words to add. Acht, eight. Use this entry? Yes, no, edit.'",
          ],
        ],
        markdown: `Python CLI application that adds Deutsche Welle German course vocab to Anki.
          \nI started this project for my own personal use. For the past year or so, 
          I've been learning German and using some of the free courses provided by Deutsche Welle. 
          For many of these lessons, a vocabulary list is shown at the end which contains the new words and phrases used in that lesson. 
          I thought that these would be good words to practice and remember but there was no way to export or save them.
          \nIn my language learning journey I had also heard about the spaced repetition app called Anki. 
          I even started using it a bit but found that entering every new word I learned got pretty tedious.
          \nWith those two things in mind, I had my idea. **I should automate the process of moving the vocab words from the DW courses to my Anki deck.**
          \nSo I did some research and found a Python library for creating Anki decks, \`genanki\`, 
          and I knew I could use web scraping to get the vocab words from the Deutsche Welle site. 
          For the user interface, since I was fine with using the command line, I decided to start there.
        `.trim(),
      };
    default:
      return {};
  }
}
