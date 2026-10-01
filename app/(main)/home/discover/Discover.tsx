import Featured from "./Featured";
import Cards from "./Cards";

const Discover = () => {
  return (
    <section
      id="discover"
      className="mx-auto mt-12 px-4 sm:mt-16 lg:mt-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-237.5 text-center">
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-[44px] lg:leading-12">
          Discover Your Passion, <br /> Build Your Skills
        </h1>
        <p className="mt-4 text-sm text-neutral-400 sm:text-base">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>
      </div>

      <Featured />

      <Cards />
    </section>
  );
};

export default Discover;
