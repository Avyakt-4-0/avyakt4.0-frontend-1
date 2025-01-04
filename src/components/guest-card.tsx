import localFont from 'next/font/local'
import Image from 'next/image'
import React from 'react'
const usangelFont = localFont({ src: '../../public/fonts/usangel.ttf' })

export default function GuestCard({ name, img }: { name: string, img: string }) {
    return (
        <div className='shadow-md hover:shadow-3xl bg-black text-white border-4 border-[#FFAE00] h-[435px] w-[385px] '>
            <div className=' rounded-4xl'>
                <Image src={img} alt={name} width={385} height={374} objectFit='contain' className='p-2 w-[380px] h-[400px] rounded-4xl' />
            </div>
            <h1 className={`${usangelFont.className} text-[#f3f2f2] text-center`}>{name.toUpperCase()}</h1>
        </div>
    )
}
