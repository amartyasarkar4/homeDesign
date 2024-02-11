import React from "react";

import Slider from "react-slick";

import ProjectItem from "../projectItem/projectItem";

const SlideMultipleItems = () => {
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
          <ProjectItem
            preojectPic="/pics/projects/one.jpeg"
            mainHead="Resturant Interior"
            para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur reprehenderit nulla velit officiis dolorum, facere possimus quasi quam magni, commodi deleniti. Eos aut facere cum odit illum libero ea. Molestiae!"
            buttonName="View Details"
          />
        </div>
        <div>
          <ProjectItem
            preojectPic="/pics/projects/two.jpeg"
            mainHead="Office Interior"
            para="22 lorem ipsum jncjkj jkkdkf reee dfgdfg "
            buttonName="View Details"
          />
        </div>
        <div>
          <ProjectItem
            preojectPic="/pics/projects/three.jpeg"
            mainHead="House Interior"
            para="333 lorem ipsum jncjkj jkkdkf reee"
            buttonName="View Details"
          />
        </div>
        <div>
          <ProjectItem
            preojectPic="/pics/projects/four.jpeg"
            mainHead="Outdoor Design"
            para="4444 lorem ipsum jncjkj jkkdkf reee"
            buttonName="View Details"
          />
        </div>
        <div>
          <ProjectItem
            preojectPic="/pics/projects/five.jpeg"
            mainHead="Resturant Interior"
            para="555 lorem ipsum jncjkj jkkdkf reee"
            buttonName="View Details"
          />
        </div>
        <div>
          <ProjectItem
            preojectPic="/pics/projects/six.jpeg"
            mainHead="Office Interior"
            para="666 lorem ipsum jncjkj jkkdkf reee"
            buttonName="View Details"
          />
        </div>
        <div>
          <ProjectItem
            preojectPic="/pics/projects/seven.jpeg"
            mainHead="House Interior"
            para="777 lorem ipsum jncjkj jkkdkf reee"
            buttonName="View Details"
          />
        </div>
        <div>
          <ProjectItem
            preojectPic="/pics/projects/eight.jpeg"
            mainHead="Outdoor Design"
            para="888 lorem ipsum jncjkj jkkdkf reee"
            buttonName="View Details"
          />
        </div>
        <div>
          <ProjectItem
            preojectPic="/pics/projects/nine.jpeg"
            mainHead="Resturant Interior"
            para="999 lorem ipsum jncjkj jkkdkf reee"
            buttonName="View Details"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SlideMultipleItems;
