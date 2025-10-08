import { useState } from "react";
import sggs from "../assets/bw sggs.png";
import { Link, useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 px-4 py-2 font-semibold rounded-xl shadow hover:bg-red-500 transition duration-300"
    >
      Logout
    </button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-red-600 to-red-500 text-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-4 py-1">
        {/* Logo */}
        <Link to="/">
          <img
            src={sggs}
            alt="Website Logo"
            style={{
              height: "85px",
              width: "180px",
              objectFit: "contain",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.boxShadow =
                "0 8px 18px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(0, 0, 0, 0.2)";
            }}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {["Home", "About", "Faculty", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-green-200 transition-all duration-300 hover:scale-105"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="bg-white text-green-700 font-semibold px-4 py-2 rounded-xl shadow hover:bg-gray-100 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-green-800 px-4 py-2 font-semibold rounded-xl shadow hover:bg-green-700 transition duration-300"
          >
            Sign Up
          </Link>
          <LogoutButton />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center bg-green-700 py-4 space-y-4 text-lg font-medium">
          {["Home", "About", "Faculty", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-green-200 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/login"
              className="bg-white text-green-700 px-4 py-2 rounded-xl shadow hover:bg-gray-100 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="bg-green-800 px-4 py-2 rounded-xl shadow hover:bg-green-700 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}
