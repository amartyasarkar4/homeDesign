import React from "react";
import TextSec from "./textSec/TextSec";
import Achievement from "./achievements/Achievement";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import ProjectsAvailable from "./projectsAvailable/projectsAvailable";
import BestDesigners from "./bestDesigners/BestDesigners";
const MiddleObj = () => {
  return (
    <div>
      <div className="flex box-border" style={{ minHeight: "320px" }}>
        <div
          className="flex-auto w-6/12 box-content overflow-hidden "
          style={{
            paddingTop: "1rem",
            paddingLeft: "2rem",
            paddingBottom: "1rem",
          }}
        >
          <TextSec />
          <p className="pr-20 hidden sm:contents">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            dolor eos fuga recusandae eligendi, corporis nobis sit harum?
            Voluptatem minus commodi corporis.
          </p>

          <div className="flex mt-10 flex-col sm:flex-row">
            <div>
              <button className="text-slate-50 bg-blue-700 py-3 px-5 text-xs sm:text-md">
                Learn More
              </button>
            </div>
            <div className="ml-5 self-center flex" style={{ padding: "2px" }}>
              <div
                className="bg-blue-500 w-7 h-7"
                style={{
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "5px",
                }}
              >
                <FontAwesomeIcon icon={faPlay} style={{ color: "#f8fafc" }} />
              </div>
              <p className="bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-400 text-transparent bg-clip-text text-md ">
                Watch our recent projects
              </p>
            </div>
          </div>
        </div>
        <div className="flex-auto w-6/12">
          <Image
            src="/pics/astro.png"
            alt="astropic"
            width={500}
            height={500}
            className="w-45 sm:w-60 md:w-96 pt-20 sm:pt-10 pl-10"
          />
        </div>
      </div>

      <Achievement />
      <ProjectsAvailable />

      <BestDesigners />
    </div>
  );
};

export default MiddleObj;
