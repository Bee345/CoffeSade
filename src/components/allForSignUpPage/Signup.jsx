import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Assuming React Router for navigation; install if needed: npm i react-router-dom

// Placeholder background image URL (coffee-themed from Unsplash)
const BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=1080&fit=crop";

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(true); // Toggle between signup/login
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    username: "",
    email: "",
    dob: "",
    country: "",
    state: "",
    password: "",
    confirmPassword: "", // New field for confirmation
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear errors on input
  };

  // Stricter validation helpers
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    return { valid: minLength && hasUpper && hasLower && hasNumber, errors: [] };
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    const requiredFields = ["firstname", "lastname", "username", "email", "password", "confirmPassword"];
    const missingFields = requiredFields.filter(field => !formData[field].trim());

    if (missingFields.length > 0) {
      setError(`Please fill in all required fields: ${missingFields.join(", ").replace(/([A-Z])/g, " $1").toLowerCase()}.`);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.valid) {
      setError("Password must be at least 8 characters long and include uppercase, lowercase, and a number.");
      return;
    }

    // Check if email already exists
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find(u => u.email === formData.email)) {
      setError("An account with this email already exists.");
      return;
    }

    // Store in localStorage (array of users)
    const newUser = { ...formData, id: Date.now() };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setSuccess("Account created successfully! Redirecting to your dashboard...");
    setTimeout(() => {
      localStorage.setItem("currentUser", JSON.stringify(newUser)); // Auto-login after signup
      navigate("/app"); // Redirect to MainLayout-wrapped route (e.g., user dashboard/home)
    }, 1500);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === formData.email && u.password === formData.password);

    if (!user) {
      setError("Details not found. Please check your email and password.");
      return;
    }

    // Simulate login (store user in localStorage/session)
    localStorage.setItem("currentUser", JSON.stringify(user));
    setSuccess("Logged in successfully! Redirecting...");
    setTimeout(() => {
      navigate("/app"); // Redirect to MainLayout-wrapped route (e.g., user dashboard/home)
    }, 1500);
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setError("");
    setSuccess("");
    setFormData({}); // Reset form
  };

  return (
    <div
      className="min-h-screen mt-22 bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
    >
      <div className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 border border-white/20">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2 font-playfair">
            {isSignup ? "Sign Up" : "Log In"}
          </h1>
          <p className="text-gray-600 text-sm">
            {isSignup ? "Create your CoffeeSade account" : "Welcome back"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={isSignup ? handleSignup : handleLogin} className="space-y-12">
          {isSignup && (
            <>
              {/* Step 1: Personal Info */}
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Personal Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name *"
                    value={formData.firstname}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    name="middlename"
                    placeholder="Middle Name"
                    value={formData.middlename}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name *"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    name="username"
                    placeholder="Username *"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full mt-3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
                <input
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  value={formData.dob}
                  onChange={handleInputChange}
                  className="w-full mt-3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              {/* Step 2: Address & Password */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Address & Security</h3>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent mb-3"
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent mb-3"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password *"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password *"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
            </>
          )}

          {!isSignup && (
            <>
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password *"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
            </>
          )}

          {/* Error/Success Messages */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {success && <p className="text-green-500 text-sm text-center">{success}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-300"
          >
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>

        {/* Write-up / Toggle Link */}
        <div className="text-center mt-6 pt-4 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            {isSignup ? "Already have an account?" : "Don't have an account yet?"}{" "}
            <button onClick={toggleForm} className="text-amber-500 font-semibold hover:underline">
              {isSignup ? "Log In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;