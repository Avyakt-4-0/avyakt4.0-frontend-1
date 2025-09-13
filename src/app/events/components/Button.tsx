import React from 'react'
import { IBM_Plex_Mono } from 'next/font/google'
import Link from 'next/link'
const ibm_plex_mono = IBM_Plex_Mono({
    weight: '600',
    subsets: ['latin'],
})
function Button({ title, link }: { title: string, link: string }) {
    return (
        <Link href={link}>
            <div
                className={`flex items-center justify-center ${ibm_plex_mono.className} text-white text-xl font-normal leading-[30px] text-center bg-[#FA861B] border-2 border-[#FFAE00] hover:shadow-[5px_5px_0px_0px_#FFAE00] h-[40px] w-[140px]`}
            >
                {title}
            </div>
        </Link>
    )
}

export default Button