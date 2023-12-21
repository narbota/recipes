"use client";
import { useRouter } from "next/navigation";

export default function RecipeList({ recipeList = [] }) {
  const history = useRouter();

  return (
    <div className="bg-white pt-24 sm:pt-36 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            Highlighted Recipes
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Experience our favorite recipes!
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {recipeList.slice(0, 3).map((recipe) => (
            <article
              key={recipe.slug}
              className="flex max-w-xl flex-col items-start justify-between"
              onClick={() => {
                history.push(`/recipes/${recipe.slug}`);
              }}
            >
              <div className="group relative">
                <img
                  src={recipe.img}
                  alt={recipe.title}
                  title={recipe.title}
                  className="aspect-[4/3] w-full rounded-lg object-cover group-hover:opacity-75 group-hover:shadow-lg"
                />
                <h3 className="mt-3 text-lg font-semibold leading-6 text-black group-hover:text-teal-500">
                  <a href={`/recipes/${recipe.slug}`}>
                    <span className="absolute inset-0" />
                    {recipe.title}
                  </a>
                </h3>
                <p className="mt-2 line-clamp-3 text-md leading-6 text-gray-600">
                  {recipe.description}
                </p>
                <p className="mt-2 text-md leading-6 text-gray-600">
                  <a
                    href={`/recipes/${recipe.slug}`}
                    className="group-hover:text-teal-500"
                  >
                    Read more <span aria-hidden="true">→</span>
                  </a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
