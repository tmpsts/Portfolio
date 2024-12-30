// Projects Page

// TODO:
// Add Images

"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Link from "next/link";

// Images
import layersThumb from "@/assets/layers_thumb.png";
import seositeThumb from "@/assets/seosite_thumb.png";
import marketplaceThumb from "@/assets/marketplace_thumb.png";
// import pierceThumb from "@/assets/pierce_thumb.png";

const projects = [
  {
    image: layersThumb,
    title: "Layers Tutorial",
    description: "Test Description",
    month: "12",
    day: "28",
    year: "2024",
    tech: ["NextJS", "ReactTS", "Tailwind CSS", "Framer Motion"],
    href: "https://layers.tmpst.xyz/",
  },
  {
    image: seositeThumb,
    title: "SEO Tutorial",
    description: "Test Description",
    month: "12",
    day: "22",
    year: "2024",
    tech: ["NextJS", "ReactTS", "Tailwind CSS", "Framer Motion"],
    href: "https://seosite.tmpst.xyz/",
  },
  {
    image: marketplaceThumb,
    title: "A Modern Marketplace",
    description:
      "This was made as a group project for my CSCI 387 class. My first true react site, took 5 days and ~60 hours.",
    month: "12",
    day: "3",
    year: "2024",
    tech: ["Vite", "ReactJS", "Tailwind CSS", "NodeJS", "MySQL"],
    href: "https://387group5.tmpst.fun/",
  },
  // {
  //   image: pierceThumb,
  //   title: "Pierce Aluminum",
  //   description:
  //     "Website upgrade for Pierce Aluminum, features new product finder!",
  //   month: "12",
  //   day: "10",
  //   year: "2024",
  //   tech: ["Vite", "ReactJS", "Tailwind CSS", "NodeJS", "MySQL"],
  //   href: "https://pierce.tmpst.xyz/",
  // },
];

const years = ["All Time", "2025", "2024"];

function ProjectsPage() {
  const [selectedYear, setSelectedYear] = useState(0);

  return (
    <section className="pt-4 pb-24">
      <div className="container">
        {/* Title Area */}
        <div className="flex justify-between items-center relative">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase leading-none select-none">
            Projects
          </h1>

          {/* Year Selector */}
          <div className="flex gap-1 md:gap-1.5 items-center">
            {/* Left Arrow */}
            <div
              className={twMerge(
                "p-1 md:p-2 rounded-full bg-neutral-900 border border-white/20 text-white/60 hover:bg-neutral-700 transition duration-300 cursor-pointer",
                selectedYear > 0 ? "" : "opacity-0 cursor-default"
              )}
              onClick={() =>
                selectedYear > 0 && setSelectedYear(selectedYear - 1)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 md:size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Year Display */}
            <div
              className="md:px-1.5 py-1.5 w-[65px] md:w-[84px] rounded-full bg-neutral-900 border border-white/20 select-none"
              // onClick={() => setYearDisplay(!yearDisplay)}
            >
              <p className="text-center text-xs md:text-base text-white/65 font-light md:font-extralight">
                {years[selectedYear]}
              </p>
            </div>

            {/* Right Arrow */}
            <div
              className={twMerge(
                "p-1 md:p-1.5 rounded-full bg-neutral-900 border border-white/20 text-white/60 transition duration-300 cursor-pointer",
                selectedYear < years.length - 1
                  ? "hover:bg-neutral-700"
                  : "opacity-25 cursor-default"
              )}
              onClick={() =>
                selectedYear < years.length - 1 &&
                setSelectedYear(selectedYear + 1)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4 md:size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Project Area */}
        <div>
          {projects.filter(
            (project) =>
              years[selectedYear] === "All Time" ||
              years[selectedYear] === project.year
          ).length > 0 ? (
            // Project Grid
            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
              {projects
                .filter(
                  (project) =>
                    years[selectedYear] === "All Time" ||
                    years[selectedYear] === project.year
                )
                .map((project, i) => (
                  <Link href={project.href} key={i}>
                    <div className="flex flex-col border border-white/20 rounded-xl hover:opacity-30 transition duration-300 h-full select-none">
                      <div className="relative">
                        <Image
                          src={project.image}
                          alt="Project Image"
                          className="rounded-t-xl aspect-video object-cover object-top"
                        />
                        <div className="absolute -bottom-1 w-full h-4 rounded-t-xl bg-neutral-900 border-t border-white/20"></div>
                      </div>
                      <div className="bg-neutral-900 flex-grow relative">
                        <div className="px-4 pt-1 pb-7">
                          <h2 className="text-2xl font-bold tracking-tight">
                            {project.title}
                          </h2>
                          <p className="text-sm text-white/60">
                            {project.description}
                          </p>
                        </div>
                        <div className="absolute -bottom-1 w-full h-4 rounded-t-xl bg-neutral-950 border-t border-white/20"></div>
                      </div>
                      <div className="bg-neutral-950 rounded-b-xl">
                        <div className="p-2 px-3 pt-0 flex items-center gap-3 overflow-x-clip text-nowrap">
                          <p className="text-sm font-bold">
                            {project.month}/{project.day}/{project.year}
                          </p>
                          <div className="flex gap-2 text-sm text-white/50">
                            {project.tech.map((tech, i) => (
                              <p key={i}>{tech}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          ) : (
            <p className="mt-4 text-center text-white/60 font-light select-none">
              Nothing to see here... yet!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
