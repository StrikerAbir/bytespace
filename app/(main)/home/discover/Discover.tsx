import React from 'react'
import Featured from './Featured';
import Cards from './Cards';


const Discover = () => {
  return (
    <section id="discover" className="mt-20 mx-auto">
      <div className="max-w-[950px] text-center mx-auto">
        <h1 className="font-semibold text-[44px] leading-12">
          Discover Your Passion, <br /> Build Your Skills
        </h1>
        <p className="text-neutral-400 mt-4">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>
      </div>

      <Featured />

      <Cards/>
    </section>
  );
}

export default Discover