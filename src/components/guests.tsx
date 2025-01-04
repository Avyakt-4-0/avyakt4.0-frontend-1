import React from 'react'
import GuestCard from './guest-card'

export default function Guests() {
    const guestsInfo = [
        { name: "iron man", image: '/images/iron-man.webp' },
        { name: "captain america", image: '/images/captain-america.jpg' },
        { name: "hulk", image: "/images/hulk.jpg" },
        { name: "thor", image: "/images/thor.webp" },
        { name: "black widow", image: "/images/black-widow.jpg" },
        { name: "spider man", image: "/images/spider-man.jpg" },
        // { name: "hawkeye", image: "" },
        // { name: "ant man", image: "" },
    ]
    return (
        <div className='grid grid-cols-3 p-8 gap-12'>
            {
                guestsInfo.map((guest, index) => (
                    <div key={index}>
                        <GuestCard img={guest.image} name={guest.name} />
                    </div>
                ))
            }
        </div>
    )
}
