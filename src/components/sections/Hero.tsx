import React from "react";

import MaxWidthWrapper from "../MaxWidthWrapper";

import Photo from "../Photo";
import { buttonVariants } from "../ui/button";

interface SectionProps {
  id: string;
}
const Hero: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id}>
      <MaxWidthWrapper className="pb-7  lg:grid lg:grid-cols-3 sm:pb-12 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-6">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
              Hi, Im Ian. {"  "}
              <span className="bg-green-600 px-2 text-white">
                Crafting elegant and intuitive
              </span>{" "}
              solutions, one line of code at a time.
            </h1>
            <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
              Passionate and innovative junior developer. Driven by{" "}
              <span className="font-semibold"> curiosity and innovation</span>,
              I develop web solutions that are as functional as they are
              beautiful.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://drive.google.com/file/d/1__A4MIzpITytEglKHLQDR1FYKsg-6I0f/view?usp=sharing"
                target="_blank"
              >
                <div
                  className={buttonVariants({
                    size: "sm",
                    className: "sm:flex items-center gap-1",
                  })}
                >
                  Get resume
                  <span aria-hidden="true">→</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* <div className=' max-w-lg  relative col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-7  h-auto'> */}
        <div className=" w-full  sm:px-16 md:px-0 mt-8 lg:mx-7 h-auto">
          <Photo />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;

//
