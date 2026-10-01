"use client";
import { Search } from "@/libs/ui-components/Search";
import { Filter } from "../common/Filter";
import Cards from "../home/discover/Cards";
import { featuredOptions } from "../home/discover/constants";
import Button from "@/libs/ui-components/Button";

export const Courses = () => {
  return (
    <section>
      {" "}
      <div className="bg-primary-800 grid-background min-h-87.5">
        <div className=" max-w-360 mx-auto pt-40 space-y-8">
          <h2 className="text-white font-semibold text-center text-4xl ">
            Find Your Next Course
          </h2>
          <Search
            placeholder="Search"
            button_name="Courses"
            inputClass="w-full max-w-[460px] lg:w-[460px]"
            buttonClass="h-[46px] w-[104px]"
          />
        </div>
      </div>
      {/* filter */}
      <Filter />
      {/* discover */}
      <div className="max-w-300 mx-auto flex flex-wrap gap-4 justify-center items-center mb-10">
        {featuredOptions.slice(0, 8).map((option) => {
          return (
            <Button
              key={option}
              otherClass="!text-base !px-4 !py-3 !rounded-3xl hover:bg-secondary-500"
              variant="neutral"
              onClick={() => {
                // Handle button click for each option
                console.log(`Clicked on ${option}`);
              }}
            >
              {option}
            </Button>
          );
        })}
      </div>
      <div className="pb-20">
        <Cards />
      </div>
    </section>
  );
};
