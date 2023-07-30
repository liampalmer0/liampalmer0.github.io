import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const projectsDir = join(process.cwd(), "app/", "_projects");

export function getPostSlugs() {
  return fs.readdirSync(projectsDir);
}

export function getProjectBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(projectsDir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = "projects/" + realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
    if (field === "preview") {
      items[field] = "assets/img/projects/" + data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  return getPostSlugs()
    .map((slug) => getProjectBySlug(slug, fields))
    .sort((a, b) => (a.index < b.index ? -1 : 1));
}

export function getSocials() {
  return [
    {
      url: "https://github.com/liampalmer0",
      imgSrc: "/assets/img/GitHub-Mark-64px.png",
      label: "GitHub",
    },
    {
      url: "https://www.linkedin.com/in/liam-palmer",
      imgSrc: "/assets/img/linkedin-72px.png",
      label: "LinkedIn",
    },
    {
      url: "https://leetcode.com/liampalmer0/",
      imgSrc: "/assets/img/LeetCode-logo.png",
      label: "LeetCode",
    },
  ];
}
