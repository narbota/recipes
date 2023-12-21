import { getRecipeList } from "./utils/recipes";

export default async function sitemap() {
  let pages = [""];

  const recipeList = await getRecipeList();

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
