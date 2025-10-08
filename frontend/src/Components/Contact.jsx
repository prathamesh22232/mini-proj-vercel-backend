import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-red-50 flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold text-red-800 mb-8">📞 Contact Us</h1>

      {/* Institute Address */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl border border-red-300 mb-10">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">🏫 Institute Address</h2>
        <p className="text-lg text-red-700">
          Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIE&T)
          <br />
          Vishnupuri, Nanded, Maharashtra - 431606, India
        </p>
      </div>

      {/* Contact Information */}
      <div className="bg-red-100 shadow-md rounded-lg p-6 w-full max-w-4xl border border-red-300 mb-10">
        <h2 className="text-2xl font-semibold text-red-800 mb-4">📠 Contact Information</h2>
        <ul className="text-lg text-red-700 leading-relaxed">
          <li>
            <strong>Registrar:</strong> +91-2462-269161
          </li>
          <li>
            <strong>Office Superintendent:</strong> +91-2462-269162
          </li>
          <li>
            <strong>Fax:</strong> +91-2462-229236
          </li>
          <li>
            <strong>PA to Director:</strong> +91-2462-229234, +91-2462-269102
          </li>
        </ul>
      </div>

      {/* Key Contacts */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl border border-red-300 mb-10">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">👥 Key Contacts</h2>
        <ul className="text-lg text-red-700 leading-relaxed">
          <li>
            <strong>Director:</strong> Dr. M. B. Kokare
            <br />
            Phone: +91-2462-229234
            <br />
            Fax: +91-2462-229236
            <br />
            Email: director@sggs.ac.in
          </li>
          <li className="mt-4">
            <strong>Registrar:</strong> Dr. A. R. Patil
            <br />
            Phone: +91-2462-269161
            <br />
            Fax: +91-2462-229236
            <br />
            Email: registrar@sggs.ac.in
          </li>
          <li className="mt-4">
            <strong>Dean (Academics):</strong> Dr. A. B. Gonde
            <br />
            Phone: +91-2462-229234
            <br />
            Fax: +91-2462-229236
            <br />
            Email: dean.acad@sggs.ac.in
          </li>
          <li className="mt-4">
            <strong>Dean (Student Affairs):</strong> Prof. S. B. Dethe
            <br />
            Phone: +91-2462-229234, +91-2462-269127 (Direct)
            <br />
            Fax: +91-2462-229236
            <br />
            Email: dean.sa@sggs.ac.in
          </li>
          <li className="mt-4">
            <strong>Dean (Industry Liaison) & Incharge TPO:</strong> Prof. S. S. Hatkar
            <br />
            Phone: +91-2462-269181
            <br />
            Email: tpo@sggs.ac.in
          </li>
        </ul>
      </div>

      {/* Additional Contacts */}
      <div className="bg-red-100 shadow-md rounded-lg p-6 w-full max-w-4xl border border-red-300 mb-10">
        <h2 className="text-2xl font-semibold text-red-800 mb-4">📬 Additional Contacts</h2>
        <ul className="text-lg text-red-700 leading-relaxed">
          <li>
            <strong>Department of Production Engineering - Head:</strong> Dr. P. R. Kubade
            <br />
            Email: prkubade@sggs.ac.in, head.prod@sggs.ac.in
          </li>
          <li className="mt-4">
            <strong>Website Updates (Production Dept.):</strong> Ms. Deepa Hanwate
            <br />
            Email: cadprod@sggs.ac.in
            <br />
            Mobile: +91-9112612486
          </li>
          <li className="mt-4">
            <strong>Assistant Professor (Production Dept.):</strong> Dr. Dipak G. Wagre
            <br />
            Email: dgwagre@sggs.ac.in
            <br />
            Mobile: +91-9911029790
          </li>
        </ul>
      </div>

      {/* Website */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl border border-red-300">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">🌐 Website</h2>
        <p className="text-lg text-red-700">
          For more information, visit our official website:{" "}
          <a href="https://www.sggs.ac.in" className="text-red-800 underline">
            www.sggs.ac.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
