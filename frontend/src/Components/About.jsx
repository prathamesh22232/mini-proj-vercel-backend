import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center p-10">
      <h1 className="text-5xl font-bold text-red-800 mb-8">📖 About Departmental Academic Portal</h1>

      {/* Introduction */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl border border-red-300 mb-10">
        <h2 className="text-3xl font-semibold text-red-700 mb-4">💡 What Is This Portal?</h2>
        <p className="text-lg text-red-700 leading-relaxed">
          The Departmental Academic Portal is a MERN-based web application built specifically for Electronics and Telecommunication Engineering students. 
          It provides a centralized platform to access and download previous year question papers (PYQs), ensuring better preparation and academic performance.
        </p>
        <p className="text-lg text-red-700 leading-relaxed mt-4">
          With its clean, responsive, and user-friendly interface, students can conveniently search and retrieve academic materials categorized by semester and exam type (ISE1, ISE2, END).
        </p>
      </div>

      {/* Problem Statement */}
      <div className="bg-red-100 shadow-md rounded-lg p-6 w-full max-w-4xl border border-red-300 mb-10">
        <h2 className="text-3xl font-semibold text-red-800 mb-4">❌ The Challenge Students Face</h2>
        <p className="text-lg text-red-700 leading-relaxed">
          Students often struggle to find previous year question papers due to the lack of a centralized resource. Informal sharing methods such as WhatsApp groups or photocopies lead to inconsistent and inefficient access to important academic materials.
        </p>
        <p className="text-lg text-red-700 leading-relaxed mt-4">
          This portal addresses that gap by offering a structured solution that saves time, increases accessibility, and enhances exam preparation.
        </p>
      </div>

      {/* Objective */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl border border-red-300 mb-10">
        <h2 className="text-3xl font-semibold text-red-700 mb-4">🎯 Our Objectives</h2>
        <ul className="list-disc list-inside text-red-700 space-y-3 text-lg">
          <li>📚 Centralize access to PYQs for all semesters.</li>
          <li>📱 Build a responsive and user-friendly portal using MERN stack.</li>
          <li>🔐 Ensure secure storage and smooth document handling.</li>
          <li>🧑‍🏫 Foster collaboration between students and faculty.</li>
          <li>🔧 Lay the groundwork for future features like notes, event updates, and faculty uploads.</li>
        </ul>
      </div>

      {/* Tech Stack Summary */}
      <div className="bg-red-100 shadow-md rounded-lg p-6 w-full max-w-4xl border border-red-300 mb-10">
        <h2 className="text-3xl font-semibold text-red-800 mb-4">🛠️ Tech Stack & Architecture</h2>
        <p className="text-lg text-red-700 leading-relaxed">
          The frontend is built with React.js and Vite for a fast and dynamic UI. The backend uses Express.js and Node.js to handle logic and file management, while MongoDB stores document metadata. Axios is used for smooth API communication.
        </p>
        <p className="text-lg text-red-700 leading-relaxed mt-4">
          This modular architecture enables real-time updates, scalability, and future enhancements like exam tips and syllabus uploads.
        </p>
      </div>

      {/* Advantages */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl border border-red-300 mb-10">
        <h2 className="text-3xl font-semibold text-red-700 mb-4">✅ Why This Portal Matters</h2>
        <ul className="list-disc list-inside text-red-700 space-y-3 text-lg">
          <li>⏱️ Saves time and reduces dependency on physical notes.</li>
          <li>📂 Categorized access by subject, semester, and exam type.</li>
          <li>🌱 Eco-friendly solution with reduced paper usage.</li>
          <li>📥 Downloadable content for offline preparation.</li>
          <li>📶 Available 24/7—no more library restrictions!</li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className="bg-red-100 shadow-md rounded-lg p-6 w-full max-w-4xl border border-red-300">
        <h2 className="text-3xl font-semibold text-red-800 mb-4">📌 Final Note</h2>
        <p className="text-lg text-red-700 leading-relaxed">
          This portal is a stepping stone towards digital transformation in academic resource sharing. While challenges like data storage and responsive design were present, the system demonstrates innovation and serves as a solid base for future upgrades.
        </p>
        <p className="text-xl font-semibold text-red-800 mt-6 text-center">
          📚 Happy Learning! Let’s make exam prep smarter and simpler! 🎉
        </p>
      </div>
    </div>
  );
};

export default About;
