import React from 'react'
import { IBM_Plex_Mono } from 'next/font/google'
const ibmFont = IBM_Plex_Mono({
    weight: '600',
    subsets: ['latin'],
})
export default function Multiverse() {
    return (
        <div className='bg-[#F5610D4D] lg:m-12 mt-4 border-8 border-[#F8861E] m-2'>
            <div>
                <h1 className={`${ibmFont.className} lg:text-[48px] text-white`}>
                    THE AVYAKT MULTIVERSE
                </h1>
            </div>
            <div className='bg-multiverse bg-contain bg-no-repeat lg:h-[566px] lg:min-w-[1300px] bg-center w-full h-[200px]'>
                <div className={`${ibmFont.className} lg:text-[36px]  text-[14px] text-white lg:leading-[46.8px] flex justify-around lg:p-24 lg:gap-24 pt-12 lg:tracking-wide tracking-tight`}>
                    <h1 >SPORTS EVENTS</h1>
                    <h1 >NON TECHNICAL EVENTS</h1>
                </div>
                <div className={`${ibmFont.className} lg:text-[36px] text-[14px] text-white lg:leading-[46.8px] flex justify-end lg:pr-8 lg:py-48 lg:gap-24 pt-16 gap-4 lg:tracking-wide tracking-tight`}>
                    <h1 >TECHNICAL EVENTS</h1>
                    <h1 >CULTURAL EVENTS</h1>
                </div>
            </div>
        </div>
    )
}
