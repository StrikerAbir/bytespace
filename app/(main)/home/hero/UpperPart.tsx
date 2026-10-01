import { Search } from "@/libs/ui-components/Search";

export const UpperPart = () => {
  return (
    <div className="mx-auto max-w-[950px] px-5 text-center space-y-8 lg:space-y-10">
      <h1 className="text-[40px] font-semibold leading-tight text-neutral-50 sm:text-[52px] lg:text-[72px] lg:leading-[88px]">
        Get Access to Hundreds Courses Available
      </h1>
      <p className="text-base text-neutral-100 sm:text-lg">
        Unlock your creativity, gain valuable knowledge, and grow your business
        with our wide range of courses.
      </p>

      <div className="pt-6 lg:pt-8">
        <Search
          button_name="Search"
          inputClass="w-full max-w-[460px] lg:w-[460px]"
          buttonClass="h-[46px] w-[104px]"
        />
      </div>
    </div>
  );
};
