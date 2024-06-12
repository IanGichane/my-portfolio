"use client"
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Icons } from './icons'


import { buttonVariants } from './ui/button'
import Link from 'next/link'


// interface MenuItem {
//     id: number;
//     name: string;
//     path: string;
//   }

//   interface NavbarProps {
//     menu: MenuItem[];
//   }
const NavBar = () => {

    const handleScroll = (event:React.SyntheticEvent)=>{
        event.preventDefault()
        const target = event.target as HTMLAnchorElement
        const id = target.getAttribute('href')?.replace("#",'')
        const element = document.getElementById(String(id));
        if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }

    }

    return (
        <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/1 backdrop-blur-lg transition-all'>
            <MaxWidthWrapper>
                <div className='flex h-14 items-center justify-between border-b border-zinc-200'>

                    {/* Logo */}
                    <Link href='/'  className='flex z-40 font-semibold'>
                    <Icons.logo className="h-10 w-10" />
                        {/* <Image src='/logo.svg' alt='mylogo' width={50} height={50} /> */}
                    </Link>


                    {/* Links */}
                    <ul className='md:flex gap-20 hidden px-12' onClick={handleScroll}>
                        {menu.map((item, index) => (
                            <Link key={index} href={item.path}>
                                <li className=' hover:text-primary cursor-pointer hover:scale-125 transition-all ease-in-out'>{item.name}</li>
                            </Link>

                        ))}
                    </ul>
                    {/* <div

                        className={buttonVariants({
                            size: 'sm',
                            className: 'lg:hidden sm:flex items-center gap-1',
                        })}>
                        Menu

                    </div> */}

                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default NavBar
