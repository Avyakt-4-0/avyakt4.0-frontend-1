import Image from 'next/image'
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

export default function Clubs() {
    const clubs = [{ name: 'club1', image: '/images/clubs/1.svg' },
    { name: 'Multi Media Club', image: '/images/clubs/11.svg' },
    { name: 'club2', image: '/images/clubs/2.svg' },
    { name: 'club3', image: '/images/clubs/3.svg' },
    { name: 'club9', image: '/images/clubs/9.svg' },
    { name: 'club4', image: '/images/clubs/4.svg' },
    { name: 'club5', image: '/images/clubs/5.svg' },
    { name: 'club1', image: '/images/clubs/1.svg' },
    { name: 'club6', image: '/images/clubs/6.svg' },
    { name: 'club7', image: '/images/clubs/7.svg' },
    { name: 'club8', image: '/images/clubs/8.svg' },
    { name: 'club9', image: '/images/clubs/9.svg' },
    { name: 'club10', image: '/images/clubs/10.svg' },
    { name: 'club12', image: '/images/clubs/12.svg' },
    ]
    return (
        <div className='border-8 border-[#F8861E] lg:mx-24'>
            <InfiniteMovingCards items={clubs}
                direction="right"
                speed="slow"
            />
        </div>
    )
}
