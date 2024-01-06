"use client";
import React from "react";
import XLSX from "xlsx";

class ExcelToJsonConverter extends React.Component {
  handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const sheetName = workbook.SheetNames[0]; // Assuming you want the first sheet
      const sheet = workbook.Sheets[sheetName];

      const jsonData = XLSX.utils.sheet_to_json(sheet);
      console.log(jsonData);

      // Handle jsonData as needed (e.g., set state, send to API, etc.)
    };

    reader.onerror = (event) => {
      console.error("File could not be read! Code " + event.target.error.code);
    };

    reader.readAsArrayBuffer(file);
  };

  render() {
    return (
      <div>
        <h1>Excel to JSON Converter</h1>
        <input type="file" onChange={this.handleFileUpload} />
        {/* Additional components or UI elements can be added here */}
      </div>
    );
  }
}

export default ExcelToJsonConverter;
