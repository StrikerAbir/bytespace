import React from "react";

export const LowerPart = () => {
  return (
    <div className="relative mt-20">
      <div className="relative">
        <img src="./icons/home/hero/Ellipse 7.png" alt="" />
        <div className="">
          <img
            src="./icons/home/hero/box.png"
            alt=""
            className="absolute top-15 left-75 z-20  animate-float"
          />
          <img
            src="./icons/home/hero/box2.png"
            alt=""
            className="absolute bottom-55 right-30 z-20 animate-float"
          />
          <img
            src="./icons/home/hero/box3.png"
            alt=""
            className="absolute bottom-25 left-75 z-20 animate-float"
          />
        </div>
      </div>
      <img
        src="./icons/home/hero/Image.png"
        alt=""
        className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2"
      />
    </div>
  );
};
