'use client'
import NavBar from '@/components/nav-bar';
import localFont from 'next/font/local'
import Image from 'next/image';
import { Jersey_10 } from 'next/font/google'
import { IBM_Plex_Mono } from 'next/font/google'
import Card from '@/components/card';
import Guests from '@/components/guests';
import Multiverse from '@/components/multiverse';
import Clubs from '@/components/clubs';
import Footer from '@/components/footer';
import { AuthButton } from '@/components/authButton';
import { Suspense, useEffect, useState } from 'react';
import { checkIsAuthenticated } from '@/lib/auth/checkIsAutheticatedServerAction';
import { useSession } from 'next-auth/react';
import { Loader } from '@/components/loader';
import Gallery from '@/components/gallery';
import { TextAnimate } from '@/components/ui/text-animate';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
// Font files can be colocated inside of `pages`
const titleFont = localFont({ src: '../../public/fonts/ARB.ttf' })
const usangelFont = localFont({ src: '../../public/fonts/usangel.ttf' })
const farFromHomeComingFont = localFont({ src: '../../public/fonts/Far-From Homecoming.otf' })
const yellowPeasFont = localFont({ src: '../../public/fonts/Yellow Peas.ttf' })
const jerseyFont = Jersey_10({
    weight: '400',
    subsets: ['latin'],
})
const ibmFont = IBM_Plex_Mono({
    weight: '600',
    subsets: ['latin'],
})
const aerionFont = localFont({ src: '../../public/fonts/aerion-bold.otf' })
const eventNames = ['technical', 'non-technical', 'cultural', 'others']
export default function Home() {
    const [userName, setUsername] = useState<string | null>(null);
    const [authStatus, setAuthStatus] = useState<boolean>(false);
    const session = useSession()

    return (
        <div className=' min-w-full'>
            {/* hello{userName} */}
            <div className="relative lg:min-h-screen border-[#F8861E] border-4">
                <NavBar />

                {/* Background image (lowest layer) */}
                <Image
                    src={"/images/loki.svg"}
                    alt="loki"
                    width={100}
                    height={100}
                    className="w-[400px] h-[400px] lg:w-[500px] lg:h-[700px] absolute bottom-0 right-1/2 translate-x-1/2 z-0 object-cover"
                />

                {/* Intro section (above image) */}
                <div className="relative flex flex-col justify-center items-center lg:h-[660px] h-[500px] z-10">
                    <div className="flex flex-col w-fit lg:leading-[100.38px] mt-32">
                        <div className="flex justify-center items-center h-full gap-4 lg:gap-24 text-[46px] lg:text-[160px] sm:leading-[54.32px]">
                            <h1 className={`${usangelFont.className}`}>AVYAKT</h1>
                            <h1 className={`${usangelFont.className}`}>4.0</h1>
                        </div>
                        <h2
                            className={`${usangelFont.className} text-center text-[10px] lg:text-[32px]`}
                        >
                            The most Awaited CSE Department Fest
                        </h2>
                    </div>

                    {session.status === "unauthenticated" && <AuthButton />}
                </div>
            </div>

            <div className="lg:w-full flex justify-start w-48">
                <Image
                    src="/images/border.svg"
                    width={400}
                    height={20}
                    alt="border"
                    className="z-10"
                />
            </div>
            {/* About event section */}
            <div className='sm:grid sm:grid-cols-1 gap-4 lg:my8 my-4 lg:h-[1000px] p-4 lg:p-0'
                style={{ gridTemplateColumns: '3fr 1fr', paddingLeft: "20px", paddingRight: "20px", textAlign: 'justify' }}>

                <h1 className={`${ibmFont.className} text-shadow-lg lg:max-w-[90%] lg:text-[28px] lg:leading-[50.32px] lg:h-[847px] text-justify`}>
                    <TextGenerateEffect words="Welcome to CSE FEST '25, the annual celebration of innovation, technology, and collaboration hosted by the Department of Computer Science and Engineering.
                        This year's fest is set to be bigger and better, bringing together students, tech enthusiasts, and industry leaders to explore groundbreaking ideas and showcase talent."
                        className={`${ibmFont.className} text-white`}
                        duration={.4}
                    />
                </h1>
                <div>
                    <Image src="/images/giet.svg" width={400} height={100} alt="border" className="" />
                </div>
            </div>

            {/* you tube video part */}
            <div className='flex justify-center items-center lg:mt-48 p-2'>
                <div className='lg:w-[1107px] lg:h-[635px] w-full h-[200px] border-[#F8861E] border-8 lg:rounded-[83px] rounded-[40px]'>
                    {/* here we are adding youtube video */}
                </div>
            </div>
            {/* avyakt multiverse */}
            <section className='lg:mt-48'>
                <div className="flex items-center gap-2" >
                    <h1 className={`${ibmFont.className} lg:text-[48px] text-white pl-2`}>Click on the event type </h1>
                    <Image src={"/images/click.svg"} width={15} height={15} alt="border" className="" />
                </div>
                <Multiverse />
            </section>

            {/* college clubs */}
            <div className='p-2'>
                <h1 className={`${jerseyFont.className} lg:text-[205px] text-[50px] text-[#FA861B] text-center`}>OUR CLUBS</h1>
                <Clubs />
                <h1 className={`${ibmFont.className} lg:text-[40px] lg:mx-24 text-start pt-2 uppercase`}>here are the clubs which collaborate with avyakt to make it more awesome</h1>
            </div>
            {/* avyakt gallery */}
            <Gallery />
            {/* footer */}
            <Footer />
        </div>
    );
}
