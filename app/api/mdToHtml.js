import { remark } from "remark";
import html from "remark-html";

export default async function mdToHtml(markdown) {
  const res = await remark().use(html).process(markdown);
  return res.toString();
}
