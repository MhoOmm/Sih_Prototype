import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png'

const SignupUser = () => {
  const [credentials, setCredentials] = useState({
    name:"",
    email: "",
    nationality: "",
    password: "",
  });

  const navigate = useNavigate();


  // List of countries for dropdown
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Argentina", "Australia", "Austria", 
    "Bangladesh", "Belgium", "Brazil", "Canada", "Chile", "China", "Colombia", 
    "Denmark", "Egypt", "Finland", "France", "Germany", "Ghana", "Greece", 
    "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Japan", 
    "Jordan", "Kenya", "Malaysia", "Mexico", "Netherlands", 
    "New Zealand", "Nigeria", "Norway", "Pakistan", "Philippines", "Poland", 
    "Portugal", "Russia", "Saudi Arabia", "Singapore", "South Africa","South Korea", "Spain", 
    "Sri Lanka", "Sweden", "Switzerland", "Thailand", "Turkey", "Ukraine", 
    "United Kingdom", "United States", "Vietnam", "Other"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Signing up with:\nEmail: ${credentials.email}\nPassword: ${credentials.password}`);
    setCredentials({ email: "", password: "" , name:"", nationality: ""});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.12),transparent_50%)]"></div>
      
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

        {/* User Signup Title */}
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          CREATE AN ACCOUNT
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

          {/* Nationality Dropdown */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-300">
              Nationality
            </label>
            <select
              name="nationality"
              value={credentials.nationality}
              onChange={handleChange}
              required
              className="w-full bg-black/20 border border-gray-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-gray-600 appearance-none cursor-pointer"
            >
              <option value="" className="bg-gray-900 text-gray">
                Select your country
              </option>
              {countries.map((country, index) => (
                <option 
                  key={index} 
                  value={country.toLowerCase()} 
                  className="bg-gray-900 text-white"
                >
                  {country}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
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
            <div className="flex items-start space-x-2">
              <div className="flex-shrink-0 mt-1">
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              </div>
              <p className="text-xs text-gray-500">
                Password should be at least 8 characters long
              </p>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex items-start space-x-3">
            <input 
              type="checkbox" 
              className="mt-1 accent-green-500 bg-transparent border-gray-600 rounded"
            />
            <label className="text-sm text-gray-400 leading-relaxed">
              Subscribe to our newsletter for travel tips and destination updates
            </label>
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
            onClick={() => navigate("/home")}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-green-500/25 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black"
          >Create Account
          </button>

          {/* Login Link
          <p className="text-sm text-gray-400 text-center pt-4 border-t border-gray-800">
            Already have an account?{" "}
            <NavLink 
              to="/login"
              className="text-green-400 hover:text-green-300 font-medium transition-colors"
            >
              Sign in
            </NavLink>
          </p> */}
        </form>

        {/* Welcome Message */}
        <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
          <div className="text-center">
            <h4 className="text-sm font-medium text-green-400 mb-1">
              🎉 Welcome to Arnaya!
            </h4>
            <p className="text-xs text-gray-400">
              Get ready to explore the hidden gems of Jharkhand with our virtual tours and local guides.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-0 right-0 text-center text-gray-500 text-xs">
        <p>© 2025 Arnaya. Your gateway to Jharkhand's wonders.</p>
      </div>
    </div>
  );
};

export default SignupUser;
