import React from "react";
import BoxWIthShadow from "../Box/BoxWIthShadow";

const Achievement = () => {
  return (
    // <div className="flex flex-col sm:flex-row flex-wrap">
    <div
      style={{ marginTop: "1rem" }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-items-center	"
    >
      {/* grid grid-cols-4 gap-4
       */}
      <div className=" justify-self-center">
        <BoxWIthShadow
          value="20+"
          mainHead="Years Of Success"
          para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nostrum commodi fugiat vel reprehenderit possimus fuga culpa optio.Lorem ipsum dolor, sit amet consectetur adipisicing elitLorem ipsum dolor, sit amet consectetur adipisicing elit "
        />
      </div>
      <div className="justify-self-center">
        <BoxWIthShadow
          value="2K+"
          mainHead="Successful Projects"
          para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nostrum commodi fugiat vel reprehenderit possimus fuga culpa optio. "
        />
      </div>
      <div className="justify-self-center">
        <BoxWIthShadow
          value="100K+"
          mainHead="Happy Clients"
          para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nostrum commodi fugiat vel reprehenderit possimus fuga culpa optio. "
        />
      </div>
      <div className="">
        <BoxWIthShadow
          value="100+"
          mainHead="Running Projects"
          para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nostrum commodi fugiat vel reprehenderit possimus fuga culpa optio. "
        />
      </div>
    </div>
  );
};

export default Achievement;
