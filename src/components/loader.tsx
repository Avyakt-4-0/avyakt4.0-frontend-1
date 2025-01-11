import React from 'react'
import { IBM_Plex_Mono } from 'next/font/google'
import Image from 'next/image'
const ibmFont = IBM_Plex_Mono({
    weight: '600',
    subsets: ['latin'],
})
export function Loader() {
    return (
        <div className='bg-hero flex-col justify-center content-center'>
            <h1 className={`${ibmFont.className}`}>HEY, I AM MISS MINUTES, i’m from the tva. welcome to avyakt 4.0, the most awaited department fest. Explore all the possibilities of the multiverse with avyakt. from tech to cultural events.</h1>
            <Image src={'/images/time.svg'} width={616} height={616} alt='clock' />
        </div>
    )
}
