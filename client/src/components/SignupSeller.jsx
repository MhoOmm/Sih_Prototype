import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png'

const SignupSeller = () => {

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name:"",
    email: "",
    number: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signing up with:\nEmail: ${credentials.email}\nPassword: ${credentials.password}`);
    setCredentials({ email: "", password: "" , name:"", number: ""});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,197,94,0.15),transparent_50%)]"></div>
      
      {/* Form Container */}
      <div className="bg-white/5 backdrop-blur-xl border border-gray-800/50 p-8 rounded-2xl shadow-2xl w-full max-w-md relative z-10">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">

          {/* ARANYA LOGO INSERTION */}
          <img 
          src={Logo} 
          alt="logo_aranya"
          className="w-32 h-auto mb-6 mx-auto" />
          <p className="text-gray-400 text-sm">Discover Jharkhand's Beauty!</p>
        </div>

        {/* Seller Signup Title */}
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Seller Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={credentials.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full bg-black/20 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-600"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full bg-black/20 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-600"
            />
          </div>

          {/* Aadhar Card Number Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Aadhar Card Number
            </label>
            <input
              type="text"
              name="number"
              value={credentials.number}
              onChange={handleChange}
              placeholder="Enter your 12-digit Aadhar number"
              required
              pattern="[0-9]{12}"
              maxLength="12"
              className="w-full bg-black/20 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-600"
            />
            <p className="text-xs text-gray-500">
              12-digit unique identification number
            </p>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Create Password
            </label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Create a strong password"
              required
              className="w-full bg-black/20 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-600"
            />
            <p className="text-xs text-gray-500">
              Minimum 8 characters recommended
            </p>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start space-x-3">
            <input 
              type="checkbox" 
              required
              className="mt-1 accent-green-500 bg-transparent border-gray-600 rounded"
            />
            <label className="text-sm text-gray-400 leading-relaxed">
              I agree to the{" "}
              <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={() => navigate("/showcase-craft")}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-green-500/25 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Create Seller Account
          </button>

          {/* Login Link */}
          {/* <p className="text-sm text-gray-400 text-center pt-4 border-t border-gray-800">
            Already have an account?{" "}
            <NavLink 
              to="/login"
              className="text-green-400 hover:text-green-300 font-medium transition-colors"
            >
              Sign in
            </NavLink> 
          </p> */}
        </form>

        {/* Additional Info */}
        <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-green-400 mb-1">
                Seller Benefits
              </h4>
              <p className="text-xs text-gray-400">
                Access to marketplace, customer analytics, and secure payment processing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-0 right-0 text-center text-gray-500 text-xs">
        <p>© 2025 Arnaya. Empowering local businesses.</p>
      </div>
    </div>
  );
};

export default SignupSeller;
