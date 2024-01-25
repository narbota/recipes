"use client";
import React, { useState } from "react";
import html2pdf from "html2pdf.js";

const PdfGenerator = () => {
  const [htmlContent, setHtmlContent] = useState("");

  const generatePdf = () => {
    // Get the HTML content you want to convert to PDF
    const currentHtmlContent = document.documentElement.outerHTML;
    setHtmlContent(currentHtmlContent);

    // Options for pdf generation (optional)
    const pdfOptions = {
      margin: 10,
      filename: "generated_pdf.pdf",
      recipe_image: { type: "jpeg" }, // Change the image type to "jpeg"
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    // Generate the PDF
    html2pdf(htmlContent, pdfOptions);
  };

  return (
    <div>
      <button onClick={generatePdf} className="bg-teal-400">
        Generate Recipe PDF
      </button>
    </div>
  );
};

export default PdfGenerator;
