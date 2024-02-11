import React from "react";
import DesignerCarous from "./carousels/DesignerCarous";

const BestDesigners = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "12rem",
        alignItems: "center",
      }}
    >
      <div className="flex items-center flex-col mb-16">
        <p style={{ fontWeight: 500 }}>Have a Look At Our Designers</p>

        <h1 className="font-semibold text-lg sm:text-2xl md:text-4xl">
          We Have The{" "}
          <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-400 text-transparent bg-clip-text">
            {" "}
            Best Designers
          </span>{" "}
          Of the World
        </h1>
      </div>
      <div>
        <DesignerCarous />
      </div>
    </div>
  );
};

export default BestDesigners;
