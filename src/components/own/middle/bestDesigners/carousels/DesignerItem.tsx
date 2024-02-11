import React from "react";

import classes from "./item.module.css";
import Image from "next/image";

const DesignerItem = (props: {
  designerPic: string;
  name: string;
  about: string;
  buttonName: string;
}) => {
  return (
    <div className={classes.lastBack}>
      <div className={classes.frontBack}>
        <Image
          src={props.designerPic}
          width={500}
          height={500}
          alt="designerPic"
        />
      </div>
    </div>
  );
};

export default DesignerItem;
