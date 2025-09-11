"use client";
import React from 'react'
import { IBM_Plex_Mono } from 'next/font/google'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ibmFont = IBM_Plex_Mono({
    weight: '600',
    subsets: ['latin'],
})

export default function Multiverse() {
    return (
        <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-[#F5610D4D] lg:m-12 border-8 border-[#F8861E] mx-2"
        >
            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`${ibmFont.className} lg:text-[48px] text-white text-center lg:py-6`}
            >
                THE AVYAKT MULTIVERSE
            </motion.h1>

            {/* Background Container */}
            <div className="bg-multiverse bg-contain bg-no-repeat lg:h-[566px] lg:min-w-[1300px] bg-center w-full h-[200px]">

                {/* First Row */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.2 }}
                    className={`${ibmFont.className} lg:text-[36px] text-[14px] text-white flex justify-around lg:p-24 lg:gap-24 pt-12`}
                >
                    {[
                        { name: "SPORTS EVENTS", link: "/events/sports" },
                        { name: "NON TECHNICAL EVENTS", link: "/events/non-technical" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link href={item.link}><h1>{item.name}</h1></Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Second Row */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.2 }}
                    className={`${ibmFont.className} lg:text-[36px] text-[14px] text-white flex justify-end lg:pr-8 lg:py-48 lg:gap-24 pt-16 gap-4`}
                >
                    {[
                        { name: "TECHNICAL EVENTS", link: "/events/technical" },
                        { name: "CULTURAL EVENTS", link: "/events/cultural" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link href={item.link}><h1>{item.name}</h1></Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}
