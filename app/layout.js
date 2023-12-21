import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("localhost:3000"),
  title: "Recipes, Yall!",
  description:
    "I create recipes for your eating pleasure. I also create recipes for your cooking pleasure.",
  keywords: [
    "recipes",
    "eating",
    "healthy",
    "diet",
    "food",
    "weight loss",
    "cooking",
    "foodie",
    "foodporn",
    "foodgasm",
    "foodstagram",
  ],
  authors: [{ name: "Recipes, Yall!" }],
  creator: "Recipes, Yall!",
  publisher: "Recipes, Yall!",
};

export default function RootLayout({ children }) {
  let footer = {
    background: "bg-white",
    text: "text-slate-900",
  };

  if (children.props.childPropSegment == "case-studies") {
    footer.background = "bg-gray-100";
    footer.text = "text-slate-800";
  }

  let header = {
    img: "/img/logo-light.png",
    background: "bg-blue-900",
  };

  if (
    children.props.childPropSegment == "case-studies" ||
    children.props.childPropSegment == "contact"
  ) {
    header.img = "/img/logo-dark.png";
    header.background = "bg-white";
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={`${header.background} border-b border-white/10`}>
          <div className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
            <a href="/" className="mx-auto">
              <span className="sr-only">Recipes, Yall </span>
              <img
                className="h-7 w-auto sm:h-9"
                src={header.img}
                alt="Recipes, Yall!"
                title="Recipes, Yall!"
              />
            </a>
          </div>
        </header>
        {children}
        <footer className={`${footer.background} py-10`}>
          <div className={`text-center ${footer.text}`}>
            2023 &copy; Recipes Yall!, LLC
            <br />
          </div>
        </footer>
      </body>
    </html>
  );
}
