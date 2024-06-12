import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'



interface SectionProps {
  id: string;
}
const Blog: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className='lg:h-screen mt-10'>

      {/* A reusable component */}
      <MaxWidthWrapper className=''>
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">

        <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
        <p className="text-xl text-muted-foreground">
          My ramblings on all things web dev.
        </p>
      </div>
      </MaxWidthWrapper>
    </section>
  )
}

export default Blog
