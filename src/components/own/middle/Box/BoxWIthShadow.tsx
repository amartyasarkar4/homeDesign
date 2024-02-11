import React from "react";

const BoxWIthShadow = (props: {
  value: string;
  mainHead: string;
  para: string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        boxShadow: "5px 5px 20px -3px gray",
        padding: "10px",
        alignItems: "center",
        width: "13rem",
        height: "12rem",
        overflow: "hidden",
        margin: ".5rem",
        paddingBottom: "50px !important",
        borderRadius: "3px",
      }}
    >
      <h1 className="text-3xl bg-gradient-to-r from-violet-900 via-purple-500 to-fuchsia-300 inline-block text-transparent bg-clip-text font-semibold inline-block align-middle my-1">
        {props.value}
      </h1>

      {/* <h1 className=" text-5xl bg-gradient-to-r from-violet-900 via-purple-500 to-fuchsia-300 inline-block text-transparent bg-clip-text">
        Lets Make Your Home Looks Like A Heaven
      </h1> */}

      <h3 className="text-xl text-slate-700 font-semibold mb-1">
        {props.mainHead}
      </h3>
      <p className="text-xs">
        {props.para.length > 160
          ? props.para.substring(0, 160) + "..."
          : props.para}
      </p>
    </div>
  );
};

export default BoxWIthShadow;
