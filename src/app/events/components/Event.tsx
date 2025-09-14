import { Event as EventProps } from '@/types'
import Image from 'next/image'
import React from 'react'
import { IBM_Plex_Mono } from 'next/font/google'
import dayjs from "dayjs";
import Button from './Button'
import { TextAnimate } from "@/components/magicui/text-animate";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import GoogleDocsViewer from '@/components/google_docs_viewer';
const ibmFont = IBM_Plex_Mono({
    weight: '600',
    subsets: ['latin'],
})
function EventCard({ event }: { event: EventProps }) {
    const startsOn = dayjs(event.startsOn)
    return (
        <div className='gap-4 border-4 bg-[#d1540ca4] border-[#F8861E] p-4'>
            <Image
                src={event.thumbnail.trim() || "/images/events-placeholder.svg"}
                alt={event.name}
                width={500}
                height={500}
                className='w-full rounded-md h-1/2 object-cover'
            />
            <p className={`${ibmFont.className} lg:text-4xl text-2xl font-bold text-white`}>{event.name}</p>
            <p className={`${ibmFont.className} lg:text-xl  font-bold text-white`}>Starts On: {startsOn.format("DD/MM/YYYY h:mm A")}</p>
            {event.registrationStatus === "ONGOING" && event.registrationFee > 0 ? <p className={`${ibmFont.className} lg:text-xl  font-bold text-white`}>Registration Fee: {event.registrationFee}</p> : <p className={`${ibmFont.className} lg:text-xl  font-bold text-white`}>Free Registration</p>}
            {event.registrationStatus === "ONGOING" && event.teamSize > 1 ? <p className={`${ibmFont.className} lg:text-xl  font-bold text-white`}>Team Size: {event.teamSize}</p> : <p className={`${ibmFont.className} lg:text-xl  font-bold text-white`}>Solo Event</p>}
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
                            {/* <div>
                                {event.rules.map((rule, index) => (
                                    <TextAnimate
                                        animation="slideLeft"
                                        by='character'
                                        className={`${ibmFont.className} lg:text-xl text-sm  font-bold text-green-500`} key={index}>{`${index + 1}. ${rule}`}</TextAnimate>
                                ))}
                            </div> */}
                            {/* <div>
                                <GoogleDocsViewer docUrlOrId={event.rules[0]} />
                            </div> */}
                            {/* <Button title='View Rules' link={`/rules?docsId=${event.rules[0]}`} /> */}
                            <a
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
                            </a>


                        </DialogContent>
                    </Dialog>
                </div>
                {event.registrationStatus === "ONGOING" ? <Button title="Register" link={`/events/register/${event.id}?name=${event.name}&teamSize=${event.teamSize}&registrationFee=${event.registrationFee}`} />
                    : <p className={`${ibmFont.className} lg:text-xl  font-bold text-black`}>Registration Closed 🚫</p>}
            </div>
        </div>
    )
}

export default EventCard