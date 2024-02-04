import { getRecipeListFromKontentAI } from "./utils/kontentai";

export default async function sitemap() {
  let pages = [""];

  const recipeList = await getRecipeListFromKontentAI();

  recipeList.forEach((recipe) => {
    pages.push(`recipes/${recipe.slug}`);
  });

  return pages.map((page) => {
    return {
      url: `https://recipes-yall.netlify.app/${page}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    };
  });
}
