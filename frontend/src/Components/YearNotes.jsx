import React, { useState, useEffect } from "react";
import { FaFolderOpen } from "react-icons/fa";
import Papa from "papaparse";
import axios from "axios";

const folders = [
  { title: "ISE-1", id: "ise1" },
  { title: "ISE-2", id: "ise2" },
  { title: "End Sem", id: "endsem" },
];

const YearNotes = ({ yearTitle }) => {
  const [sheetData, setSheetData] = useState([]);

  // Replace with your actual published CSV link
  const sheetURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2NGqrN8s0p7BLA9UyDAe1pXh1S4z-inAjXtaKnqPsQkuSHWLStcV12x80BQmNP5s8tayb_1A_V2YL/pub?output=csv";

  useEffect(() => {
    const fetchCSV = async () => {
      const response = await axios.get(sheetURL);
      Papa.parse(response.data, {
        header: true,
        complete: (results) => {
          setSheetData(results.data);
          console.log("Fetched sheet data:", results.data); // Log inside the callback
        },
      });
    };

    fetchCSV();
  }, []);

  const handleViewClick = (folderTitle) => {
    const match = sheetData.find(
      (item) =>
        item.Year?.toLowerCase() === yearTitle.toLowerCase() &&
        item.Folder?.toLowerCase() === folderTitle.toLowerCase()
    );

    if (match && match["PDF Link"]) {
      window.open(match["PDF Link"], "_blank");
    } else {
      alert("No file found for this section.");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-10">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-10">
        📁 {yearTitle} PYQ / Notes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {folders.map((folder) => (
          <div
            key={folder.id}
            className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 text-center border hover:shadow-2xl transition-all duration-300"
          >
            <FaFolderOpen className="text-5xl text-yellow-500 mb-4" />
            <h2 className="text-xl font-semibold text-blue-700 mb-4">{folder.title}</h2>

            <button
              onClick={() => handleViewClick(folder.title)}
              className="mt-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300"
            >
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearNotes;
