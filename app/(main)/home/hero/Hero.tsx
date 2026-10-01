import { LowerPart } from "./LowerPart";
import { UpperPart } from "./UpperPart";

const Hero = () => {
  const heroImages = [
    {
      src: "./icons/home/hero/Frame.png",
      position: "top-50 left-0 origin-top-left",
    },
    {
      src: "./icons/home/hero/Frame (1).png",
      position: "top-120 left-40 origin-top-left",
    },
    {
      src: "./icons/home/hero/Cone.png",
      position: "bottom-0 -left-10 origin-bottom-left",
    },
    {
      src: "./icons/home/hero/Cone (1).png",
      position: "top-50 right-0 origin-top-right",
    },
    {
      src: "./icons/home/hero/Cone (2).png",
      position: "top-120 right-40 origin-top-right",
    },
    {
      src: "./icons/home/hero/Frame (2).png",
      position: "bottom-0 right-0 origin-bottom-right",
    },
  ];
  return (
    <div
      id="hero"
      className="relative overflow-hidden bg-primary-800 grid-background pt-30 "
    >
      <div className=" max-w-300 mx-auto">
        {/* images */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full max-w-360 mx-auto">
          {heroImages.map(({ src, position }) => (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden="true"
              className={`absolute z-10 ${position} lg:max-xl:scale-75 xl:scale-100`}
            />
          ))}
        </div>

        <UpperPart />

        <LowerPart />
      </div>
    </div>
  );
};

export default Hero;
