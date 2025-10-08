import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Faculty from "./Components/Faculty";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import PrivateRoute from "./Components/PrivateRoute";
import FirstYear from "./Components/FirstYear";
import SecondYear from "./Components/SecondYear";
import ThirdYear from "./Components/ThirdYear";
import FourthYear from "./Components/FourthYear";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/contact" element={<Contact />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/notes/first-year"
          element={
            <PrivateRoute>
              <FirstYear />
            </PrivateRoute>
          }
        />
        <Route
          path="/notes/second-year"
          element={
            <PrivateRoute>
              <SecondYear />
            </PrivateRoute>
          }
        />
        <Route
          path="/notes/third-year"
          element={
            <PrivateRoute>
              <ThirdYear />
            </PrivateRoute>
          }
        />
        <Route
          path="/notes/final-year"
          element={
            <PrivateRoute>
              <FourthYear />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
