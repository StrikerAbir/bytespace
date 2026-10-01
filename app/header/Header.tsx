"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" }
];

const Header = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const updateHeader = () => setIsHeroVisible(window.scrollY === 0);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={`w-full top-0 fixed z-50 transition-all duration-300 ${
        isHeroVisible ? "h-30" : "h-20"
      } ${
        isHeroVisible ? "bg-transparent" : "bg-blue-800"
      }`}
    >
      <nav className="h-full flex items-center justify-between max-w-360 mx-auto px-30 text-neutral-50">
        {/* logo */}
        <Link href="#" className="">
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

        {/* Navigation Links */}
        <ul className="flex items-center gap-6">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-neutral-200">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Actions */}
        <ul className="flex items-center gap-5">
          <li>
            <Link href="/login" className="hover:text-neutral-200 ">
              Sign In
            </Link>
          </li>
          <li>
            <Link href="/register" className=" hover:text-neutral-200">
              Join Us
            </Link>
          </li>

          <li>
            <Link href="#" className="">
              <Image
                src="/icons/home/header/cart.svg"
                alt="Shopping Cart"
                width={24}
                height={24}
                className="hover:scale-110 transition-transform duration-200"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
