---
layout: default
title: All Projects
---
{% for proj in site.projects %}
  <h2>
    <a href="{{ proj.url }}">
      {{ proj.name }}
    </a>
  </h2>
  <!-- <p>{{ staff_member.content | markdownify }}</p> -->
{% endfor %}