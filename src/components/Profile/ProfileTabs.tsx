import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import GalleryIcon from "../Icons/GalleryIcon";
import MusicIcon from "../Icons/MusicIcon";
import VideoIcon from "../Icons/VideoIcon";
import Settings from "../Profile/Setting";
import MyProfile from "./MyProfile";
import { useFormContext } from "../context/FormContext";

const ProfileTabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("settings");
  const { formData, updateFormData } = useFormContext();

  const renderContent = () => {
    switch (selectedTab) {
      case "settings":
        return <Settings formData={formData} updateFormData={updateFormData} />;
      case "myProfile":
        return (
          <MyProfile formData={formData} updateFormData={updateFormData} />
        );
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
        onSelectionChange={(key) => setSelectedTab(key as string)}
      >
        <Tab
          key="settings"
          title={
            <div className="flex items-center space-x-2">
              <GalleryIcon />
              <span>Settings</span>
            </div>
          }
        />
        <Tab
          key="myProfile"
          title={
            <div className="flex items-center space-x-2">
              <MusicIcon />
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
