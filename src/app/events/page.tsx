import ComingSoon from '@/components/ComingSoon'
import EventCard from '@/components/event-card'
import React from 'react'

export default function page() {
    const eventNames = [{ name: "Cultural", image: "/images/Cultural.svg" }, { name: "Technical", image: "/images/Technical.svg" }, { name: "Non-Technical", image: "/images/Non-Technical.svg" }]
    const isCompleted = false
    if (isCompleted) {
        return (
            <div className='bg-cover min-w-full h-screen bg-repeat-y'>
                <div className='grid grid-cols-1 lg:grid-cols-4'>
                    {eventNames.map((event) => {
                        return <EventCard name={event.name} image={event.image} key={event.name} />
                    })}
                </div>
            </div>
        )
    }
    return <ComingSoon />
}
