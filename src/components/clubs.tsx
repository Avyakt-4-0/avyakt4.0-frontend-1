import Image from 'next/image'
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

export default function Clubs() {
    const clubs = [
    { name: 'Innotech Club', image: '/images/clubs/1.svg' },
    { name: 'Multimedia Club', image: '/images/clubs/11.svg' },
    { name: 'GeeksforGeeks Student Chapter', image: '/images/clubs/2.svg' },
    { name: 'Cybersecurity Club', image: '/images/clubs/3.svg' },
    { name: 'Android and IOT Club', image: '/images/clubs/4.svg' },
    { name: 'Datascience Club', image: '/images/clubs/5.svg' },
    { name: 'Code Communicators Club', image: '/images/clubs/codecomm.png' },
    { name: 'SARS Club', image: '/images/clubs/7.svg' },
    { name: 'AIML Club', image: '/images/clubs/8.svg' },
    { name: 'WebEye Club', image: '/images/clubs/9.svg' },
    { name: 'GDG Club', image: '/images/clubs/10.svg' },
    { name: 'PDCS Club', image: '/images/clubs/12.svg' },
    { name: 'TechHub Club', image: '/images/clubs/techhub.png' },
    ]
    return (
        <div className='border-8 border-[#F8861E] lg:mx-24' id='clubs'>
            <InfiniteMovingCards items={clubs}
                direction="right"
                speed="slow"
            />
        </div>
    )
}
