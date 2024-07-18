import React from "react";
import { useFormContext } from "../context/FormContext";

const ProfileStats: React.FC = () => {
  const { formData } = useFormContext();

  return (
    <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-bluePrimary text-2xl font-bold">
          {formData.username}
        </h3>
        <p className="text-lightSecondary text-sm font-normal">Username</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-bluePrimary text-2xl font-bold">
          {formData.phonenumber}
        </h3>
        <p className="text-lightSecondary text-sm font-normal">Phone Number</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-bluePrimary text-2xl font-bold">{formData.age}</h3>
        <p className="text-lightSecondary text-sm font-normal">Age</p>
      </div>
    </div>
  );
};

export default ProfileStats;
