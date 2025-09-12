"use client"
import React from 'react';
import localFont from 'next/font/local';
const usangelFont = localFont({ src: '../../../public/fonts/usangel.ttf' })
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();

    const handleGoHome = () => {
        router.push('/');
    };

    return (
        <div className="flex items-center justify-center h-screen text-center">
            <p className={`${usangelFont.className} text-4xl`}>
                Please login with your college mail 
                <br/>
                <button className={`${usangelFont.className} text-2xl mt-4 bg-[#F8861E] text-white py-2 px-4 rounded`} onClick={handleGoHome}>
                    Go Home
                </button>
            </p>
        </div>
    );
}
