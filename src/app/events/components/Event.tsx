import { Event as EventProps } from '@/types'
import Image from 'next/image'
import React from 'react'
import { IBM_Plex_Mono } from 'next/font/google'
import dayjs from "dayjs";
import Button from './Button'
const ibmFont = IBM_Plex_Mono({
    weight: '600',
    subsets: ['latin'],
})
function EventCard({ event }: { event: EventProps }) {
    const startsOn = dayjs(event.startsOn)
    return (
        <div className='gap-4 border-4 bg-[#D1550C] border-[#F8861E] p-4'>
            <Image
                src={event.thumbnail || "/images/events-placeholder.svg"}
                alt={event.name}
                width={500}
                height={500}
                className=''
            />
            <p className={`${ibmFont.className} lg:text-4xl text-2xl font-bold text-black`}>{event.name}</p>
            <p className={`${ibmFont.className} lg:text-xl  font-bold text-black`}>Time left: {startsOn.format("DD/MM/YYYY h:mm A")}</p>
            {event.registrationStatus === "ONGOING" && event.registrationFee > 0 ? <p className={`${ibmFont.className} lg:text-xl  font-bold text-black`}>Registration Fee: {event.registrationFee}</p> : <p className={`${ibmFont.className} lg:text-xl  font-bold text-black`}>Free Registration</p>}
            {event.registrationStatus === "ONGOING" && event.teamSize > 1 ? <p className={`${ibmFont.className} lg:text-xl  font-bold text-black`}>Team Size: {event.teamSize}</p> : <p className={`${ibmFont.className} lg:text-xl  font-bold text-black`}>Solo Event</p>}
            <div className='flex gap-4 pt-4 w-full'>
                <div>

                    <Button title="Rules" link={""} />
                </div>
                {event.registrationStatus === "ONGOING" ? <Button title="Register" link={"/events/register"} /> : <p className={`${ibmFont.className} lg:text-xl  font-bold text-black`}>Registration Closed</p>}
            </div>
        </div>
    )
}

export default EventCard