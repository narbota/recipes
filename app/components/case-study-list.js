"use client";
import { useRouter } from "next/navigation";
import { projects } from "../utils/projects";

export default function CaseStudyList() {
  const history = useRouter();
  return (
    <div className="bg-white pt-24 sm:pt-36 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            Case Studies
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how we have helped our clients achieve success through
            technology.
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <article
              key={project.slug}
              className="flex max-w-xl flex-col items-start justify-between"
              onClick={() => {
                history.push(`/case-studies/${project.slug}`);
              }}
            >
              <div className="group relative">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  title={project.title}
                  className="aspect-[4/3] w-full rounded-lg object-cover group-hover:opacity-75 group-hover:shadow-lg"
                />
                <h3 className="mt-3 text-lg font-semibold leading-6 text-black group-hover:text-blue-700">
                  <a href={`/case-studies/${project.slug}`}>
                    <span className="absolute inset-0" />
                    {project.title}
                  </a>
                </h3>
                {/* <h4 className="mt-1 text-md font-semibold leading-6 text-gray-600">
                  {project.tagline}
                </h4> */}
                <p className="mt-2 line-clamp-3 text-md leading-6 text-gray-600">
                  {project.description}
                </p>
                <p className="mt-2 text-md leading-6 text-gray-600">
                  <a
                    href={`/case-studies/${project.slug}`}
                    className="group-hover:text-blue-700"
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
