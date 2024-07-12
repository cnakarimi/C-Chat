import React from "react";

const ProfileHeader: React.FC<{ profileImageStyle: React.CSSProperties }> = ({
  profileImageStyle,
}) => (
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
);

export default ProfileHeader;
