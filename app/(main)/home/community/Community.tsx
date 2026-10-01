import Cards from "./Cards";
import { community_data } from "./constants";
export const Community = () => {
  const decorations = [
    {
      src: "./icons/home/community/Ellipse 11.png",
      position: "top-1/2 right-0 -translate-y-1/2",
    },
    {
      src: "./icons/home/community/Ellipse 12.png",
      position: "top-0 left-1/2 -translate-x-1/2",
    },

    {
      src: "./icons/home/community/Ellipse 8.png",
      position: "bottom-0 left-0",
    },
  ];
  return (
    <section className="overflow-hidden relative">
      <div className="absolute inset-0 blur-xs pointer-events-none">
        {decorations.map(({ src, position }) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className={`absolute ${position}`}
          />
        ))}
      </div>
      <div className="relative z-10 mx-auto w-full max-w-300 space-y-10 px-6 py-16 sm:px-8 xl:py-20">
        {/* headings */}
        <div className="flex flex-col items-start gap-6 xl:flex-row xl:items-center xl:gap-0">
          <div className="flex-1">
            <h1 className="text-4xl font-semibold leading-tight sm:text-[44px] sm:leading-9">
              Discover What Our Community Is Saying
            </h1>
          </div>
          <div className="flex-1">
            <p className="text-base leading-relaxed sm:text-[18px]">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* community says */}
        <Cards cards_data={community_data} />
      </div>
    </section>
  );
};
