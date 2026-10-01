import Image from "next/image";
import Cards from "../home/discover/Cards";
import Button from "@/libs/ui-components/Button";
import { Filter } from "../common/Filter";

export const Creators = () => {
  return (
    <section className="">
      <div className="bg-primary-800 grid-background min-h-[512px]">
        <div className=" max-w-360 mx-auto">
          {/* profile part */}
          <div className="pt-40 pb-30 max-w-300 mx-auto space-y-4">
            <div>
              <Image
                src="/icons/creators/Image (1).png"
                alt="PurePearl Studio creator avatar"
                width={96}
                height={96}
              />
              <div className="text-white">
                <div className="flex gap-4">
                  <h2 className="text-4xl font-semibold">PurePearl Studio</h2>{" "}
                  <div className="rounded-3xl bg-secondary-500 w-30 flex items-center justify-center text-black">
                    Creator
                  </div>
                </div>

                <p>Passionate UI/UX, Web designer</p>
              </div>
            </div>
            <p className="text-white">
              Welcome to the creative world of [Creator's Name]. Here, you'll
              discover the passion, expertise, and inspiration that drive my
              creative journey. Let's explore and learn together! ive into my
              creative portfolio, showcasing a glimpse of my artistic endeavors.
              From digital designs to multimedia projects, each piece tells a
              unique story. Explore the world of creativity with me.
            </p>

            <div className="flex justify-between">
              <div className="flex gap-7">
                <div className="rounded-3xl bg-white w-30 flex items-center justify-center text-black py-2 px-4">
                  <p className="text-lg">
                    {" "}
                    <span className="text-primary-500">3</span> Products
                  </p>
                </div>
                <div className="rounded-3xl bg-white  flex items-center justify-center text-black py-2 px-4">
                  <p className="text-lg">
                    {" "}
                    <span className="text-primary-500">12</span> Followers
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-secondary-500 flex items-center justify-center text-black py-2 px-4">
                <p className="text-lg">Follow</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* filter part */}
      <Filter />

      {/* courses */}
      <div className="pb-20">
        <Cards />
      </div>
    </section>
  );
};
