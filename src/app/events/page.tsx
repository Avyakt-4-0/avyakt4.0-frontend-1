import ComingSoon from '@/components/ComingSoon'
import EventCard from '@/components/event-card'
import Footer from '@/components/footer'
import { link } from 'fs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
    const eventNames = [
        { 
            name: "Sports", 
            image: "/images/Sports.svg",
            link: "/events/sports"
        }, 
        { 
            name: "Cultural", 
            image: "/images/Cultural.svg",
            link: "/events/cultural" 
        }, 
        { 
            name: "Technical", 
            image: "/images/Technical.svg",
            link: "/events/technical" 
        }, 
        { 
            name: "Non-Technical", 
            image: "/images/Non-Technical.svg",
            link: "/events/non-technical" 
        }]
    const isCompleted = true
    if (!isCompleted) {
        return <ComingSoon />;
    }
    return (
        <>
            <div className='flex flex-col items-center justify-center gap-10 lg:gap-20 my-10 lg:my-20'>
                <p className='text-4xl lg:text-5xl font-extrabold text-center'>Events</p>
                {/* the challenging part */}
                <div className='relative flex flex-col items-center justify-center gap-10 lg:gap-20 h-fit'>
                    <Image 
                        src="/images/events-page/timeline.svg" 
                        width={200} 
                        height={100} 
                        alt="Events" 
                        loading='eager'
                        className="lg:w-[700px] w-[70%]"
                    />
                    {/* done */}
                    <Link href="/events/non-technical">
                        <Image 
                            src="/images/events-page/non-technical.png" 
                            width={200} 
                            height={100} 
                            alt="Events" 
                            className="absolute bottom-64 right-4 lg:-right-28 lg:bottom-[45rem] lg:hover:scale-110 duration-700 lg:w-[310px] w-[35%]"
                        />
                    </Link>
                    {/*  */}
                    <Link href="/events/sports">
                        <Image 
                            src="/images/events-page/sports.png" 
                            width={200} 
                            height={100} 
                            alt="Events" 
                            // loading='lazy'
                            className="absolute bottom-60 left-5 lg:-left-16 lg:bottom-[40rem] lg:hover:scale-110 duration-700 lg:w-[290px] w-[32%]"
                        />
                    </Link>
                    {/* done */}
                    <Link href="/events/technical">
                        <Image 
                            src="/images/events-page/technical.png" 
                            width={200} 
                            height={100} 
                            alt="Events" 
                            className="absolute top-16 left-5 lg:top-48 lg:-left-10 lg:hover:scale-110 duration-700 lg:w-[250px] w-[32%]"
                        />
                    </Link>
                    {/* done */}
                    <Link href="/events/cultural">
                        <Image 
                            src="/images/events-page/cultural.png" 
                            width={200} 
                            height={100} 
                            alt="Events" 
                            className="absolute top-20 right-2 lg:-right-20 lg:top-60 lg:hover:scale-110 duration-700 lg:w-[250px] w-[30%]"
                        />
                    </Link>
                </div>
                
            </div>
            <div className='hidden lg:right-4 -bottom-3 z-10 lg:block fixed lg:w-[150px] w-[70%]'>
                <div className='absolute top-18 right-36 w-[300px] p-2 bg-[#F8861E]/50 border-[3px] backdrop-blur-sm lg:hover:brightness-110 border-[#ee7b0f] font-bold text-center'>
                    <p>Well hey y’all, I’m Miss Minutes—don’t waste a tick, register now and explore the whole multiverse of events before your timeline runs out!</p>
                </div>
                <Image
                    src={"/images/events-page/miss-minutes.png"}
                    width={300}
                    height={100}
                    alt="Miss Minutes"
                    className=''
                />
            </div>
            <Footer/>
        </>
    )
}
