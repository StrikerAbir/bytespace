"use client";
import Button from "@/libs/ui-components/Button";
import TextInput from "@/libs/ui-components/Input";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    [
      { label: "Featured Courses", href: "/courses" },
      { label: "Development", href: "/categories/development" },
      { label: "Become a Creator", href: "/creator" },
      { label: "Featured Categories", href: "/categories" },
      { label: "Marketing", href: "/categories/marketing" },
    ],
    [
      { label: "Affiliate Program", href: "/affiliate-program" },
      { label: "Business", href: "/categories/business" },
      { label: "Photography", href: "/categories/photography" },
      { label: "Contact", href: "/contact" },
      { label: "IT", href: "/categories/it" },
    ],
    [
      { label: "Finance", href: "/categories/finance" },
      { label: "Help", href: "/help" },
      { label: "Design", href: "/categories/design" },
      { label: "Sport", href: "/categories/sport" },
      { label: "About", href: "/about" },
    ],
  ];

  return (
    <footer className="mx-auto max-w-300 space-y-20 px-5 pt-12 sm:space-y-28 sm:pt-17.75 lg:space-y-37.5">
      <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 md:gap-10">
        {/* logo part */}
        <div className="flex-1 space-y-8 sm:space-y-11.25">
          <div className="">
            <Link href="#">
              {" "}
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/home/header/logo.svg"
                  alt="ByteSpace Logo"
                  width={28}
                  height={30}
                />{" "}
                <span className="font-heading text-2xl font-bold tracking-tighter">
                  ByteSpace
                </span>
              </div>
            </Link>
            <p className="mt-4 text-[14px] ">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6">
              {" "}
              <TextInput
                placeholder="Enter your email"
                inputClass="!h-[52px] !w-full !max-w-none !rounded-[100px] sm:!max-w-[337px]"
              />
              <Button
                onClick={() => console.log("Clicked!")}
                otherClass="h-[46px] w-full sm:w-auto"
              >
                Subscribe
              </Button>
            </div>

            <p className="text-[12px]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>
        </div>

        {/* list part */}
        <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
          {footerLinks.map((column, columnIndex) => (
            <ul key={columnIndex}>
              {column.map((link) => (
                <li key={link.label} className="mb-4 text-[14px]">
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* bottom part */}
      <div className="flex flex-col gap-4 border-t border-neutral-200 pb-10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-center text-[14px] sm:text-left">
          &copy; {new Date().getFullYear()} ByteSpace. All rights reserved.
        </p>
        <div>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[14px] sm:justify-end">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link href="/cookies-settings">Cookies Settings</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
