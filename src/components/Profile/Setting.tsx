import React, { useState } from "react";

const Settings: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const renderContent = () => {
    switch (selectedOption) {
      case "darkMode":
        return (
          <div>
            <h2 className="font-semibold text-gray-700 dark:text-gray-300">
              Dark Mode
            </h2>
            <p>Here you can toggle dark mode settings.</p>
            {/* Add dark mode setting controls here */}
          </div>
        );
      case "chatSetting":
        return (
          <div>
            <h2 className="font-semibold text-gray-700 dark:text-gray-300">
              Chat Settings
            </h2>
            <p>Here you can adjust your chat settings.</p>
            {/* Add chat setting controls here */}
          </div>
        );
      case "privacy":
        return (
          <div>
            <h2 className="font-semibold text-gray-700 dark:text-gray-300">
              Privacy
            </h2>
            <p>Here you can manage your privacy settings.</p>
            {/* Add privacy setting controls here */}
          </div>
        );
      default:
        return (
          <div>
            <p>Select an option to view settings.</p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-4 p-4">
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
        Settings
      </h1>
      <div className="flex flex-col space-y-2">
        <button
          onClick={() => setSelectedOption("darkMode")}
          className="rounded-md bg-gray-200 px-4 py-2 text-left text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
        >
          Dark Mode
        </button>
        <button
          onClick={() => setSelectedOption("chatSetting")}
          className="rounded-md bg-gray-200 px-4 py-2 text-left text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
        >
          Chat Settings
        </button>
        <button
          onClick={() => setSelectedOption("privacy")}
          className="rounded-md bg-gray-200 px-4 py-2 text-left text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
        >
          Privacy
        </button>
      </div>
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default Settings;
