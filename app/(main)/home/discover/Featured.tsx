"use client";
import Link from "next/link";
import Button from "@/libs/ui-components/Button";

const featuredOptions = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "+ More",
];

const Featured = () => {
  return (
    <div className="max-w-275 mx-auto flex flex-wrap gap-4 justify-center items-center my-10">
      {featuredOptions.map((option) => {
        if (option === "+ More") {
          return (
            <Link
              key={option}
              href="/"
              className="text-blue-500 hover:text-blue-700 font-medium transition-colors"
            >
              {option}
            </Link>
          );
        }

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
  );
};

export default Featured;
