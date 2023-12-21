import { projects } from "./utils/projects";

export default function sitemap() {
  let pages = ["", "contact"];

  projects.forEach((project) => {
    pages.push(`case-studies/${project.slug}`);
  });

  return pages.map((page) => {
    return {
      url: `https://recipes-yall.vercel.app/${page}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    };
  });
}
