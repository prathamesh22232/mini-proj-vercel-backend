import React from "react";
import { Link } from "react-router-dom";
import sggs from "../assets/bw sggs.png"; // Ensure this path is correct
import folk from '../assets/studentimg.png'

const Home = () => {
  const years = [
    {
      title: "First Year",
      link: "/notes/first-year",
      description: "Basics of engineering, mathematics, physics, and programming.",
    },
    {
      title: "Second Year",
      link: "/notes/second-year",
      description: "Core subjects including DSA, OOP, circuit design, and network theory.",
    },
    {
      title: "Third Year",
      link: "/notes/third-year",
      description: "Advanced topics like AI, DBMS, Networking, CST, ML, and VLSI.",
    },
    {
      title: "Final Year",
      link: "/notes/final-year",
      description: "Final year projects, research papers, and industry-level knowledge.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen justify-between bg-red-50">
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center px-6 py-16">

      <div className="flex items-center justify-between w-full">
                <img src={folk} alt="folk lok" className="w-1/3 h-auto rounded-lg shadow-xl" />
                <div className="w-1/6"></div> {/* Space between image and text */}
                <p className="text-3xl font-extrabold text-white p-6 bg-red-400 rounded-2xl shadow-lg animate-bounce ring-4 ring-white ring-opacity-50 w-1/2">
                    Welcome to the  utility web page of our EXTC department... Hope you are doing well!
                </p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
        <h1 className="text-5xl font-bold text-red-800 mb-10 text-center">
          📚 उत्कृष्ट तांत्रिकज्ञानार्थं जनशक्तेः शिक्षणम्
        </h1>
        <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl">
          Select your academic year to access relevant notes, study materials, and key resources.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl">
          {years.map((year, index) => (
            <div
              key={index}
              className="bg-white border border-red-200 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-200"
            >
              <Link
                to={year.link}
                className="inline-block bg-red-500 text-white font-semibold rounded-full py-2 px-4 text-lg mb-3 hover:bg-red-700 transition-all duration-200"
              >
                {year.title}
              </Link>
              <p className="text-gray-700 text-sm">{year.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-600 to-red-500 text-white py-8 shadow-inner">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
          {/* Left Column */}
          <div className="md:w-2/5 mb-6 md:mb-0">
            <img
              src={sggs}
              alt="logo"
              className="h-20 mb-4 rounded-md shadow-md"
            />
            <p className="text-sm mb-2">
              A centralized platform by the Electronics and Telecommunication department to access previous year question papers and academic resources with ease.
            </p>
            <div className="text-sm mt-4 leading-6">
              Vishnupuri, Nanded (Maharashtra State),
              <br />
              INDIA PIN 431606 <br />
              <span className="inline-flex items-center gap-2">
                <img
                  src="/icons8-phone-20.png"
                  alt="phone"
                  className="inline-block"
                />
                02462-269234
              </span>
            </div>
          </div>

          {/* Right Columns */}
          <div className="md:w-3/5 flex flex-col sm:flex-row justify-between gap-12">
            {/* Academics */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Academics</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="https://www.sggs.ac.in/home/page/Curriculum-and-Syllabus" className="hover:underline hover:text-green-200">
                    Syllabus
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline hover:text-green-200">
                    Academic Calendar
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline hover:text-green-200">
                    Academic Resources
                  </Link>
                </li>
              </ul>
            </div>

            {/* Other Links */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Other Links</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="hover:underline hover:text-green-200">
                    ELITE
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline hover:text-green-200">
                    Placements
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline hover:text-green-200">
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            {/* Student Life */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Student Life</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="#" className="hover:underline hover:text-green-200">
                    Guruji Education Foundation
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline hover:text-green-200">
                    Sadbhavana Scholarship
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline hover:text-green-200">
                    Hostel
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
