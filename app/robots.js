export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://recipes-yall.netlify.app/sitemap.xml",
  };
}
