import { getRecipeList } from "../../utils/recipes";

const getRecipe = async (slug) => {
  const recipeList = await getRecipeList();
  return recipeList.find((recipe) => recipe.slug === slug);
};

export async function generateMetadata({ params }, parent) {
  const slug = params.slug;
  const recipe = await getRecipe(slug);

  return {
    title: recipe.title + " | Recipes, Yall!",
    description: recipe.title,
    openGraph: {
      images: [recipe.image],
    },
    keywords: [recipe.title, "recipes yall"],
  };
}

export async function generateStaticParams() {
  const recipeList = await getRecipeList();
  return recipeList.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export default async function Page({ params }) {
  const recipe = await getRecipe(params.slug);

  if (!recipe) {
    return <></>;
  }

  return (
    <div className="isolate border-t border-black/10 pb-24">
      <div className="px-6 py-6 lg:px-8 mx-auto max-w-7xl bg-white mt-64 border border-gray-200 rounded-lg shadow-lg">
        <div className="">
          <img
            src={recipe.image}
            alt={recipe.title}
            title={recipe.title}
            className="h-96 w-96 object-cover rounded-lg shadow-lg mx-auto -mt-56"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 mt-6 text-center bg-white mt-10">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div>
              <h1>
                <span className="block max-w-5xl font-display text-2xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-3xl mx-auto">
                  {recipe.title}
                </span>
              </h1>
              <button className="bg-teal-400">Generate recipe pdf</button>

              <div className="mt-10 prose prose-neutral prose-lg text-neutral-600 text-left">
                <p
                  dangerouslySetInnerHTML={{
                    __html: recipe.body.replace(/\n/g, "<br />"),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
