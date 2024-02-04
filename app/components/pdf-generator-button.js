"use client";
import React, { useState } from "react";

const DownloadPDFButton = ({ slug }) => {
  const [loading, setLoading] = useState(false);

  const getPDF = async () => {
    setLoading(true);

    try {
      const response = await fetch(`/api/download-as-pdf/${slug}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseJSON = await response.json();

      const buffer = Buffer.from(responseJSON.pdf, "base64");
      const blob = new Blob([buffer], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.setAttribute("download", `${slug}.pdf`);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading PDF", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={getPDF} className="bg-teal-400 rounded px-2.5 py-3.5">
      {loading ? "Downloading..." : "Download as PDF"}
    </button>
  );
};

export default DownloadPDFButton;
