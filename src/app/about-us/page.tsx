"use client"
import NavBar from '@/components/nav-bar'
import React from 'react'
import { Jersey_10, IBM_Plex_Mono } from 'next/font/google'
import Image from 'next/image'
import Footer from '@/components/footer'
import { motion } from "framer-motion"

const jerseyFont = Jersey_10({
    weight: '400',
    subsets: ['latin'],
})
const ibmFont = IBM_Plex_Mono({
    weight: '400',
    subsets: ['latin'],
})

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
}

function AboutUs() {
    return (
        <main className='px-2 text-[#f97902]'>
            <NavBar />

            {/* Section 1: About Department */}
            <motion.h1
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`${jerseyFont.className} lg:text-5xl text-3xl font-bold text-center`}
            >
                About our department
            </motion.h1>

            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className='flex justify-between lg:gap-20 gap-2 mt-2 text-slate-200'
            >
                <p className={`${ibmFont.className} lg:text-2xl text-xs font-bold text-justify`}>
                    Here, ideas come to life and innovation knows no bounds. It's a space where creativity meets technology, and students are encouraged to experiment, learn, and lead. With every line of code and every challenge solved, the next generation of tech pioneers is being shaped. Together, it's not just about building projects it's about creating a smarter, brighter future!
                </p>
                <Image src="/images/giet.svg" alt="about-us" width={500} height={500} className='w-1/2 lg:w-[500px] lg:h-[400px] h-full' />
            </motion.div>

            {/* Section 2: Deputy Dean */}
            <motion.h1
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`${jerseyFont.className} lg:text-5xl text-3xl font-bold mt-8 text-center`}
            >
                Our Deputy Dean
            </motion.h1>

            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className='flex justify-between lg:gap-5 gap-2 mt-2'
            >
                <Image src="/images/dean.JPG" alt="about-us" width={500} height={500} className='w-1/3 lg:w-[500px] lg:h-[400px] border-4 border-[#f97902]' />
                <div className='flex flex-col justify-center text-slate-200'>
                    <h2 className={`${jerseyFont.className} lg:text-3xl text-lg font-bold`}>DR. KAKITA MURALI GOPAL</h2>
                    <p className={`${ibmFont.className} lg:text-2xl text-xs font-bold text-justify`}>
                        Deputy Dean and Head of the Computer Science and Engineering Department at GIET University, is a dedicated educator and researcher with 19 years of experience. His expertise in Big Data, Computer Vision, and Machine Learning, along with his inspiring leadership, continues to drive innovation and excellence.
                    </p>
                </div>
            </motion.div>

            {/* Section 3: Registrar */}
            <motion.h1
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`${jerseyFont.className} lg:text-5xl text-3xl font-bold mt-8 text-center`}
            >
                Our Registrar
            </motion.h1>

            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className='flex justify-between lg:gap-5 gap-2 mt-2 mb-24'
            >
                <div className='flex flex-col justify-center text-slate-200'>
                    <h2 className={`${jerseyFont.className} lg:text-3xl text-lg font-bold`}>DR. N. V. JAGANNADHA RAO</h2>
                    <p className={`${ibmFont.className} lg:text-2xl text-xs font-bold text-justify`}>
                        Congratulations to all on the upcoming tech fest, AVYAKT 4.0! As the Registrar of GIET University, I'm thrilled to see your enthusiasm and talent. This event is a great opportunity to learn, innovate, and showcase your skills in today's fast-paced world.
                    </p>
                </div>
                <Image src="/images/r.svg" alt="about-us" width={500} height={500} className='w-1/3 lg:w-[500px] lg:h-[400px] border-4 border-[#f97902] object-cover' />
            </motion.div>

            <Footer />
        </main>
    )
}

export default AboutUs
