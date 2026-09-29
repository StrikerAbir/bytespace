"use client";
import Button from "@/libs/ui-components/Button";
import TextInput from "@/libs/ui-components/Input";
import Image from "next/image";
import Link from "next/link";
import MaxWidth from "../Layout/MaxWidth";

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
    <MaxWidth maxWidth="max-w-300" otherClass="pt-17.75">
      <div className="space-y-37.5">
        <div className="w-full grid grid-cols-2 gap-10">
          {/* logo part */}
          <div className="flex-1 space-y-11.25">
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
              <div className="flex items-center  gap-6">
                {" "}
                <TextInput
                  placeholder="Enter your email"
                  inputClass="!w-[337px] !h-[52px] !rounded-[100px] "
                />
                <Button
                  onClick={() => console.log("Clicked!")}
                  otherClass=" h-[46px]"
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
          <div className="flex-1 grid grid-cols-3 gap-6">
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
        <div className="flex justify-between border-t border-neutral-200 pt-6">
          <p className="text-center text-[14px]">
            &copy; {new Date().getFullYear()} ByteSpace. All rights reserved.
          </p>
          <div>
            <ul className="flex gap-6 text-[14px]">
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
      </div>
    </MaxWidth>
  );
};

export default Footer;
