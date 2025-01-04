import Image from 'next/image';
import React from 'react';
import localFont from 'next/font/local';
const usangelFont = localFont({ src: '../../public/fonts/usangel.ttf' })

export default function Card({ image, title }: { image: string, title: string }) {
    return (
        <div className="bg-card_border_bg bg-no-repeat p-4 rounded-lg shadow-lg w-[290px] h-[491px] bg-contain flex flex-col  gap-4 intersect:animate-fade-right animate-once animate-ease-in">
            <div className="flex justify-center rounded-2xl">
                <Image src={image} width={223} height={331} alt={title} className='rounded-2xl p-1 pt-8 intersect:animate-fade-right animate-once animate-ease-in' />
            </div>
            <div className="text-center text-3xl border-4 rounded-sm border-[#F8861E] w-[211px] ml-6">
                <h1 className={`${usangelFont.className} text-[#F8861E] `}>{title.toUpperCase()}</h1>
            </div>
        </div>
    );
}
