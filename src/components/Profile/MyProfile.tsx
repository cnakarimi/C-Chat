import React from "react";

const MyProfile: React.FC = () => {
  return (
    <div className="space-y-4 p-4">
      <div className="flex flex-col">
        <label
          className="mb-2 font-semibold text-gray-700 dark:text-gray-300"
          htmlFor="fullName"
        >
          Full Name
        </label>
        <input
          className="rounded-md border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          type="text"
          id="fullName"
          placeholder="Enter your full name"
        />
      </div>

      <div className="flex flex-col">
        <label
          className="mb-2 font-semibold text-gray-700 dark:text-gray-300"
          htmlFor="fullName"
        >
          User Name
        </label>
        <input
          className="rounded-md border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          type="text"
          id="fullName"
          placeholder="Enter your Username"
        />
      </div>

      <div className="flex flex-col">
        <label
          className="mb-2 font-semibold text-gray-700 dark:text-gray-300"
          htmlFor="bio"
        >
          Bio
        </label>
        <textarea
          className="rounded-md border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          id="bio"
          placeholder="Enter a short bio"
        ></textarea>
      </div>
      <div className="flex flex-col">
        <label
          className="mb-2 font-semibold text-gray-700 dark:text-gray-300"
          htmlFor="location"
        >
          Age
        </label>
        <input
          className="rounded-md border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          type="text"
          id="location"
          placeholder="Enter your Age"
        />
      </div>
      <button className="mt-4 rounded-md bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700">
        Save Changes
      </button>
    </div>
  );
};

export default MyProfile;
