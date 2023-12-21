import { getRecipeList } from "./utils/";

export default async function sitemap() {
  let pages = [""];

  const recipeList = await getRecipeList();

  recipeList.forEach((recipe) => {
    pages.push(`recipes/${recipe.slug}`);
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
