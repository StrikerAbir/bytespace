"use client";
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
    <div className="max-w-[1100px] mx-auto flex flex-wrap gap-4 justify-center my-10">
      {featuredOptions.map((option) => (
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
      ))}
    </div>
  );
};

export default Featured;
