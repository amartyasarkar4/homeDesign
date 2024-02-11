import React from "react";

const BottomBox = (props: {
  mainHead: string;
  para: string;
  buttonName: string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        boxShadow: "5px 5px 20px -3px gray",
        padding: "10px",
        alignItems: "center",
        // width: "12rem",
        // height: "9rem",
        overflow: "hidden",
        margin: ".5rem",
        paddingBottom: "50px !important",
        // borderRadius: "30px",
      }}
      className="bg-slate-50 w-30 h-36 rounded-[4px] sm:rounded-[15px]"
    >
      <h1 className="text-xs sm:text-xs md:text-md bg-gradient-to-r from-violet-900 via-purple-500 to-fuchsia-300 inline-block text-transparent bg-clip-text font-semibold inline-block align-middle my-1">
        {props.mainHead}
      </h1>

      {/* <h1 className=" text-5xl bg-gradient-to-r from-violet-900 via-purple-500 to-fuchsia-300 inline-block text-transparent bg-clip-text">
        Lets Make Your Home Looks Like A Heaven
      </h1> */}

      <div className="h-10 min-h-10 sm:min-h-16 sm:h-16">
        <p className="text-xs">
          {props.para.length > 160
            ? props.para.substring(0, 160) + "..."
            : props.para}
        </p>
      </div>

      <button
        className="text-slate-50 font-semibold mb-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-400  px-3 py-1 rounded-[4px] sm:rounded-[15px]"
        style={{ marginBottom: "30px" }}
      >
        <p className="text-xs sm:text-xs md:text-xs">{props.buttonName}</p>
      </button>
    </div>
  );
};

export default BottomBox;
