import Image from "next/image";
import React from "react";
import { Bebas_Neue, IBM_Plex_Mono } from "next/font/google";
const bebasFont = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const ibmPlexMono = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin, FaFacebook, FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="relative footer w-full flex justify-center items-center overflow-hidden">
                <Image
                    src="/images/avyakt-footer-logo.svg"
                    width={1500}
                    height={1080}
                    alt="footer"
                    className="z-10 absolute bottom-0 md:pt-[28rem] w-full md:max-w-full translate-y-1"
                />
                <Image
                    src={"https://res.cloudinary.com/dmqpa2073/image/upload/v1757569064/loki_laufey_odinson__avengers_solo_png_by_iwasboredsoididthis_dejlb66-414w-2x_2_uvim2s.png"}
                    width={700}
                    height={800}
                    alt="footer"
                    className="z-0 w-[80%] max-w-[80%] md:max-w-full h-[210px] lg:h-[800px]"
                />
            </div>
            <div className="bottom-0 lg:h-96 min-w-full bg-[#EF8713] flex flex-col justify-between pb-4 lg:pb-10 px-4 md:pl-14">
                <div className="flex flex-col lg:flex-row justify-around m-10 lg:m-0 items-start text-white lg:pt-10 lg:pb-4 gap-6 lg:gap-0">

                    {/* social media links */}
                    <div className="flex flex-col gap-4 items-center lg:items-start">
                        <p className="font-extrabold text-neutral-100/90">SOCIAL MEDIA LINKS</p>
                        <div className="flex flex-row gap-5">
                            <Link href="https://www.instagram.com/avyakt4.0/" target="_blank" >
                                <IoLogoInstagram className="text-white lg:text-4xl" />
                            </Link>
                            <Link href="https://www.linkedin.com/school/gietuniversitygunupur/" target="_blank">
                                <FaLinkedin className="text-white lg:text-4xl" /> 
                            </Link>
                            <Link href="https://www.facebook.com/gietuniversitygunupur/" target="_blank">
                                <FaFacebook className="text-white lg:text-4xl" /> 
                            </Link>
                            <Link href="https://www.youtube.com/@AVYAKTGIETU" target="_blank">
                                <FaYoutube className="text-white lg:text-4xl" />
                            </Link>
                        </div>
                    </div>

                    {/* list of indices */}
                    <div>
                        <p className="font-extrabold text-neutral-100/90">NAVIGATION</p>
                        <Link href={"/about"} className="flex gap-2 items-center "> About Us Page</Link>
                        <Link href={"/clubs"} className="flex gap-2 items-center">Clubs Page</Link>
                        <Link href={"/team"} className="flex gap-2 items-center">Team Page</Link>
                    </div>
                    <div>
                        <p className="font-extrabold text-neutral-100/90">EVENTS</p>
                        <Link href={"/technical"} className="flex gap-2 items-center">Technical Events </Link>
                        <Link href={"/non-technical"} className="flex gap-2 items-center">Non Technical Events </Link>
                        <Link href={"/cultural"} className="flex gap-2 items-center">Cultural Events </Link>
                        <Link href={"/sports"} className="flex gap-2 items-center">Sports Events</Link>

                    </div>
                </div>

                <div className="flex justify-center items-center gap-2 md:gap-4 lg:mb-10 md:px-0">
                    <Image src="/images/giet-logo.png" alt="giet" width={100} height={100} className="mix-blend-multiply" />
                    <div className="w-1 h-[90px] bg-[#333]"></div>
                    <Image src="/images/avyakt-logo-b.png" alt="avyakt" width={100} height={100} className="" />
                </div>

                <div className="flex justify-center items-center text-center lg:mb-4 lg:mt-0 mt-4 px-2 md:px-0">
                    <h2 className={bebasFont.className + " lg:text-4xl text-2xl"}>TRAVEL THROUGHOUT THE MULTIVERSE WITH AVYAKT 4.0</h2>
                </div>
                
                <div className="flex justify-center items-center">
                    <h3 className={ibmPlexMono.className + " font-bold text-[12px] md:text-[14px] lg:text-[16px] leading-[16px] md:leading-[18px] lg:leading-[20px] text-black"}>
                        © COPYRIGHT WITH AVAYKT 4.0 CSE, GIETU - {new Date().getFullYear()} | MADE WITH ❤️ BY TEAM AVYAKT
                    </h3>
                </div>
            </div >
        </>
    );
}