"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="pt-4 md:pt-6 lg:pt-8 fixed w-full top-0 z-50 bg-neutral-950/70 backdrop-blur">
        <div className="container">
          <div className="py-2 md:pb-4 lg:pb-6 border-b border-white/15">
            {/* Desktop Nav */}
            <div className="flex justify-between items-center">
              <Link
                href="/"
                className={twMerge(
                  "text-lg lg:text-2xl font-medium tracking-widest text-white hover:text-white/50 transition duration-300"
                )}
              >
                tmpst.xyz
              </Link>
              <div className="md:flex justify-center items-center hidden">
                <nav className="flex gap-6 text-white/60 lg:text-lg">
                  {navLinks.map((link) => (
                    <Link
                      href={link.href}
                      key={link.label}
                      className="hover:text-white transition duration-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Mobile Menu Icon */}
              <div className="flex justify-end gap-4 md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "rotate-45 -translate-y-1"
                    )}
                  ></line>
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={twMerge("transition", isOpen && "opacity-0")}
                  ></line>
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "-rotate-45 translate-y-1"
                    )}
                  ></line>
                </svg>
              </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden md:hidden"
                >
                  <div className="flex flex-col items-start gap-4 py-4 mt-1">
                    {navLinks.map((link) => (
                      <a
                        href={link.href}
                        key={link.label}
                        className="py-2 text-xl font-bold uppercase tracking-widest hover:text-white/50 transition duration-300"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Padding for under navbar */}
      <div className="pb-[61px] md:pb-[77px] lg:pb-[97px]"></div>
    </>
  );
}

export default Navbar;
