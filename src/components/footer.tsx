import Image from "next/image";
import React from "react";
import { Bebas_Neue } from "next/font/google";
const bebasFont = Bebas_Neue({
    weight: "400",
    subsets: ["latin"],
});
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <div className="footer w-full pt-40">
                <div
                    className="avyaktbg bg-footer_bg bg-no-repeat bg-center bg-contain"
                    style={{ paddingTop: "18%" }}
                ></div>
            </div>
            <div className="madeByTeam h-[900px] w-full bg-[#EF8713] flex flex-col justify-between pb-10 pl-14">
                <div className="copyright flex flex-col items-end pt-6 pr-6 justify-between">
                    <h3 className="font-montserrat font-bold text-[20px] leading-[20px] text-[#D9D9D9]">
                        copyright @Avaykt 2025{" "}
                    </h3>
                    <h3 className="font-montserrat font-bold text-[20px] leading-[20px] align-middle mt-1">
                        Made by ❤ of Our team
                    </h3>
                </div>

                <div className="footerlogo h-[600px] flex flex-col gap-7 relative">
                    <div
                        className={`${bebasFont.className} text-[200px] leading-[170px]`}>
                        <h1 className="text-white stroke-slate-800 stroke-[1px]">DAMN !</h1>
                        <div className="flex gap-4">
                            <h1
                                className="font-bold"
                                style={{
                                    WebkitTextStroke: "4px #652703",
                                    fontSize: "200px",
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
                                    fontSize: "200px",
                                    fontWeight: "bolder",
                                }}
                            >
                                LOVE
                            </h1>
                        </div>
                        <h1>SCROLLING</h1>
                    </div>

                    <div className="absolute right-[10px] top-[170px] h-[300px] w-[64px] flex flex-col gap-2">
                        <a href="">
                            <IoLogoInstagram className="w-[44px] h-[55px] text-black" />
                        </a>
                        <a href="">
                            <FaLinkedinIn className="w-[44px] h-[55px] text-black" />
                        </a>
                        <a href="">
                            <FaFacebookF className="w-[44px] h-[55px] text-black" />
                        </a>
                        <a href="">
                            <FaYoutube className="w-[44px] h-[55px] text-black" />
                        </a>
                    </div>
                </div>

                <div className="flex gap-4">
                    <img src="./images/gietlogo 1.svg" alt="" />
                    <img src="./images/avyakt-logo-b 1.svg" alt="" />
                    <img src="./images/Mask group.svg" alt="" />
                </div>
            </div >
        </>
    );
}