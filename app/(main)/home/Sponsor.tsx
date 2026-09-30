import Image from "next/image";

export const Sponsor = () => {
  const sponsors = [
    { src: "Frame.svg", width: 167, height: 41 },
    { src: "Frame (1).svg", width: 167, height: 41 },
    { src: "Frame (2).svg", width: 167, height: 41 },
    { src: "Frame (3).svg", width: 167, height: 41 },
    { src: "Frame (4).svg", width: 167, height: 41 },
  ];

  const BrandImages = ({
    "aria-hidden": ariaHidden,
  }: {
    "aria-hidden"?: boolean | "true" | "false";
  }) => (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center justify-center space-x-8 md:space-x-16 py-15 animate-loop-scroll pr-16"
      id="sponsor"
    >
      {sponsors.map((sponsor, index) => (
        <div key={index} className="flex shrink-0 items-center justify-center">
          <Image
            src={`./icons/home/sponsor/${sponsor.src}`}
            alt="sponsor"
            width={sponsor.width}
            height={sponsor.height}
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="bg-neutral-50">
      <div className="xl:w-300 lg:w-237.5 mx-auto">
        <div className="group flex overflow-hidden">
          <BrandImages />
          <BrandImages aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};
