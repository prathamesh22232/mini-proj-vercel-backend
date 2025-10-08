import React from "react";

const facultyData = [
  {
    name: "RRM Sir",
    subject: "VLSI , EDC , ACD",
    qualification: "Ph.D. from IIT Kharagpur in 2003",
    description: "Highly experienced and simplifies complex concepts.",
    image: "../Pics/lord.webp",
  },
  {
    name: "UK Mam",
    subject: "MCA , Digital image processing",
    qualification: "Ph.D",
    description: "Makes learning interactive and practical.",
    image: "../Pics/usha.webp",
  },
  {
    name: "Dr. D.D. Doye",
    subject: "LINEAR INTEGRATED CIRCUITS",
    qualification: "Ph.D from SRTMU Nanded in 2003",
    description: "Excellent problem-solving approach.",
    image: "../Pics/doye.webp",
  },
  {
    name: "Tamboli Sir",
    subject: "Embedded Systems",
    qualification: "Ph.D from Dr.BAMU Ch.Sambhajinagar",
    description: "Passionate about digital circuits and logic.",
    image: "../Pics/tamboli.webp",
  },
  {
    name: "Bhalerao Sir (HOD ENTC)",
    subject: "Digital Electronics",
    qualification: "Ph.D completed in 2008",
    description: "Deep knowledge and clear explanations.",
    image: "../Pics/bhalerao.webp",
  },
  {
    name: "Jatti Sir",
    subject: "CST , DC",
    qualification: "Ph.D from IIT Roorkee",
    description: "Encourages logical thinking and coding.",
    image: "../Pics/jatti.jpg",
  },
  {
    name: "Nandedkar Sir",
    subject: "Machine Learning",
    qualification: "Ph.D. from IIT Kharagpur in 2008",
    description: "Great at breaking down complex topics.",
    image: "../Pics/nandedkar.webp",
  },
  {
    name: "Ingole Sir",
    subject: "SIGNALS AND SYSTEMS",
    description: "Engaging lectures with practical insights.",
    image: "../Pics/ingole.webp",
  },
  {
    name: "Padma Mam",
    subject: "DVD",
    description: "Patient and ensures deep understanding.",
    image: "../Pics/padma.webp",
  },
  {
    name: "Nitin Sir",
    subject: "CONTROL SYSTEM & DATA STRUCTURES",
    qualification: "M.Tech in Electronics",
    description: "Explains real-world applications effectively.",
    image: "../Pics/nitin.webp",
  },
];

const Faculty = () => {
  return (
    <div className="bg-gradient-to-b from-red-50 via-red-100 to-red-200 min-h-screen py-14 px-6">
      <h2 className="text-5xl text-center font-extrabold text-red-800 mb-12 drop-shadow-lg">
        🌟 Our Esteemed Faculty
      </h2>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {facultyData.map((faculty, index) => (
          <div
            key={index}
            className="group bg-white rounded-3xl p-6 shadow-xl transform transition duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-red-400 border border-red-200 hover:border-red-500 hover:bg-red-50"
          >
            <img
              src={faculty.image}
              alt={faculty.name}
              className="w-32 h-32 mx-auto rounded-full border-4 border-red-500 object-cover mb-4 transition duration-300 group-hover:scale-105 shadow-md"
            />
            <h3 className="text-2xl font-bold text-red-700 group-hover:text-red-900">{faculty.name}</h3>
            <p className="text-sm text-red-600 mt-1 font-semibold">
              📘 {faculty.subject}
            </p>
            {faculty.qualification && (
              <p className="text-gray-700 text-sm mt-1">🎓 {faculty.qualification}</p>
            )}
            <p className="text-gray-600 mt-3 italic text-sm leading-relaxed">
              {faculty.description}
            </p>
            <div className="mt-4 flex justify-center">
              <span className="px-3 py-1 text-xs rounded-full bg-red-100 text-red-700 font-semibold">
                Faculty Member
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
