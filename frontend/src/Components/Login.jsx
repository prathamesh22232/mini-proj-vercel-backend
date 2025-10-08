import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const json = await response.json();
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-red-200 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={onChange}
              required
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              required
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-xl shadow transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
