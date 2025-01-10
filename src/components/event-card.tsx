import Image from 'next/image'
import React from 'react'

export default function EventCard({ name, image }: { name: string, image: string }) {
    return (
        <div className='bg-[#F8861E] w-[247px] h-[324px] m-4 flex flex-col items-center justify-center'>
            <div className='w-[227px] h-[226px]'>
                <Image src={image} width={227} height={226} alt={name} />
            </div>
            <p className='text-white'>{name}</p>
        </div>
    )
}
