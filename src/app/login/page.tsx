'use client'
import { AuthButton } from '@/components/authButton'
import React from 'react'
import localFont from 'next/font/local'

const usangelFont = localFont({ src: '../../../public/fonts/usangel.ttf' });

function page() {
    return (
        <div className='flex flex-col gap-4 items-center justify-center h-screen text-center'>
            <h1 className={`${usangelFont.className} text-4xl text-white`}>Please first login with your college mail</h1>
            <AuthButton />
        </div>
    )
}

export default page