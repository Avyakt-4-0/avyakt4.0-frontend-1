import React from 'react'
import { signIn } from '../../auth'
import Image from 'next/image'
import { IBM_Plex_Sans } from 'next/font/google'
const ibmFont = IBM_Plex_Sans({
    weight: '600',
    subsets: ['latin']
})
export function AuthButton() {
    return (
        <button onClick={async () => {
            'use server'
            await signIn("google")
        }}>
            <div className={`flex justify-center items-center gap-2 bg-[#F8861E] lg:w-[327px] lg:h-[36px] ${ibmFont.className} text-center lg:text-[24px] text-sm rounded-lg mt-1 `}>
                <Image src='/images/google.svg' width={30} height={30} alt="google" className='w-4 h-4' />
                <p className='text-black p-1'>LOGIN WITH GOOGLE</p>
            </div>
        </button>
    )
}
