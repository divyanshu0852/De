"use client";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { Noto_Sans } from 'next/font/google'
const noto = Noto_Sans({ subsets: ['cyrillic'], weight: ["300", "400", "500"] })

import { Playfair_Display } from 'next/font/google'
const play = Playfair_Display({ subsets: ['latin'], weight: ["400"], style:["italic", "normal"] })

import { Spectral } from 'next/font/google'
const inter = Spectral({ subsets: ['cyrillic'], weight: ["300", "400", "500"] })

interface IconProps {
  id: number;
  open: number;
}

function Icon({ id, open }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function Home() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  return (
      <div className='bg-[#fafafa] h-auto lg:h-[95vh] w-[100vw] flex flex-col lg:flex-row p-8 pt-[54px] md:pt-8 justify-around items-center'>
        <div className='flex justify-between w-[100vw] p-4 border-t-2 border-black lg:hidden'>
          <p className={`${noto.className} hover:text-blue-600 p-1 cursor-pointer underline font-bold transition-all duration-300 ease-in`}>LONDON DRY</p>
          <p className={`${noto.className} hover:text-blue-600 p-1 cursor-pointer transition-all duration-300 ease-in`}>SPICE BLEND</p>
          <p className={`${noto.className} hover:text-blue-600 p-1 cursor-pointer transition-all duration-300 ease-in`}>APERITIF</p>
          <p className={`${noto.className} hover:text-blue-600 p-1 cursor-pointer transition-all duration-300 ease-in`}>TRIO</p>
        </div>

        <div className='w-[95vw] sm:w-[90vw] lg:w-[40vw] h-[65vh] sm:h-[75vh] lg:h-[85vh]'>
          <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper h-[65vh] sm:h-[75vh] lg:h-[85vh] relative !z-[0]"
            >
              <SwiperSlide>
                <div className='flex justify-center items-center w-[90vw] h-[65vh] sm:h-[75vh] lg:w-[40vw] lg:h-[85vh]'>
                  <div className='w-[85vw] h-[55vh] sm:h-[65vh] lg:w-[35vw] lg:h-[75vh] rounded-[50%] border-2 border-black flex justify-center items-center'>
                    <img className='h-[40vh] sm:h-[50vh] lg:h-[60vh]' src="https://decemdrinks.com/cdn/shop/products/LondonDry_Serve_1024x1024.png?v=1659602585" alt="image_1"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex justify-center items-center w-[90vw] h-[65vh] sm:h-[75vh] lg:w-[40vw] lg:h-[85vh]'>
                  <div className='w-[85vw] h-[55vh] sm:h-[65vh] lg:w-[35vw] lg:h-[75vh] rounded-[50%] border-2 border-black flex justify-center items-center'>
                    <img className='h-[40vh] sm:h-[50vh] lg:h-[60vh]' src="https://decemdrinks.com/cdn/shop/products/LondonDry_Front_1024x1024.png?v=1659602585" alt="image_1"/>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='flex justify-center items-center w-[90vw] h-[65vh] sm:h-[75vh] lg:w-[40vw] lg:h-[85vh]'>
                  <div className='w-[85vw] h-[55vh] sm:h-[65vh] lg:w-[35vw] lg:h-[75vh] rounded-[50%] border-2 border-black flex justify-center items-center'>
                    <img className='h-[40vh] sm:h-[50vh] lg:h-[60vh]' src="https://decemdrinks.com/cdn/shop/products/LondonDry_Back_1024x1024.png?v=1659602585" alt="image_1"/>
                  </div>
                </div>
              </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <div className='w-[90vw] lg:w-[35vw]'>
            <div className='justify-between py-4 border-b-2 border-black hidden lg:flex'>
              <p className={`${noto.className} hover:text-blue-600 cursor-pointer underline font-bold transition-all duration-300 ease-in`}>LONDON DRY</p>
              <p className={`${noto.className} hover:text-blue-600 cursor-pointer transition-all duration-300 ease-in`}>SPICE BLEND</p>
              <p className={`${noto.className} hover:text-blue-600 cursor-pointer transition-all duration-300 ease-in`}>APERITIF</p>
              <p className={`${noto.className} hover:text-blue-600 cursor-pointer transition-all duration-300 ease-in`}>TRIO</p>
            </div>
            <div className='py-6'>
              <h1 className={`text-2xl ${noto.className}`}>LONDON DRY</h1>
              <div>
                <span className={`text-2xl italic font-light ${play.className}`}>made with </span>
                <span className={`text-2xl font-light tracking-[0.01em] ${play.className}`}>British Gin</span>
              </div>
              <div className='flex justify-between py-6'>
                <p className={`text-xl font-light tracking-[0.01em] ${play.className}`}>Distilled <span className={`italic font-light ${play.className}`}>in</span> England</p>
                <p className={`text-xl ${noto.className}`}>10%vol / 700ml</p>
              </div>
              <div className='w-full p-2 text-2xl font-light tracking-[0.01em] bg-black text-white text-center rounded-full cursor-pointer hover:bg-blue-700 transition-all duration-500 ease-in'>
                $29.95 - Add to Bag
              </div>
              <p className={`text-blue-700 p-2 text-center text-lg ${noto.className}`}>
                FREE UK DELIVERY
              </p>
            </div>
           <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className='border-y-2 border-black'>
              <AccordionHeader onClick={() => handleOpen(1)} className='border-none font-normal text-black cursor-default hover:text-black'>DESCRIPTION</AccordionHeader>
              <AccordionBody className={` text-lg text-black font-[500] -mt-4 ${noto.className}`}>
                LONDON DRY <span className={`${inter.className} tracking-tight font-normal text-base`}>is perfect for those who love a G&T. It&apos;s full of flavour but at 10% ABV it means you can enjoy the same ritual and taste but just with less alcohol. The unique combination of botanicals are steeped for 24 hours, then distilled, capturing the essential oils and big flavours. Before being masterfully blended with natural flavours to boost the character and provide a long refreshing finish at just 10%.</span>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className='border-b-2 border-black'>
              <AccordionHeader onClick={() => handleOpen(2)} className='border-none font-normal text-black cursor-default hover:text-black'>
                TASTE
              </AccordionHeader>
              <AccordionBody className={`${inter.className} text-black tracking-tight font-normal text-base -mt-4`}>
              Upfront Juniper berry, authentic woody juniper with more of a floral berry coming through the mid palate, coriander seed in the middle, finishing with herbaceous backnotes.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />} className='border-b-2 border-black'>
              <AccordionHeader onClick={() => handleOpen(3)} className='border-none font-normal text-black cursor-default hover:text-black'>
                SERVE
              </AccordionHeader>
              <AccordionBody className={`${inter.className} text-black tracking-tight font-normal text-base -mt-4`}>
              Simply serve 50ml chilled over ice with 150ml premium Indian Tonic and a lemon slice. 2.3% ABV.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
  )
}
