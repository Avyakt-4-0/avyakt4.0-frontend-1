import Image from 'next/image'
import React from 'react'

export default function Clubs() {
    const clubs = [{ name: 'club1', image: '/images/clubs/1.svg' },
    { name: 'club2', image: '/images/clubs/2.svg' },
    { name: 'club3', image: '/images/clubs/3.svg' },
    { name: 'club4', image: '/images/clubs/4.svg' },
    { name: 'club5', image: '/images/clubs/5.svg' },
    { name: 'club6', image: '/images/clubs/6.svg' },
    { name: 'club7', image: '/images/clubs/7.svg' },
    { name: 'club8', image: '/images/clubs/8.svg' },
    { name: 'club9', image: '/images/clubs/9.svg' },
    { name: 'club10', image: '/images/clubs/10.svg' },
    { name: 'club11', image: '/images/clubs/11.svg' },
    { name: 'club12', image: '/images/clubs/12.svg' },
    ]
    return (
        <div className='grid grid-cols-4 gap-12 bg-[#F5610D4D] border-8 border-[#F8861E] w-[
1506px] mx-24'>
            {clubs.map((club, index) => (
                <div key={index} className='w-[206.17px] h-[233.05px]'>
                    <Image src={club.image} alt={club.name} width={206.17} height={233.05} />
                </div>
            ))}
        </div>
    )
}
