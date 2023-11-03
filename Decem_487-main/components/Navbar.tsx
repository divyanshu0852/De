"use client";

import { Noto_Sans } from 'next/font/google'
const noto = Noto_Sans({ subsets: ['cyrillic'], weight: ["300", "400", "500"] })

import { Playfair_Display } from 'next/font/google'
const play = Playfair_Display({ subsets: ['latin'], weight: ["400"], style:["italic", "normal"] })

import { Spectral } from 'next/font/google'
const inter = Spectral({ subsets: ['cyrillic'], weight: ["300", "400", "500"] })

import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

  return (
    <div className={`relative z-50 ${noto.className}`}>
        <div className='flex fixed '>
        <div className={`flex fixed bg-[#fafafa] w-full h-[54px] items-center`}>
            <div className='flex flex-1 text-xl ml-2 sm:ml-8 tracking-wide'>
                <h2 onMouseOver={() => setOpen(true)} className="cursor-pointer text-base sm:text-xl pr-4">
                    SHOP
                </h2>
                <h2 className='cursor-pointer text-base sm:text-xl'>STORY</h2>
            </div>
            <div className='flex flex-1 justify-center align-top cursor-pointer tracking-tight'>
                <span className='text-[42px]'>DECEM</span>
                <span className='text-xs mt-3'>10</span>
            </div>
            <div className='flex mr-2 sm:mr-8 flex-1 justify-end text-xl'>
                <h2 className='cursor-pointer hover:text-blue-600 tracking-wide text-base sm:text-xl'>
                    BASKET<span className={`italic font-thin`}>(0)</span>
                </h2>
            </div>
        </div>
        <div onMouseLeave={() => setOpen(false)} className="relative h-[100vh]">
            <div className={`absolute w-[100vw] !bg-[#fafafa] ${
                open ? "opacity-100 mt-[54px]" : "opacity-0 mt-[64px]  invisible"
                } transition-all duration-300 ease-in transition-invisible`}
            >
                <div className='p-6 border-t-2 cursor-pointer flex flex-col lg:flex-row border-black hover:text-blue-700 transition-all duration-200 ease-in-out'>
                    <h1 className={`text-3xl font-thin md:text-5xl md:font-normal ${noto.className}`}>LONDON DRY&nbsp;</h1>
                    <div className='text-3xl font-thin md:text-5xl md:font-normal'>
                        <span className={`${play.className} tracking-tight italic`}>made with</span> 
                        <span className={`${inter.className} tracking-tighter`}> British Gin</span>
                    </div>
                </div>                    
                <div className='p-6 border-t-2 cursor-pointer flex flex-col lg:flex-row border-black hover:text-blue-700 transition-all duration-200 ease-in-out'>
                    <h1 className={`text-3xl font-thin md:text-5xl md:font-normal ${noto.className}`}>SPICED BLEND&nbsp;</h1>
                    <div className='text-3xl font-thin md:text-5xl md:font-normal'>
                        <span className={`${play.className} tracking-tight italic`}>made with</span> 
                        <span className={`${inter.className} tracking-tighter`}> Caribbean Rum</span>
                    </div>
                </div>                    
                <div className='p-6 border-t-2 cursor-pointer flex flex-col lg:flex-row border-black hover:text-blue-700 transition-all duration-200 ease-in-out'>
                    <h1 className={`text-3xl font-thin md:text-5xl md:font-normal ${noto.className}`}>APERITIF&nbsp;</h1>
                    <div className='text-3xl font-thin md:text-5xl md:font-normal'>
                        <span className={`${play.className} tracking-tight italic`}>made with</span> 
                        <span className={`${inter.className} tracking-tighter`}> Heritage Botanicals</span>
                    </div>
                </div>                    
                <div className='p-6 border-y-2 cursor-pointer flex flex-col lg:flex-row border-black hover:text-blue-700 transition-all duration-200 ease-in-out'>
                    <h1 className={`text-3xl font-thin md:text-5xl md:font-normal ${noto.className}`}>TRIO&nbsp;</h1>
                    <div className='text-3xl font-thin md:text-5xl md:font-normal'>
                        <span className={`${inter.className} tracking-tighter`}>London Dry, Spiced Blend & Aperitif</span>
                    </div>
                </div>                                       
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar