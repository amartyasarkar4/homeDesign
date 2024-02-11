import React from "react";
import BrandLogo from "./logo";
import Navbar from "./navbar/navbar";
import ProfileSec from "./profile";

const MyHeader = () => {
  return (
    <div>
      <div
        className="flex flex-row"
        style={{
          justifyContent: "space-between",
          marginRight: "15px",
          marginTop: "15px",
        }}
      >
        <div className="flex-none w-30 sm:w-40">
          <BrandLogo />
        </div>
        <div className="invisible sm:visible w-0 sm:w-50 flex-auto flex justify-end">
          <Navbar />
        </div>
        <div className="flex-none w-40">
          <ProfileSec />
        </div>
      </div>
    </div>
  );
};

export default MyHeader;
