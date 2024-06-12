import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import MyDatabases from "./techstack/MyDatabases";
import FrameWorks from "./techstack/FrameWorks";

const TechStack = () => {
  return (
    <section>
      {/* A reusable component */}
      <MaxWidthWrapper className="p-22  sm:pb-7 lg:gap-x-0 xl:gap-x-8 lg:pt-52 xl:pt-10 lg:pb-5">
        <h2 className="text-4xl font-bold dark:text-white">Techstack</h2>
        <div className="border-t border-gray-200" />

        <FrameWorks />
        <MyDatabases />
      </MaxWidthWrapper>
    </section>
  );
};

export default TechStack;
