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
              Recipes Yall!
            </h2>
            <p className="mt-10 text-lg leading-6 text-white max-w-3xl mx-auto">
              Recipes Yall! is a full service recipe collection and sharing site
              that allows users to create, share, and rate recipes! We are a
              team of passionate developers, designers, and foodies who are
              dedicated to making the best recipe sharing site on the web.
            </p>
          </div>
        </div>
      </div>

      <CaseStudyList />
      <CTA />
    </main>
  );
}
