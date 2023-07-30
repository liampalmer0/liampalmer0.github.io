---
layout: project
title: DW to Anki
lang: Python
index: 5
repo: https://github.com/liampalmer0/dw-anki-soup
techs:
  - BeautifulSoup4
  - genanki
  - Click
preview: dw-anki.png
imgClass: "dw-anki"
images:
  - [
      dw-anki.png,
      "Screenshot of a terminal interface with the text 'DW Anki. Interactive Mode. Review and choose which words to add. Acht, eight. Use this entry? Yes, no, edit.'",
    ]
desc: Python CLI app that adds Deutsche Welle German course vocab to Anki
---

Python CLI application that adds Deutsche Welle German course vocab to Anki.

I started this project for my own personal use. For the past year or so, I've been learning German and using some of the free courses provided by Deutsche Welle. For many of these lessons, a vocabulary list is shown at the end which contains the new words and phrases used in that lesson. I thought that these would be good words to practice and remember but there was no way to export or save them.

In my language learning journey I had also heard about the spaced repetition app called Anki. I even started using it a bit but found that entering every new word I learned got pretty tedious.

With those two things in mind, I had my idea. **I should automate the process of moving the vocab words from the DW courses to my Anki deck.**

So I did some research and found a Python library for creating Anki decks, `genanki`, and I knew I could use web scraping to get the vocab words from the Deutsche Welle site. For the user interface, since I was fine with using the command line, I decided to start there.
