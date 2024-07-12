import React from "react";

const ProfileStats: React.FC = () => (
  <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-bluePrimary text-2xl font-bold">Saye</h3>
      <p className="text-lightSecondary text-sm font-normal">User Id</p>
    </div>
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-bluePrimary text-2xl font-bold">09211214805</h3>
      <p className="text-lightSecondary text-sm font-normal">Phone number</p>
    </div>
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-bluePrimary text-2xl font-bold">27</h3>
      <p className="text-lightSecondary text-sm font-normal">Age</p>
    </div>
  </div>
);

export default ProfileStats;
