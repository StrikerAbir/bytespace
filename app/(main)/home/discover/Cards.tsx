import Image from "next/image";
import { course_data } from "./constants";
import Button from "@/libs/ui-components/Button";

const Cards = () => {
  return (
    <div className="w-full max-w-300 mx-auto px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 w-full">
        {course_data.map((card) => (
          <div
            key={card.id}
            className="flex flex-col gap-4 p-4 border border-neutral-100 rounded-3xl"
          >
            <img
              src={`./icons/home/discover/cards/${card.image}`}
              alt=""
              className="w-full h-auto object-contain"
            />
            <div className="flex justify-between gap-5">
              {" "}
              <div className="flex-1">
                <h2 className="font-semibold text-xl line-clamp-1">
                  {card.title}
                </h2>
                <p>
                  by{" "}
                  <span className="text-primary-500">
                    {card.courseCard.studio}
                  </span>
                </p>
              </div>
              <div className=" flex justify-center items-center gap-2">
                <p>{card.rating}</p>
                <img
                  src="./icons/star.svg"
                  alt="star"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <Button
                variant="neutral"
                otherClass="!py-[9px] !px-3 !text-[12px]"
              >
                <Image
                  src="/icons/signal_cellular.svg"
                  alt="signal"
                  width={13}
                  height={13}
                />
                {card.level}
              </Button>
              <img src="./icons/home/discover/cards/Auto.png" alt="auto" />
            </div>
            <div>
              <h2>
                <span className="text-xl text-primary-600 font-semibold">
                  ${card.price}
                </span>{" "}
                <span className="text-sm text-neutral-400">
                  /{card.pricingType}
                </span>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cards;
