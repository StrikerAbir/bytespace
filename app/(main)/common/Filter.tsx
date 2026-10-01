import Button from '@/libs/ui-components/Button';

export const Filter = () => {
  return (
    <div className="flex justify-between max-w-300 mx-auto py-10">
      <div className="flex gap-5">
        <Button
          variant="neutral"
          otherClass="bg-white border border-neutral-200 !py-2"
        >
          {" "}
          <img src="./icons/filter.png" alt="" /> Filter
        </Button>

        <Button
          variant="neutral"
          otherClass="bg-white border border-neutral-200 !py-2"
        >
          {" "}
          <img src="./icons/signal_cellular.svg" alt="" /> Level
        </Button>

        <Button
          variant="neutral"
          otherClass="bg-white border border-neutral-200 !py-2"
        >
          {" "}
          <img src="./icons/category.png" alt="" /> Category
        </Button>
      </div>

      <Button
        variant="neutral"
        otherClass="bg-white border border-neutral-200 !py-2"
      >
        {" "}
        <img src="./icons/relevent.svg" alt="" /> Most Relevant
      </Button>
    </div>
  );
}
