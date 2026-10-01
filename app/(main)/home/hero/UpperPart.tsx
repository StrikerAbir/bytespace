import { Search } from "@/libs/ui-components/Search";
import React from "react";

export const UpperPart = () => {
  return (
    <div className="max-w-[950px] mx-auto px-5 text-center space-y-8 ">
      <h1 className="text-[72px] text-neutral-50 font-semibold leading-22">
        Get Access to Hundreds Courses Available
      </h1>
      <p className="text-lg text-neutral-100">
        Unlock your creativity, gain valuable knowledge, and grow your business
        with our wide range of courses.
      </p>

      <div className="pt-8">
        <Search
          button_name="Search"
          inputClass="w-[460px]"
          buttonClass="w-[104px] h-[46px]"
        />
      </div>
    </div>
  );
};
