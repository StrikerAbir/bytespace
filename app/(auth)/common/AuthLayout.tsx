import Image from "next/image";

export const AuthLayout = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="min-h-screen bg-primary-800 grid-background">
      <div className="mx-auto max-w-360 px-6 lg:px-30.5">
        <div className="flex h-20 w-full items-center">
          <Image src="/icons/logo.svg" alt="Logo" width={30} height={30} />
        </div>

        <div className="mt-5 flex items-center justify-between gap-15 xl:gap-25">
          {/* left side */}
          <div className="flex-1 space-y-10 text-neutral-100">
            <div className="space-y-3">
              <h3 className="font-semibold text-xl">{title}</h3>
              <p className="text-lg">{description}</p>
            </div>
            <img src="/icons/auth/Group 7.png" alt="" />
          </div>
          {/* right side */}
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </section>
  );
};
