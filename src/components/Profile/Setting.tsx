import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useFormContext } from "../context/FormContext";

const Settings: React.FC = () => {
  const { formData, updateFormData } = useFormContext();
  const [localFormData, setLocalFormData] = useState<FormData>(formData);

  useEffect(() => {
    setLocalFormData(formData);
  }, [formData]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLocalFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateFormData(localFormData);
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
          value={localFormData.username}
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
          value={localFormData.email}
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
          value={localFormData.password}
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
