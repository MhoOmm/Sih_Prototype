import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Login = () => {
  const [role, setRole] = useState("user"); // user, seller, government
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    seller_id: "",
    unique_id: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === "user") {
      navigate("/home");
    } else if (role === "seller") {
      navigate("/seller-dashboard");
    } else if (role === "government") {
      navigate("/govt-coin-dash");
    }

    setFormData({
      email: "",
      password: "",
      seller_id: "",
      unique_id: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      
      {/* Role Selector */}
      <div className="flex space-x-2 mb-8 bg-black/40 backdrop-blur-sm p-1 rounded-xl border border-gray-800 relative z-10">
        <button
          onClick={() => setRole("user")}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            role === "user" 
              ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/25" 
              : "text-gray-400 hover:text-white hover:bg-gray-800/50"
          }`}
        >
          User
        </button>
        <button
          onClick={() => setRole("seller")}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            role === "seller" 
              ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/25" 
              : "text-gray-400 hover:text-white hover:bg-gray-800/50"
          }`}
        >
          Seller
        </button>
        <button
          onClick={() => setRole("government")}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            role === "government" 
              ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/25" 
              : "text-gray-400 hover:text-white hover:bg-gray-800/50"
          }`}
        >
          Government
        </button>
      </div>

      {/* Form Container */}
      <div className="bg-white/5 backdrop-blur-xl border border-gray-800/50 p-8 rounded-2xl shadow-2xl w-full max-w-md relative z-10">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-4 shadow-lg">
            <img src={Logo} className="scale-150" />
          </div>
        </div>

        {/* Role Title */}
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          {role.charAt(0).toUpperCase() + role.slice(1)} Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* USER & SELLER: EMAIL */}
          {role !== "government" && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full bg-black/20 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-600"
              />
            </div>
          )}

          {/* GOVERNMENT: UNIQUE_ID */}
          {role === "government" && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Unique Government ID
              </label>
              <input
                type="text"
                name="unique_id"
                value={formData.unique_id}
                onChange={handleChange}
                required
                placeholder="Enter your unique ID"
                className="w-full bg-black/20 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-600"
              />
            </div>
          )}

          {/* PASSWORD */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full bg-black/20 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-600"
            />
          </div>

          {/* SELLER_ID */}
          {role === "seller" && (
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">
                Seller ID
              </label>
              <input
                type="text"
                name="seller_id"
                value={formData.seller_id}
                onChange={handleChange}
                required
                placeholder="Enter your seller ID"
                className="w-full bg-black/20 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-600"
              />
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-green-500/25 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Log In
          </button>

          {/* Sign Up Links */}
          {role === "user" && (
            <p className="text-sm text-gray-400 text-center pt-4 border-t border-gray-800">
              Don't have an account?{" "}
              <NavLink 
                to="/signupuser"
                className="text-green-400 hover:text-green-300 font-medium transition-colors"
              >Sign up
              </NavLink>
            </p>
          )}

          {role === "seller" && (
            <p className="text-sm text-gray-400 text-center pt-4 border-t border-gray-800">
              Don't have an account?{" "}
              <NavLink 
                to="/signupseller"
                className="text-green-400 hover:text-green-300 font-medium transition-colors"
              >
                Sign up
              </NavLink>
            </p>
          )}
        </form>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-500 text-xs relative z-10">
        <p>© 2025 Arnaya. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Login;
