export const LowerPart = () => {
  const floatingBoxes = [
    {
      src: "./icons/home/hero/box.png",
      position: "top-15 left-75 origin-top-left",
    },
    {
      src: "./icons/home/hero/box2.png",
      position: "bottom-55 right-30 origin-bottom-right",
    },
    {
      src: "./icons/home/hero/box3.png",
      position: "bottom-25 left-75 origin-bottom-left",
    },
  ];

  return (
    <div className="relative mt-20">
      <div className="relative">
        <img src="./icons/home/hero/Ellipse 7.png" alt="" />
        {floatingBoxes.map(({ src, position }) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute z-20 ${position} lg:max-xl:scale-75 xl:scale-100 animate-float`}
          />
        ))}
      </div>
      <img
        src="./icons/home/hero/Image.png"
        alt=""
        className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2"
      />
    </div>
  );
};
