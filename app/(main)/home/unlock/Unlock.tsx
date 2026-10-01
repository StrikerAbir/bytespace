import Button from "@/libs/ui-components/Button";

const unlockImages = [
  {
    src: "./icons/home/unlock/Frame (1).png",
    position: "top-0 left-0 origin-top-left",
  },
  {
    src: "./icons/home/unlock/Frame.png",
    position: "top-6 left-35 origin-top-left",
  },
  {
    src: "./icons/home/unlock/Cone (2).png",
    position: "bottom-20 left-0 origin-bottom-left",
  },
  {
    src: "./icons/home/unlock/Cone (1).png",
    position: "bottom-0 left-35 origin-bottom-left",
  },
  {
    src: "./icons/home/unlock/Cone.png",
    position: "top-0 right-0 origin-top-right",
  },
  {
    src: "./icons/home/unlock/Cone (3).png",
    position: "top-6 right-35 origin-top-right",
  },
  {
    src: "./icons/home/unlock/Frame (2).png",
    position: "bottom-6 right-0 origin-bottom-right",
  },
];

export const Unlock = () => {
  return (
    <section
      id="unlock"
      className="bg-primary-800 grid-background overflow-hidden relative"
    >
      {/* images */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full max-w-360 mx-auto">
        {unlockImages.map(({ src, position }) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className={`absolute ${position} lg:max-xl:scale-75 xl:scale-100`}
          />
        ))}
      </div>

      {/* main content */}
      <div className="relative z-10 max-w-360 mx-auto px-5 py-20 max-md:py-14">
        <div className="max-w-237.5 text-center flex flex-col items-center justify-center gap-7.5 mx-auto">
          <h1 className="text-neutral-50 font-semibold text-[44px] leading-12 max-md:text-4xl max-md:leading-tight">
            Unlock Your Potential as a <br /> Creator with ByteSpace
          </h1>
          <p className="text-neutral-50 mt-4">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </p>
          <Button>Join as a Creator</Button>
        </div>
      </div>
    </section>
  );
};
