import { LinkIcon } from "@heroicons/react/24/solid";
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
    description: recipe.tagline,
    openGraph: {
      images: [recipe.thumbnail],
    },
    keywords: [...recipe.technologies, recipe.title],
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
            src={recipe.thumbnail}
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
              <div className="mt-2 max-w-3xl text-xl text-neutral-600 mx-auto">
                <p>{recipe.tagline}</p>
              </div>

              <div className="mt-10 prose prose-neutral prose-lg text-neutral-600 text-left">
                <p
                  dangerouslySetInnerHTML={{
                    __html: recipe.description.replace(/\n/g, "<br />"),
                  }}
                />
              </div>

              <div className="mt-10 prose prose-neutral prose-lg text-neutral-600 text-left">
                <span className="font-semibold">What we used:</span>
                <div className="gap-x-2 gap-y-2 mt-2 flex flex-wrap">
                  {recipe.technologies.map((technology) => (
                    <span
                      className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-neutral-100 text-neutral-800"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {recipe.links.length > 0 && (
                <div className="mt-10 prose prose-neutral prose-lg text-neutral-600 text-left mb-10">
                  <span className="font-semibold">Links to visit:</span>
                  <div className="gap-x-10 gap-y-2 mt-2 flex flex-wrap">
                    {recipe.links.map((link) => (
                      <a
                        href={link.url}
                        target="_blank"
                        className="text-teal-500 hover:text-teal-500 flex underline decoration-wavy decoration-black/50 underline-offset-4"
                        key={link.url}
                      >
                        {link.label} <LinkIcon className="h-4 w-4 ml-1 mt-1" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
