import Image from "next/image";
import React from "react";
import { Bebas_Neue } from "next/font/google";
const bebasFont = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
});
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="footer w-full pt-40">
                <Image src="/images/footer-logo.svg" width={1920} height={1080} alt="footer" />
            </div>
            <div className="lg:h-[900px] w-full bg-[#EF8713] flex flex-col justify-between pb-10 pl-14">
                <div className="copyright flex flex-col items-end pt-6 pr-6 justify-between">
                    <h3 className="font-montserrat font-bold lg:text-[20px] leading-[20px] text-[#D9D9D9]">
                        copyright @Avaykt 2025{" "}
                    </h3>
                    <h3 className="font-montserrat font-bold lg:text-[20px] leading-[20px] align-middle mt-1">
                        Made by ❤ of Our team
                    </h3>
                </div>

                <div className="lg:h-[600px] flex flex-col relative text-[70px]">
                    <div
                        className={`${bebasFont.className} lg:text-[200px] lg:leading-[170px] leading-[60px]`}>
                        <h1 className="text-white stroke-slate-800 stroke-[1px]">DAMN !</h1>
                        <div className="flex gap-4">
                            <h1
                                className="font-bold lg:text-[200px]"
                                style={{
                                    WebkitTextStroke: "4px #652703",
                                    display: "inline-block", // Makes the element take up natural width
                                    marginRight: "20px", // Apply right margin
                                }}
                            >
                                YOU
                            </h1>
                            <h1
                                className=""
                                style={{
                                    WebkitTextStroke: "4px #652703",
                                    color: "transparent",
                                    fontWeight: "bolder",
                                }}
                            >
                                LOVE
                            </h1>
                        </div>
                        <h1>SCROLLING</h1>
                    </div>

                    <div className="absolute right-[10px] lg:top-[170px] lg:h-[300px] lg:w-[64px] flex flex-col lg:gap-2 text-xl lg:text-8xl">
                        <Link href="">
                            <IoLogoInstagram className="text-black" />
                        </Link>
                        <Link href="">
                            <FaLinkedinIn className="text-black" />
                        </Link>
                        <Link href="">
                            <FaFacebookF className="text-black" />
                        </Link>
                        <Link href="">
                            <FaYoutube className="text-black" />
                        </Link>
                    </div>
                </div>

                <div className="flex gap-4">
                    <Image src="/images/giet-logo.svg" alt="giet" width={30} height={30} className="cover" />
                    <Image src="/images/logo.png" alt="avyakt" width={30} height={20} className="cover" />
                </div>
            </div >
        </>
    );
}