import React from "react";
import Menu from "../components/Menu";
import PortalComponent from "../PortalComponent";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileInfo from "../components/Profile/ProfileInfo";
import ProfileStats from "../components/Profile/ProfileStats";
import ProfileTabs from "../components/Profile/ProfileTabs";

const Profile: React.FC = () => {
  const profileImageStyle = {
    backgroundImage: 'url("https://i.ibb.co/FWggPq1/banner.png")',
  };

  return (
    <div className="w-full lg:h-screen flex">
      <Menu />
      <div className="dark:!bg-navy-800 shadow-shadow-500 shadow-3xl rounded-primary relative mx-auto flex h-full w-full max-w-[550px] flex-col items-center bg-white bg-cover bg-clip-border p-[16px] dark:text-white dark:shadow-none">
        <ProfileHeader profileImageStyle={profileImageStyle} />
        <ProfileInfo />
        <ProfileStats />
        <ProfileTabs />
      </div>
      <PortalComponent />
    </div>
  );
};

export default Profile;
