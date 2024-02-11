import React from "react";
import SlideMultipleItems from "./slidermultipleitms";

const ProjectsAvailable = () => {
  return (
    <div
      style={{
        marginTop: "5rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "3rem",
      }}
    >
      <p className="text-lg font-medium text-">Choose Your Project</p>
      <h2 className="text-2xl font-semibold">
        Projects{" "}
        <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-400 text-transparent bg-clip-text">
          Available
        </span>{" "}
        For You
      </h2>
      <div style={{ marginTop: "3rem" }}>
        <SlideMultipleItems />
      </div>
    </div>
  );
};

export default ProjectsAvailable;
