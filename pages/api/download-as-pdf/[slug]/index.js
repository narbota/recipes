import { getRecipeListFromKontentAI } from "../../../../app/utils/kontentai";
import fetch from "node-fetch";

const handler = (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return generatePDFwithPDFKit(req, res);

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;

const generatePDFwithPDFKit = async (req, res) => {
  const { slug } = req.query;

  // First get content from Kontent AI
  // Change this to your own content source
  const recipeList = await getRecipeListFromKontentAI();
  const recipe = recipeList.find((recipe) => recipe.slug === slug);

  // Then generate the PDF with PDFKit
  // Documentation for PDFKit: https://pdfkit.org/docs/getting_started.html
  const PDFDocument = require("pdfkit");
  const pdf = new PDFDocument({
    size: "A4",
  });

  const margin = {
    x: 15,
    y: 15,
  };

  // Adapt it to your own content
  if (recipe.image) {
    try {
      let image = await fetch(recipe.image).then((res) => res.buffer());

      pdf.image(image, margin.x, margin.y, {
        width: 200,
        height: 150,
        fit: [200, 150],
      });

      margin.y += 160;
    } catch (error) {
      console.error("Error fetching image", error);
    }
  }

  pdf
    .font("Helvetica-Bold")
    .fontSize(16)
    .text(recipe.title, margin.x, margin.y);

  pdf
    .font("Helvetica")
    .fontSize(10)
    .text(
      `Link to recipe: https://recipes-yall.netlify.app/recipes/${recipe.slug}`
    );

  pdf.font("Helvetica").fontSize(10).text(recipe.body);

  pdf
    .font("Helvetica")
    .fontSize(10)
    .text(recipe.keywords.map((keyword) => keyword.name).join(", "));

  // End and send the PDF
  pdf.end();

  const getStream = require("get-stream");

  return res.status(200).json({
    pdf: await getStream.buffer(pdf),
  });
};
