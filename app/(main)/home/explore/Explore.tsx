export const Explore = () => {
  const categories = [
    { name: "Design", image: "Frame 4.svg" },
    { name: "Development", image: "Frame 4 (1).svg" },
    { name: "IT & Software", image: "Frame 4 (2).svg" },
    { name: "Business", image: "Frame 4 (3).svg" },
    { name: "Marketing", image: "Frame 4 (4).svg" },
    { name: "Photography", image: "Frame 4 (5).svg" },
  ];

  return (
    <section id="explore" className="my-20 max-w-300 mx-auto">
      <div className="max-w-229.25 text-center mx-auto">
        <h1 className="font-semibold text-4xl">
          Explore Diverse Learning Paths at Bytespace
        </h1>
        <p className=" text-neutral-400 mt-4">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring there's
          something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>
      </div>

      {/* cards */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="size-41.75 text-center border border-neutral-200 rounded-3xl flex flex-col justify-center items-center gap-4"
          >
            <img
              src={`./icons/home/explore/${category.image}`}
              alt=""
              className="size-12 object-contain"
            />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
