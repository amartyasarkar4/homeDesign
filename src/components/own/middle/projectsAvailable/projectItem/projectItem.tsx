import Image from "next/image";
import React from "react";
import BottomBox from "./bottomBox/BottomBox";

const ProjectItem = (props: {
  preojectPic: string;
  mainHead: string;
  para: string;
  buttonName: string;
}) => {
  return (
    <div className="mx-2">
      <div>
        <Image
          src={props.preojectPic}
          width={3900}
          height={1900}
          alt="projectPic"
          className="h-40 sm:h-50 md:h-50 lg:h-60"
          style={{}}
        />
      </div>
      <div style={{ position: "relative", top: "-20px", zIndex: 9999 }}>
        <BottomBox
          mainHead={props.mainHead}
          para={props.para}
          buttonName={props.buttonName}
        />
      </div>
    </div>
  );
};

export default ProjectItem;
