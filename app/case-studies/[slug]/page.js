import {
  ChevronLeftIcon,
  ChevronRightIcon,
  LinkIcon,
} from "@heroicons/react/24/solid";
import { projects } from "../../utils/projects";

const getProject = (slug) => {
  return projects.find((project) => project.slug === slug);
};

const getNextProject = (slug) => {
  const index = projects.findIndex((project) => project.slug === slug);

  // return null if the project is not found
  if (index === -1) {
    return null;
  }

  // return null if the project is the last one
  if (index === projects.length - 1) {
    return null;
  }

  return projects[index + 1];
};

const getPreviousProject = (slug) => {
  const index = projects.findIndex((project) => project.slug === slug);

  // return null if the project is not found
  if (index === -1) {
    return null;
  }

  // return null if the project is the first one
  if (index === 0) {
    return null;
  }

  return projects[index - 1];
};

export async function generateMetadata({ params }, parent) {
  // read route params
  const slug = params.slug;
  const project = getProject(slug);

  return {
    title: project.title + " | Case Studies - Innovatice",
    description: project.tagline,
    openGraph: {
      images: [project.thumbnail],
    },
    keywords: [...project.technologies, project.title],
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function Page({ params }) {
  const project = getProject(params.slug);
  const nextProject = getNextProject(params.slug);
  const previousProject = getPreviousProject(params.slug);

  if (!project) {
    return <></>;
  }

  return (
    <div className="isolate border-t border-black/10">
      <div className="px-6 py-6 lg:px-8 mx-auto max-w-7xl bg-white mt-64 border border-gray-200 rounded-lg shadow-lg">
        <div className="">
          <img
            src={project.thumbnail}
            alt={project.title}
            title={project.title}
            className="h-96 w-96 object-cover rounded-lg shadow-lg mx-auto -mt-56"
          />
        </div>
        <div className="mx-auto max-w-7xl px-4 mt-6 text-center bg-white mt-10">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div>
              <h1>
                <span className="block max-w-5xl font-display text-2xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-3xl mx-auto">
                  {project.title}
                </span>
              </h1>
              <div className="mt-2 max-w-3xl text-xl text-neutral-600 mx-auto">
                <p>{project.tagline}</p>
              </div>

              <div className="mt-10 prose prose-neutral prose-lg text-neutral-600 text-left">
                <p
                  dangerouslySetInnerHTML={{
                    __html: project.description.replace(/\n/g, "<br />"),
                  }}
                />
              </div>

              <div className="mt-10 prose prose-neutral prose-lg text-neutral-600 text-left">
                <span className="font-semibold">What we did:</span>
                <div className="gap-x-2 gap-y-2 mt-2 flex flex-wrap bg-slate-500 -ml-12 -mr-12 p-6 justify-center box-shadow">
                  {project.images.map((image) => (
                    <img
                      src={image}
                      alt=""
                      className="sm:h-72 w-auto h-48"
                      key={image}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-10 prose prose-neutral prose-lg text-neutral-600 text-left">
                <span className="font-semibold">What we used:</span>
                <div className="gap-x-2 gap-y-2 mt-2 flex flex-wrap">
                  {project.technologies.map((technology) => (
                    <span
                      className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-neutral-100 text-neutral-800"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {project.links.length > 0 && (
                <div className="mt-10 prose prose-neutral prose-lg text-neutral-600 text-left mb-10">
                  <span className="font-semibold">Links to visit:</span>
                  <div className="gap-x-10 gap-y-2 mt-2 flex flex-wrap">
                    {project.links.map((link) => (
                      <a
                        href={link.url}
                        target="_blank"
                        className="text-blue-700 hover:text-blue-600 flex underline decoration-wavy decoration-black/50 underline-offset-4"
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

      <div className="mx-auto max-w-7xl p-6">
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
          {previousProject ? (
            <ProjectLink project={previousProject} direction="left" />
          ) : (
            <div></div>
          )}
          {nextProject ? (
            <ProjectLink project={nextProject} direction="right" />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

const ProjectLink = ({ project, direction }) => (
  <div
    className={`flex ${
      direction === "left" ? "sm:justify-start" : "sm:justify-end"
    } items-center mx-auto sm:mx-0`}
  >
    <a
      href={`/case-studies/${project.slug}`}
      className={`flex items-center ${project.archived && "text-gray-100"}`}
    >
      {direction === "left" && <ChevronLeftIcon className="h-4 w-4 mr-1" />}
      {project.title}
      {direction === "right" && <ChevronRightIcon className="h-4 w-4 ml-1" />}
    </a>
  </div>
);
