"use client";

import React from "react";

import Slider from "react-slick";
import DesignerItem from "./DesignerItem";

const DesignerCarous = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="slider-container w-50 "
      style={{
        height: "300px",
        width: "75vw",
      }}
    >
      <Slider {...settings}>
        <div>
          <DesignerItem
            designerPic="/pics/man/a1.png"
            name="Resturant Interior"
            about="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur reprehenderit nulla velit officiis dolorum, facere possimus quasi quam magni, commodi deleniti. Eos aut facere cum odit illum libero ea. Molestiae!"
            buttonName="View Details"
          />
        </div>
        <div>
          <DesignerItem
            designerPic="/pics/man/a2.png"
            name="Office Interior"
            about="22 lorem ipsum jncjkj jkkdkf reee dfgdfg "
            buttonName="View Details"
          />
        </div>
        <div>
          <DesignerItem
            designerPic="/pics/man/three.png"
            name="House Interior"
            about="333 lorem ipsum jncjkj jkkdkf reee"
            buttonName="View Details"
          />
        </div>
        <div>
          <DesignerItem
            designerPic="/pics/man/four.png"
            name="Outdoor Design"
            about="4444 lorem ipsum jncjkj jkkdkf reee"
            buttonName="View Details"
          />
        </div>
        <div>
          <DesignerItem
            designerPic="/pics/man/five.png"
            name="Resturant Interior"
            about="555 lorem ipsum jncjkj jkkdkf reee"
            buttonName="View Details"
          />
        </div>
        <div>
          <DesignerItem
            designerPic="/pics/man/six.png"
            name="Office Interior"
            about="666 lorem ipsum jncjkj jkkdkf reee"
            buttonName="View Details"
          />
        </div>
        <div>
          <DesignerItem
            designerPic="/pics/man/seven.png"
            name="House Interior"
            about="777 lorem ipsum jncjkj jkkdkf reee"
            buttonName="View Details"
          />
        </div>
        <div>
          <DesignerItem
            designerPic="/pics/man/eight.png"
            name="Outdoor Design"
            about="888 lorem ipsum jncjkj jkkdkf reee"
            buttonName="View Details"
          />
        </div>
        <div>
          <DesignerItem
            designerPic="/pics/man/nine.png"
            name="Resturant Interior"
            about="999 lorem ipsum jncjkj jkkdkf reee"
            buttonName="View Details"
          />
        </div>
      </Slider>
    </div>
  );
};

export default DesignerCarous;
