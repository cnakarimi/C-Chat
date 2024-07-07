import React from "react";
import Menu from "../components/Menu";
import { Tabs, Tab } from "@nextui-org/react";
import GalleryIcon from "../components/Icons/GalleryIcon";
import MusicIcon from "../components/Icons/MusicIcon";
import VideoIcon from "../components/Icons/VideoIcon";
import PortalComponent from "../PortalComponent";

const Profile: React.FC = () => {
  const profileImageStyle = {
    backgroundImage: 'url("https://i.ibb.co/FWggPq1/banner.png")',
  };

  return (
    <div className="w-full lg:h-screen flex">
      <Menu />

      <div className="dark:!bg-navy-800 shadow-shadow-500 shadow-3xl rounded-primary relative mx-auto flex h-full w-full max-w-[550px] flex-col items-center bg-white bg-cover bg-clip-border p-[16px] dark:text-white dark:shadow-none">
        <div
          className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
          style={profileImageStyle}
        >
          <div className="absolute -bottom-12 flex h-[88px] w-[88px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
            <img
              className="h-full w-full rounded-full"
              src="https://i.ibb.co/6YbS9ff/avatar11.png"
              alt=""
            />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <h4 className="text-bluePrimary text-xl font-bold">Somaie</h4>
          <p className="text-lightSecondary text-base font-normal">
            chief excutive of raw
          </p>
        </div>

        <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-bluePrimary text-2xl font-bold">Saye</h3>
            <p className="text-lightSecondary text-sm font-normal">User Id</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-bluePrimary text-2xl font-bold">09211214805</h3>
            <p className="text-lightSecondary text-sm font-normal">
              Phone number
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-bluePrimary text-2xl font-bold">27</h3>
            <p className="text-lightSecondary text-sm font-normal">Age</p>
          </div>
        </div>
        <div className="p-3">
          <Tabs aria-label="Options" color="primary" variant="bordered">
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
        </div>
        <div className="pt-3">
          <div>Description</div>
          <div className="pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem autem, voluptatem aliquid ipsa sunt placeat?
            Voluptate exercitationem, odit illum tempora incidunt hic sunt
            asperiores quod, dignissimos deleniti rem, similique qui.
          </div>
        </div>
      </div>
      <PortalComponent />
    </div>
  );
};

export default Profile;
