'use client'
import ComingSoon from '@/components/ComingSoon'
import { use, useEffect, useState, useTransition } from 'react'
import { Event } from '@/types'
import EventCard from '../components/Event'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { AnimatePresence } from 'motion/react'
import { Skeleton } from '@/components/ui/skeleton'
import { fetchEvents } from '@/lib/events/server-action'
import Link from 'next/link'

type FilterType = "ALL" | "BOYS" | "GIRLS" | "SOLO" | "TEAM"

const encodedCategory = {
    "technical": "TECH",
    "cultural": "CULTURAL",
    "sports": "SPORTS",
    "non-technical": "NONTECH"
}

export default function EventsByCategory({
    params,
}: {
    params: Promise<{ category: string }>
}) {
    const { category } = use(params)
    const isCompleted = true
    const [events, setEvents] = useState<Event[]>([])
    const [filter, setFilter] = useState<FilterType>("ALL")
    const [loading, setLoading] = useState(true)
    const [isPending, startTransition] = useTransition()
    useEffect(() => {
        const fetchAllEvents = async () => {
            startTransition(async () => {
                const data = await fetchEvents()
                const filteredEvents = data.filter((event: Event) => event.category === encodedCategory[category as keyof typeof encodedCategory])
                console.log(filteredEvents)
                setEvents(filteredEvents)
                if (filteredEvents.length === 0) {
                    setLoading(false)
                }
            })
        }
        fetchAllEvents()
    }, [])
    if (!isCompleted) {
        return <ComingSoon />;
    }
    const filteredEvents = events.filter((event) => {
        if (filter === "BOYS") return event.genderCategory === "MALE" || event.genderCategory === "ALL"
        if (filter === "GIRLS") return event.genderCategory === "FEMALE" || event.genderCategory === "ALL"
        if (filter === "SOLO") return event.teamSize === 1
        if (filter === "TEAM") return event.teamSize > 1
        return true
    })
    if (filteredEvents.length === 0 && !loading) {
        return <ComingSoon />
    }

    return (
        <div className="flex flex-col gap-4 px-4">
            <div className="flex space-x-3  overflow-x-auto pb-2">
                <div className="border-2 border-[#FA861B] flex flex-shrink-0 items-center justify-center bg-[#F4934359] lg:w-24 w-16">
                    <Link href="/events">
                        <Image
                            src={"/images/filter.svg"}
                            alt="filter"
                            width={50}
                            height={50}
                            className="cursor-pointer w-6 h-6 lg:w-16 lg:h-8"
                        />
                    </Link>
                </div>

                {(["ALL", "BOYS", "GIRLS", "SOLO", "TEAM"] as FilterType[]).map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-4 py-1 border-2 border-[#FA861B] text-[#FA861B] 
                        hover:bg-[#F4934359] hover:text-black transition w-24
                        ${filter === f ? "bg-[#F4934359] text-white hover:text-black" : ""}`}
                    >
                        {f}
                    </button>
                ))}
            </div>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                variants={{
                    hidden: {},
                    show: {
                        transition: { staggerChildren: 0.2 }
                    }
                }}
            >
                <AnimatePresence >
                    {isPending ?
                        <div className="flex flex-col gap-4 lg:flex-row lg:w-[95vw] justify-center ">
                            <Skeleton className="h-[70vh] w-[100vw] rounded-lg" />
                            <Skeleton className="h-[70vh] w-[100vw] rounded-lg" />
                            <Skeleton className="h-[70vh] w-[100vw] rounded-lg" />
                        </div> : filteredEvents.length > 0 && filteredEvents.map((event) => (
                            <motion.div
                                key={event.id}
                                variants={{
                                    hidden: { y: 40, opacity: 0 },
                                    show: { y: 0, opacity: 1 }
                                }}
                                initial="hidden"
                                animate="show"
                                exit={{ y: -40, opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <EventCard event={event} />
                            </motion.div>
                        ))}
                </AnimatePresence>
            </motion.div>
        </div >
    )
}