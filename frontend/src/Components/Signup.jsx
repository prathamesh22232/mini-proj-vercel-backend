import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    } else {
      alert("Now... Login with same credentials to proceed");
    }
  };

  const onChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-red-200 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={credentials.name}
              onChange={onChange}
              required
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              required
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              minLength={5}
              value={credentials.password}
              onChange={onChange}
              required
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 rounded-xl shadow transition duration-300"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
