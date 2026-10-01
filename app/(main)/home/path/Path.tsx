const decorations = [
  { src: "./icons/home/path/Ellipse 11.png", position: "top-0 left-0" },
  {
    src: "./icons/home/path/Ellipse 9.png",
    position: "top-1/2 left-50 -translate-x-1/2 -translate-y-1/2",
  },
  { src: "./icons/home/path/Ellipse 12.png", position: "bottom-0 left-0" },
  { src: "./icons/home/path/Ellipse 10.png", position: "top-0 right-0" },
  { src: "./icons/home/path/Ellipse 8.png", position: "bottom-0 right-0" },
];

const stats = [
  { value: "12k", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const creatorBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const CheckList = ({ items }: { items: string[] }) => (
  <ul className="space-y-4">
    {items.map((item) => (
      <li key={item} className="flex items-center gap-2">
        <img src="./icons/bullet_tik.svg" alt="" className="size-5" />
        {item}
      </li>
    ))}
  </ul>
);

export const Path = () => {
  return (
    <section className="overflow-hidden relative">
      <div className="absolute inset-0 blur-xs pointer-events-none">
        {decorations.map(({ src, position }) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className={`absolute ${position}`}
          />
        ))}
      </div>
      <div className="relative z-10 max-w-300 mx-auto pt-30">
        {/* part 1 */}
        <div className="flex justify-between gap-15.75">
          <div className="flex-1 flex flex-col justify-center gap-8">
            <h1 className="text-[44px] font-semibold leading-10">
              Your Path to Professional Growth Starts Here!
            </h1>
            <p>
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <div className="flex gap-5">
              {stats.map(({ value, label }) => (
                <h2 key={label}>
                  <span className="text-4xl text-primary-600 font-semibold">
                    {value}
                  </span>
                  <br />
                  <span className="text-neutral-400">{label}</span>
                </h2>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <img
              src="./icons/home/path/Frame 11.png"
              alt="path"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* part 2 */}
        <div className="flex justify-between gap-15.75">
          <div className="flex-1">
            <img
              src="./icons/home/path/Frame 12.png"
              alt="path"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center gap-8">
            <h1 className="text-[44px] font-semibold leading-10">
              Create & Manage Courses Easily.
            </h1>
            <p>
              <span className="font-semibold">ByteSpace</span> supports
              individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <div>
              <CheckList items={creatorBenefits} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
