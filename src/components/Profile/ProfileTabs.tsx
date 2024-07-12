import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import GalleryIcon from "../Icons/GalleryIcon";
import MusicIcon from "../Icons/MusicIcon";
import VideoIcon from "../Icons/VideoIcon";

const ProfileTabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("photos");

  const renderContent = () => {
    switch (selectedTab) {
      case "photos":
        return <div>Photo content here</div>;
      case "music":
        return <div>Music content here</div>;
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
          key="photos"
          title={
            <div className="flex items-center space-x-2">
              <GalleryIcon />
              <span>Photos</span>
            </div>
          }
        />
        <Tab
          key="music"
          title={
            <div className="flex items-center space-x-2">
              <MusicIcon />
              <span>Music</span>
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
