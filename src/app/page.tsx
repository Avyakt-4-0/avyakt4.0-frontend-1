'use client'
import NavBar from '@/components/nav-bar';
import localFont from 'next/font/local'
import Image from 'next/image';
import { Jersey_10 } from 'next/font/google'
import { IBM_Plex_Mono } from 'next/font/google'
import { motion } from "framer-motion";
import Multiverse from '@/components/multiverse';
import Clubs from '@/components/clubs';
import Footer from '@/components/footer';
import { AuthButton } from '@/components/authButton';
import { Suspense, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Gallery from '@/components/gallery';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';

// Fonts
const titleFont = localFont({ src: '../../public/fonts/ARB.ttf' })
const usangelFont = localFont({ src: '../../public/fonts/usangel.ttf' })
const farFromHomeComingFont = localFont({ src: '../../public/fonts/Far-From Homecoming.otf' })
const yellowPeasFont = localFont({ src: '../../public/fonts/Yellow Peas.ttf' })
const jerseyFont = Jersey_10({
    weight: '400',
    subsets: ['latin'],
})
const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];
const ibmFont = IBM_Plex_Mono({
    weight: '600',
    subsets: ['latin'],
})
const aerionFont = localFont({ src: '../../public/fonts/aerion-bold.otf' })

export default function Home() {
    const [userName, setUsername] = useState<string | null>(null);
    const [authStatus, setAuthStatus] = useState<boolean>(false);
    const session = useSession()

    return (
        <div className='min-w-full'>
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative lg:min-h-screen border-[#F8861E] border-4"
            >
                <NavBar />
                <Image
                    src={"https://res.cloudinary.com/dmqpa2073/image/upload/v1757570598/loki__tva_suit___solo_png_by_iwasboredsoididthis_dekhen0-pre_4_qbiiqg.svg"}
                    alt="loki"
                    width={100}
                    height={100}
                    className="w-[400px] h-[400px] lg:w-[500px] lg:h-[700px] absolute bottom-0 right-1/2 translate-x-1/2 z-0 object-cover"
                />
                {/* Intro text */}
                <div className="relative flex flex-col justify-center items-center lg:h-[660px] h-[500px] z-10">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col w-fit lg:leading-[100.38px] mt-32"
                    >
                        <div className="flex justify-center items-center gap-4 lg:gap-24 text-[46px] lg:text-[160px]">
                            <motion.h1 whileHover={{ scale: 1.1 }} className={`${usangelFont.className}`}>
                                AVYAKT
                            </motion.h1>
                            <motion.h1 whileHover={{ scale: 1.1 }} className={`${usangelFont.className}`}>
                                4.0
                            </motion.h1>
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className={`${usangelFont.className} text-center text-[10px] lg:text-[32px]`}
                        >
                            The most Awaited CSE Department Fest
                        </motion.h2>
                    </motion.div>

                    {session.status === "unauthenticated" && <AuthButton />}
                </div>
            </motion.div>

            {/* Animated border */}
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="lg:w-full  flex justify-start w-48"
            >
                <Image src="/images/border.svg" width={400} height={20} alt="border" />
            </motion.div>

            {/* About section with fade-in */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="my-4 lg:p-0"
                style={{ gridTemplateColumns: '3fr 1fr', paddingLeft: "20px", paddingRight: "20px" }}
            >
                <h1 className={`${ibmFont.className} lg:max-w-[90%] lg:text-[28px] lg:leading-[50.32px]`}>
                    <TextGenerateEffect
                        words="Welcome to CSE FEST '25, the annual celebration of innovation, technology, and collaboration hosted by the Department of Computer Science and Engineering. This year's fest is set to be bigger and better, bringing together students, tech enthusiasts, and industry leaders to explore groundbreaking ideas and showcase talent."
                        className={`${ibmFont.className} text-white`}
                        duration={.4}
                    />
                </h1>
            </motion.div>

            {/* YouTube video */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='flex justify-center items-center p-2'
            >
                <div className='lg:w-[1000px] lg:h-[570px] w-full h-[200px] border-[#F8861E] border-8 lg:rounded-[40px] rounded-[40px]'>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/imFfVMy8Fxk?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&fs=0&disablekb=1&showinfo=0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="lg:w-full h-full lg:rounded-[35px] rounded-[40px]"
                    ></iframe>
                </div>
            </motion.div>

            {/* Events multiverse */}
            <section className='lg:mt-48'>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                >
                    <h1 className={`${ibmFont.className} lg:text-[48px] text-white pl-2`}>
                        Click on the event type
                    </h1>
                    <Image src={"/images/click.svg"} width={15} height={15} alt="border"
                        className="w-4 h-4 lg:w-10 lg:h-10"
                    />
                </motion.div>
                <Multiverse />
            </section>

            {/* Clubs */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='w-full'
            >
                <h1 className={`${jerseyFont.className} lg:text-[205px] text-[50px] text-[#FA861B] text-center`}>
                    OUR CLUBS
                </h1>
                <h1 className={`${ibmFont.className} lg:text-[40px] lg:mx-24 uppercase text-center`}>
                    here are the clubs which collaborate with avyakt to make it more awesome
                </h1>
                <Clubs />
            </motion.div>

            {/* Gallery */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <Gallery />
            </motion.div>
            <Footer />
        </div>
    );
}
