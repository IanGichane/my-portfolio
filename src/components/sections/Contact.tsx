
import React from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import MyForm from '../MyForm'
import Details from '../Details'


interface SectionProps {
    id: string;
  }

const Contact: React.FC<SectionProps> = ({id}) => {




    return (


        <section id={id} >
            {/* <MaxWidthWrapper className='pb-18  sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'> */}
            <MaxWidthWrapper className='pb-24  sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>



                {/* <div className='flex sm;flex-col items-center gap-8 bg-green-400 rounded-xl p-8 '> */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full p-1  border rounded-lg pt-4 pb-4 px-3">

                    {/* <div className=' mx-auto text-center  flex flex-col items-center p-4 '> */}
                    {/* <div className="col-span-1 min-h-[300px] "> */}
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-4  mx-auto w-2/3 shadow-2xl">


<Details/>

                    </div>


                    <div className="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px]  ">
                    {/* <div className='flex flex-col   lg:col-span-1 w-full  justify-center px-8 sm:px-16 md:px-0   h-auto'> */}
                        <div className='flex justify-center p-2 font-extrabold  items-center border rounded-xl'>
                            Get in touch!
                        </div>
                        <MyForm />

                    </div>
                </div>
            </MaxWidthWrapper>
        </section>

    )
}

export default Contact

