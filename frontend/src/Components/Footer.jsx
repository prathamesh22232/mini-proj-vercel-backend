import sggs from "../assets/bw sggs.png"; // use your actual logo path
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-600 to-red-500 text-white py-8 mt-10 shadow-inner">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
        {/* Left Column */}
        <div className="md:w-2/5 mb-6 md:mb-0">
          <img
            src={sggs}
            alt="logo"
            className="h-20 mb-4 rounded-md shadow-md"
          />
          <p className="text-sm mb-2">
            A centralized platform by the Electronics and Telecommunication
            department to access previous year question papers and academic
            resources with ease.
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
                <Link to="https://www.sggs.ac.in/home/page/Curriculum-and-Syllabus" className="hover:underline hover:text-green-800">
                  Syllabus
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline hover:text-green-800">
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline hover:text-green-800">
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
                <Link to="#" className="hover:underline hover:text-green-800">
                  ELITE
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline hover:text-green-800">
                  Placements
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline hover:text-green-800">
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
                <Link to="#" className="hover:underline hover:text-green-800">
                  Guruji Education Foundation
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline hover:text-green-800">
                  Sadbhavana Scholarship
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline hover:text-green-800">
                  Hostel
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
