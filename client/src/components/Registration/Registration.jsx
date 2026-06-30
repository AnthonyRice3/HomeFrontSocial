import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2]">
      <form
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm text-center"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-6 text-[#333] text-2xl font-bold">Sign Up</h2>

        <div className="mb-4 text-left">
          <label className="block mb-2 font-bold text-[#555]">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-3 border border-[#ccc] rounded-lg text-base"
          />
        </div>

        <div className="mb-4 text-left">
          <label className="block mb-2 font-bold text-[#555]">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-3 border border-[#ccc] rounded-lg text-base"
          />
        </div>

        <div className="mb-4 text-left">
          <label className="block mb-2 font-bold text-[#555]">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-3 border border-[#ccc] rounded-lg text-base"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#667eea] text-white text-base border-none rounded-lg cursor-pointer transition-colors duration-300 hover:bg-[#5645a2]"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;