import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function EventCard({ name, image, link }: { name: string, image: string, link:string }) {
    return (
        <Link href={link}>
            <div className='bg-[#F8861E] w-[247px] h-[324px] flex flex-col items-center justify-center'>
                <div className='w-[227px] h-[226px]'>
                    <Image src={image} width={227} height={226} alt={name} />
                </div>
                <p className='text-white'>{name}</p>
            </div>
        </Link>
    )
}
