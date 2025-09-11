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
            <div className="relative footer w-full flex justify-center items-center overflow-hidden">
                <Image
                    src="/images/footer-logo.svg"
                    width={1500}
                    height={1080}
                    alt="footer"
                    className="z-10 absolute bottom-0 md:pt-[28rem] w-full md:max-w-full"
                />
                <Image
                    src={"https://res.cloudinary.com/dmqpa2073/image/upload/v1757569064/loki_laufey_odinson__avengers_solo_png_by_iwasboredsoididthis_dejlb66-414w-2x_2_uvim2s.png"}
                    width={700}
                    height={800}
                    alt="footer"
                    className="z-0 w-[80%] max-w-[80%] md:max-w-full h-[250px] lg:h-[800px]"
                />
            </div>
            <div className="lg:min-h-[500px] min-h-[350px] lg:h-[900px] min-w-full bg-[#EF8713] flex flex-col justify-between pb-4 lg:pb-10 px-4 md:pl-14">
                <div className="copyright flex flex-col items-end pt-3 md:pt-6 pr-0 md:pr-6">
                    <h3 className="font-montserrat font-bold text-[14px] md:text-[16px] lg:text-[20px] leading-[16px] md:leading-[18px] lg:leading-[20px] text-black">
                        copyright @Avaykt {new Date().getFullYear()}
                    </h3>
                    <h3 className="font-montserrat font-bold text-[14px] md:text-[16px] lg:text-[20px] leading-[16px] md:leading-[18px] lg:leading-[20px] align-middle text-black">
                        Made by ❤  of Team Avyakt
                    </h3>
                </div>

                <div className="lg:h-[600px] flex flex-col relative text-[36px] md:text-[60px] lg:text-[70px]">
                    <div className={`${bebasFont.className} text-[60px] md:text-[120px] lg:text-[200px] leading-[50px] md:leading-[100px] lg:leading-[170px]`}>
                        <h1 className="text-white stroke-slate-800 stroke-[1px]">DAMN !</h1>
                        <div className="flex gap-2 md:gap-4">
                            <h1
                                className="font-bold text-[60px] md:text-[120px] lg:text-[200px]"
                                style={{
                                    WebkitTextStroke: "2px #652703",
                                    WebkitTextStrokeWidth: "2px",
                                    display: "inline-block",
                                    marginRight: "10px",
                                }}
                            >
                                YOU
                            </h1>
                            <h1
                                className=""
                                style={{
                                    WebkitTextStroke: "2px #652703",
                                    WebkitTextStrokeWidth: "2px",
                                    color: "transparent",
                                    fontWeight: "bolder",
                                }}
                            >
                                LOVE
                            </h1>
                        </div>
                        <h1 className="text-[60px] md:text-[120px] lg:text-[200px]">SCROLLING</h1>
                    </div>

                    <div className="absolute right-0 md:top-[150px] lg:top-[170px] md:h-[250px] lg:h-[300px] flex flex-col gap-1 md:gap-2 text-3xl md:text-5xl lg:text-8xl">
                        <Link href="https://www.instagram.com/avyakt4.0/" target="_blank">
                            <IoLogoInstagram className="text-black" />
                        </Link>
                        <Link href="https://www.linkedin.com/school/gietuniversitygunupur/" target="_blank">
                            <FaLinkedinIn className="text-black" />
                        </Link>
                        <Link href="https://www.facebook.com/gietuniversitygunupur/" target="_blank">
                            <FaFacebookF className="text-black" />
                        </Link>
                        <Link href="https://www.youtube.com/@AVYAKTGIETU" target="_blank">
                            <FaYoutube className="text-black" />
                        </Link>
                    </div>
                </div>

                <div className="flex gap-2 md:gap-4 px-4 md:px-0">
                    <Image src="/images/gietlogo.svg" alt="giet" width={100} height={100} className="w-[40px] h-[40px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px]" />
                    <Image src="/images/avyakt-logo-b.png" alt="avyakt" width={100} height={100} className="w-[40px] h-[40px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[70px] lg:mt-4" />
                    <Image src="/images/tva.svg" alt="tva" width={100} height={100} className="w-[40px] h-[40px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px]" />
                </div>
            </div >
        </>
    );
}