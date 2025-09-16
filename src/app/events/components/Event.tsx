import { Event as EventProps } from '@/types'
import Image from 'next/image'
import React from 'react'
import { IBM_Plex_Mono } from 'next/font/google'
import dayjs from "dayjs";
import Button from './Button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const ibmFont = IBM_Plex_Mono({
    weight: '600',
    subsets: ['latin'],
})
function EventCard({ event }: { event: EventProps }) {
    const startsOn = dayjs(event.startsOn)
    return (
        <div className='gap-4 border-4 bg-[#d1540ca4] border-[#F8861E] p-4 lg:h-[90vh]'>
            <Image
                src={event.thumbnail.trim() || "/images/events-placeholder.svg"}
                alt={event.name}
                width={500}
                height={500}
                className='w-full rounded-md lg:h-[60vh] '
            />
            <p className={`${ibmFont.className} lg:text-2xl text-xl font-bold text-white`}>{event.name}</p>
            <p className={`${ibmFont.className} lg:text-xl  font-bold text-white`}>Registration From: {startsOn.format("DD/MM/YYYY")}</p>
            {event.registrationStatus === "ONGOING" && event.registrationFee > 0 ? <p className={`${ibmFont.className} lg:text-xl  font-bold text-white`}>Registration Fee: {event.registrationFee}</p> : <p className={`${ibmFont.className} lg:text-xl  font-bold text-white`}>Free Registration</p>}
            {event.registrationStatus === "ONGOING" && event.teamSize > 1 ? <p className={`${ibmFont.className} lg:text-xl  font-bold text-white`}>Team Size: {!event.minTeamSize || event.minTeamSize === event.teamSize ? event.teamSize : `${event.minTeamSize} to ${event.teamSize}`}</p> : <p className={`${ibmFont.className} lg:text-xl  font-bold text-white`}>Solo Event</p>}
            <div className='flex gap-4 pt-4 w-full'>
                <div>
                    <Dialog>
                        <DialogTrigger>
                            <div
                                className={`flex items-center justify-center ${ibmFont.className} text-white text-xl font-normal leading-[30px] text-center bg-[#FA861B] border-2 border-[#FFAE00] hover:shadow-[5px_5px_0px_0px_#FFAE00] h-[40px] w-[140px]`}
                            >
                                Rules
                            </div>
                        </DialogTrigger>
                        <DialogContent className="lg:min-w-[60vw]">
                            <DialogHeader>
                                <DialogTitle className={`${ibmFont.className} lg:text-xl text-2xl  font-bold text-green-500 text-center`}>Rules</DialogTitle>
                            </DialogHeader>
                            {event.rules[0].includes("docs.google.com") ? <a
                                href={`https://docs.google.com/document/d/${event.rules[0].split("/d/")[1].split("/")[0]
                                    }/export?format=pdf`}
                                target="_blank"
                                rel="noopener noreferrer"
                                download={`${event.name || "rules"}.pdf`}
                            >
                                <div
                                    className={`flex items-center justify-center ${ibmFont.className} text-white text-xl font-normal leading-[30px] text-center bg-[#FA861B] border-2 border-[#FFAE00] hover:shadow-[5px_5px_0px_0px_#FFAE00] w-full`}
                                >
                                    Download Rules As PDF
                                </div>
                            </a> : event.rules[0].includes("drive.google.com") ? <a href={event.rules[0]} target="_blank" rel="noopener noreferrer"
                                className={`flex items-center justify-center ${ibmFont.className} text-white text-xl font-normal leading-[30px] text-center bg-[#FA861B] border-2 border-[#FFAE00] hover:shadow-[5px_5px_0px_0px_#FFAE00] w-full`} >
                                View Rules
                            </a> : <p>Rules Not Available</p>}
                        </DialogContent>
                    </Dialog>
                </div>
                {event.registrationStatus === "ONGOING" ? <Button title="Register" link={`/events/register/${event.id}?name=${event.name}&teamSize=${event.teamSize}&registrationFee=${event.registrationFee}&category=${event.category}&minTeamSize=${event.minTeamSize}`} />
                    : <p className={`${ibmFont.className} lg:text-xl  font-bold text-black`}>Registration Closed 🚫</p>}
            </div>
        </div>
    )
}

export default EventCard