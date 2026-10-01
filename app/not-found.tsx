// app/not-found.tsx

import Link from "next/link";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Button from "@/libs/ui-components/Button";

export default function NotFound() {
  return (
    <div className="">
      <Header />
      <div className="min-h-screen bg-primary-800 grid-background ">
        <div className="py-30 max-w-[950px] mx-auto flex flex-col items-center justify-center text-neutral-50 text-center gap-8">
          <img src="./icons/404.png" alt="404" />
          <h1 className="text-[72px] leading-20 font-semibold ">
            The page you are looking for doesn’t exist
          </h1>
          <p>Try to use a correct url or go back to homepage to start again</p>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
