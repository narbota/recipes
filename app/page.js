import FeatureList from "./components/feature-list";
import CustomerList from "./components/customer-list";
import CaseStudyList from "./components/case-study-list";
import CTA from "./components/cta";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="tracking-normal bg-white">
      <div className="bg-gradient-to-t from-blue-400 to-blue-900 relative">
        <div className="max-w-5xl mx-auto py-16 sm:py-48 px-4 sm:px-6 lg:px-8 relative overflow-hidden z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-5xl tracking-wide">
              <span className="block">
                <span className="relative">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute left-0 lg:-bottom-5 h-[0.58em] w-full lg:fill-white/50 -bottom-2 fill-white/10"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                  </svg>
                  Your partner
                </span>{" "}
                for software development
              </span>
            </h2>
            <p className="mt-10 text-lg leading-6 text-white max-w-3xl mx-auto">
              We empower enterprises with a comprehensive suite of services,
              covering software development, solutions architecture, DevOps, and
              digital transformation.
            </p>

            <div className="mt-12">
              <a
                href="/contact"
                className="relative whitespace-nowrap text-white text-lg font-semibold bg-white/10 px-5 py-3 rounded-lg hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span className="relative">
                  <ChatBubbleBottomCenterTextIcon className="h-6 w-6 inline-block mr-2 -mt-1" />
                  Get in touch
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <CustomerList />

      <FeatureList />

      <CaseStudyList />

      <CTA />
    </main>
  );
}
