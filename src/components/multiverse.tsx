import React from 'react'
import { IBM_Plex_Mono } from 'next/font/google'
const ibmFont = IBM_Plex_Mono({
    weight: '600',
    subsets: ['latin'],
})
export default function Multiverse() {
    return (
        <div className='bg-[#F5610D4D] m-12 border-8 border-[#F8861E]'>
            <div>
                <h1 className={`${ibmFont.className} text-[48px] text-white`}>
                    THE AVYAKT MULTIVERSE
                </h1>
            </div>
            <div className='bg-multiverse bg-contain bg-no-repeat h-[566px] min-w-[1300px] bg-center'>
                <div className={`${ibmFont.className} text-[36px] text-white leading-[46.8px] flex justify-around p-24 gap-24 tracking-wide`}>
                    <h1 >SPORTS EVENTS</h1>
                    <h1 >NON TECHNICAL EVENTS</h1>
                </div>
                <div className={`${ibmFont.className} text-[36px] text-white leading-[46.8px] flex justify-end pr-8 py-48 gap-24 tracking-wide`}>
                    <h1 >TECHNICAL EVENTS</h1>
                    <h1 >CULTURAL EVENTS</h1>
                </div>
            </div>
        </div>
    )
}
