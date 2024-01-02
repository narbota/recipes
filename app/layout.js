import { Inter } from "next/font/google";
import "./globals.css";
import Search from "./components/Search";
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
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={`bg-teal-400 border-b border-white/10`}>
          <div className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
            <Search />
            <a href="/" className="mx-auto">
              🍲 Recipes, Yall!
            </a>
          </div>
        </header>

        {children}
        <footer className={`bg-white py-10`}>
          <div className={`text-center text-grey-300`}>
            2023 &copy; Kontent.ai
            <br />
          </div>
        </footer>
      </body>
    </html>
  );
}
