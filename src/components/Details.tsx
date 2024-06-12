'use client'
import React from 'react'

import { LocateFixed, Mail, Phone } from 'lucide-react'
import { WobbleCard } from './ui/WobbleCard';


const Details = () => {
    const infoArray = [
        { icon: <LocateFixed />, iconname: "Location", code: "Nairobi,Kenya" },
        { icon: <Mail />, iconname: "Email", code: "gichaneian@gmail.com" },
        { icon: <Phone />, iconname: "Phone", code: "(+254) 728326645" },

    ];

    return (
        <>

            {
                infoArray.map((item, index) => (
                    <WobbleCard key={index} className=' flex flex-row lg:flex-col p-2 gap-2 items-center bg-blue-900  text-white w-full justify-center' >

                        <div >{item.icon}</div>
                        <h2>{item.iconname}</h2>
                        <h2>{item.code}</h2>

                    </WobbleCard>
                ))
            }
        </>
    )
}

export default Details
