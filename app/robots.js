export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://recipes-yall.vercel.app/sitemap.xml",
  };
}
