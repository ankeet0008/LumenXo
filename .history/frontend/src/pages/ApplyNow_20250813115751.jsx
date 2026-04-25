import React from "react";

export default function JobApplication() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
      <form
        action="https://getform.io/f/your-unique-endpoint-id"
        method="POST"
        encType="multipart/form-data"
        className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Job Application
        </h2>

        <label className="block font-medium mt-4">Applying for</label>
        <input
          type="text"
          name="role"
          value="Frontend Developers"
          readOnly
          className="w-full p-2 mt-1 border border-gray-300 rounded-md text-gray-600 bg-gray-100"
        />

        <label className="block font-medium mt-4">Full Name</label>
        <input
          type="text"
          name="full_name"
          placeholder="Enter your full name"
          required
          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
        />

        <label className="block font-medium mt-4">Highest Qualification</label>
        <input
          type="text"
          name="qualification"
          placeholder="e.g. Bachelor's in Computer Science"
          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
        />

        <label className="block font-medium mt-4">Current Location</label>
        <input
          type="text"
          name="location"
          placeholder="e.g. San Francisco, CA"
          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
        />

        <div className="flex gap-3 mt-4">
          <div className="flex-1">
            <label className="block font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              required
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex-1">
            <label className="block font-medium">Mobile Number</label>
            <input
              type="text"
              name="mobile"
              placeholder="10-digit mobile number"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <label className="block font-medium mt-4">Experience</label>
        <select
          name="experience"
          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
        >
          <option>Select your experience level</option>
          <option>Fresher</option>
          <option>1-2 Years</option>
          <option>3-5 Years</option>
          <option>5+ Years</option>
        </select>

        <label className="block font-medium mt-4">Resume/CV</label>
        <input
          type="file"
          name="resume"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md"
        />

        <button
          type="submit"
          className="w-full mt-6 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-3 rounded-md text-lg font-medium"
        >
          Submit Application
        </button>
      </form>
    </div>
    </>
  );
}
