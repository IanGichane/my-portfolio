import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

interface SectionProps {
  id: string;
}
const About: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="lg:h-screen mt-10">
      {/* A reusable component */}
      <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
  Mee
      </MaxWidthWrapper>
    </section>
  );
};

export default About;
