import React from "react";
import AnimatedTextWord from "@/components/reusable/textwriting";

const TextSec = () => {
  return (
    <div style={{ display: "unset", overflow: "hidden" }}>
      {/* <h1 className=" text-5xl bg-gradient-to-r from-violet-900 via-purple-500 to-fuchsia-300 inline-block text-transparent bg-clip-text">Lets Make Your Home Looks Like A Heaven</h1> */}
      <AnimatedTextWord
        text="Let's Make Your Home Looks Like A Heaven"
        firstColor="text-slate-700"
        secondColor="bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-400 text-transparent bg-clip-text "
        secondColorAfterSpace={4}
        breakAfterSpace={3}
        textSize={"text-xl sm:text-3xl md:text-4xl lg-5xl"}
      />
    </div>
  );
};

export default TextSec;
