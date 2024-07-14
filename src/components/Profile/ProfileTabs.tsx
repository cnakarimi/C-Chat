import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import GalleryIcon from "../Icons/GalleryIcon";
import MusicIcon from "../Icons/MusicIcon";
import VideoIcon from "../Icons/VideoIcon";
import Settings from "../Profile/Setting"; // Import the Settings component
import MyProfile from "./MyProfile"; // Import the MyProfile component

const ProfileTabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("settings");

  const renderContent = () => {
    switch (selectedTab) {
      case "settings":
        return <Settings />;
      case "myProfile":
        return <MyProfile />;
      case "videos":
        return <div>Video content here</div>;
      default:
        return null;
    }
  };

  return (
    <div className="p-3">
      <Tabs
        aria-label="Options"
        color="primary"
        variant="bordered"
        selectedKey={selectedTab}
        onSelectionChange={(key) => setSelectedTab(key)}
      >
        <Tab
          key="settings"
          title={
            <div className="flex items-center space-x-2">
              <GalleryIcon />{" "}
              {/* You can replace this icon with a settings icon if you have one */}
              <span>Settings</span>
            </div>
          }
        />
        <Tab
          key="myProfile"
          title={
            <div className="flex items-center space-x-2">
              <MusicIcon />{" "}
              {/* Replace this with an appropriate icon for My Profile */}
              <span>My Profile</span>
            </div>
          }
        />
        <Tab
          key="videos"
          title={
            <div className="flex items-center space-x-2">
              <VideoIcon />
              <span>Videos</span>
            </div>
          }
        />
      </Tabs>
      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default ProfileTabs;
