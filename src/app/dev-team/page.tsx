"use client";
import NavBar from "@/components/nav-bar";
import React from "react";
import { Jersey_10, IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const jerseyFont = Jersey_10({
    weight: "400",
    subsets: ["latin"],
});
const ibmFont = IBM_Plex_Mono({
    weight: "600",
    subsets: ["latin"],
});
type DevTeamMember = {
    name: string;
    img: string;
    role: string;
    github: string;
    linkedin: string;
};

type DevSection = {
    title: string;
    subtitle: string;
    members: DevTeamMember[];
};

const devSections: DevSection[] = [
    {
        title: "UI DEVELOPMENT",
        subtitle: "Crafting smooth user experiences",
        members: [
            {
                name: "RAMAKRUSHNA",
                img: "/images/dev-team/ramakrushna.svg",
                role: "UI/UX Designer",
                github: "https://github.com/RamakrushnaBiswal",
                linkedin: "",
            },
            {
                name: "VISHNU",
                img: "/images/dev-team/vishnu.png",
                role: "Visionary Designer",
                github: "https://github.com/vishnuprasad2004",
                linkedin: "",
            },
        ],
    },
    {
        title: "Frontend Development",
        subtitle: "Building the user interface",
        members: [
            {
                name: "ABHIJIT",
                img: "/images/dev-team/abhijit.png",
                role: "Frontend Developer",
                github: "https://github.com/avijit969",
                linkedin: "https://www.linkedin.com/in/abhijit-pradhan-948132259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
        ],
    },
    {
        title: "BACKEND DEVELOPMENT",
        subtitle: "Powering the system behind the scenes",
        members: [
            {
                name: "AYUSHMAN",
                img: "/images/dev-team/ayushman.png",
                role: "Backend Developer",
                github: "https://github.com/AyushmanTripathy",
                linkedin: "",
            },
        ],
    },
    {
        title: "ANDROID DEVELOPMENT",
        subtitle: "Building the user interface",
        members: [
            {
                name: "AJIT",
                img: "/images/dev-team/ajit.svg",
                role: "Android Developer",
                github: "",
                linkedin: "",
            },
            {
                name: "DEBASHIS",
                img: "/images/dev-team/debasish.svg",
                role: "Android Developer",
                github: "https://github.com/debasish9876",
                linkedin: "",
            },
            {
                name: "OM SUNDEEP",
                img: "/images/dev-team/om.svg",
                role: "Android Developer",
                github: "https://github.com/Sundeep-Sahoo",
                linkedin: "https://www.linkedin.com/in/om-sundeep-sahoo-ba0376270?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwfpgxCcTTYm%2B8qPWawcCaw%3D%3D",
            },

        ]
    }
];

function DevTeam() {
    return (
        <div className="min-h-screen text-white">
            <NavBar />
            <main className="px-4 py-10 space-y-16">
                {devSections.map((section, sIndex) => (
                    <section key={sIndex} className="space-y-8">
                        {/* Section Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h1
                                className={`${jerseyFont.className} text-3xl lg:text-5xl text-[#D1550C]`}
                            >
                                {section.title}
                            </h1>
                            <p className="text-[#FFAE00] mt-2">{section.subtitle}</p>
                        </motion.div>

                        {/* Members */}
                        <div className="flex flex-wrap justify-center gap-8">
                            {section.members.map((member, index) => (
                                <motion.div
                                    key={index}
                                    className="shadow-lg hover:shadow-2xl bg-black border-4 border-[#FFAE00] rounded-2xl overflow-hidden w-[320px] sm:w-[360px] lg:w-[380px] transition-transform hover:scale-105"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="relative w-full h-[350px]">
                                        <Image
                                            src={member.img}
                                            alt={member.name}
                                            fill
                                            className="object-cover rounded-t-2xl"
                                        />
                                    </div>

                                    <div className="p-4 text-center">
                                        <h2
                                            className={`${jerseyFont.className} lg:text-3xl text-xl text-[#D1550C]`}
                                        >
                                            {member.name}
                                        </h2>
                                        <p className={`${ibmFont.className} text-sm  text-[#D1550C]`}>
                                            {member.role.toUpperCase()}
                                        </p>
                                        <div className="flex justify-center gap-4 mt-3">
                                            {member.github && (
                                                <a
                                                    href={member.github}
                                                    target="_blank"
                                                >
                                                    <Github
                                                        className="w-6 h-6"
                                                    />
                                                </a>
                                            )}
                                            {member.linkedin && (
                                                <a
                                                    href={member.linkedin}
                                                    target="_blank"
                                                >
                                                    <Linkedin
                                                        className="w-6 h-6"
                                                    />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
}

export default DevTeam;
