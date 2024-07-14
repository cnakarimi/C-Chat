import React, { useState, ChangeEvent, FormEvent } from "react";

const Settings: React.FC = () => {
  // Define state for form fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Process the form data (e.g., send it to a server)
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div className="flex flex-col">
        <label
          className="mb-2 font-semibold text-gray-700 dark:text-gray-300"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="rounded-md border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          type="text"
          id="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Enter your username"
        />
      </div>
      <div className="flex flex-col">
        <label
          className="mb-2 font-semibold text-gray-700 dark:text-gray-300"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="rounded-md border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          type="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
        />
      </div>
      <div className="flex flex-col">
        <label
          className="mb-2 font-semibold text-gray-700 dark:text-gray-300"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="rounded-md border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          type="password"
          id="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter your password"
        />
      </div>
      <button
        type="submit"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Save Changes
      </button>
    </form>
  );
};

export default Settings;
