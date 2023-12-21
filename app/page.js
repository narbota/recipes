import RecipeList from "./components/recipe-list";
import { getRecipeList } from "./utils/recipes";

export default async function Home({}) {
  const recipeList = await getRecipeList();

  return (
    <main className="tracking-normal bg-white">
      <div className="bg-teal-400 relative">
        <div className="max-w-5xl mx-auto py-12 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-grey-800 sm:text-5xl tracking-wide">
              Recipes, Yall!
            </h2>
            <p className="mt-10 text-lg leading-6 text-grey-800 max-w-3xl mx-auto">
              Recipes Yall! is a full service recipe collection and sharing site
              that allows users to create, share, and rate recipes! We are a
              team of passionate developers, designers, and foodies who are
              dedicated to making the best recipe sharing site on the web.
            </p>
          </div>
        </div>
      </div>

      <RecipeList recipeList={recipeList} />
    </main>
  );
}
