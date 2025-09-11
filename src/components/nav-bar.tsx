'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { IBM_Plex_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import Link from 'next/link';
import { getUserDetails } from '@/lib/auth/getUserDetailsServerAction';
import { checkIsAuthenticated } from '@/lib/auth/checkIsAutheticatedServerAction';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion'; // ✅ added framer-motion

const ibmFont = IBM_Plex_Mono({
    weight: '700',
    subsets: ['latin'],
});
const usangelFont = localFont({ src: '../../public/fonts/usangel.ttf' });

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userDetails, setUserDetails] = useState<{ name: string | null; email: string | null; image: string | null }>();
    const [showProfileModal, setShowProfileModal] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const fetchAuthStatusAndDetails = async () => {
            const authStatus = await checkIsAuthenticated();
            setIsAuthenticated(authStatus);

            if (authStatus) {
                const details = await getUserDetails();
                setUserDetails(details);
            }
        };

        fetchAuthStatusAndDetails();
    }, []);

    const navItems = [
        { name: 'Events', link: '/events' },
        { name: 'Clubs', link: '/clubs' },
        { name: 'Dev Team', link: '/dev-team' },
        { name: 'About Us', link: '/about-us' },
    ];

    const handleLogout = () => {
        try {
            router.push('/logout');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex justify-between items-center lg:p-8 p-4 min-w-full"
        >
            {/* Logo Section */}
            <motion.div whileHover={{ scale: 1.1 }} className="p-2">
                <Image src="/images/logo.png" alt="logo" width={60} height={60} />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-4 items-center">
                <ul className="flex gap-4">
                    {navItems.map((item, index) => (
                        <motion.li
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            className="text-[#F8861E] font-semibold text-2xl border-[#F8861E] border-2 p-1 bg-[#F5610D4D] w-[236px] hover:bg-[#F8861E] hover:text-white transition-all duration-300"
                        >
                            <Link href={item.link} className={`${ibmFont.className} text-center block`}>
                                {item.name}
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                {/* Profile Section */}
                {isAuthenticated && userDetails && (
                    <div
                        className="flex items-center gap-4 ml-4 cursor-pointer relative"
                        onClick={() => setShowProfileModal(!showProfileModal)}
                    >
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <Image
                                src={userDetails.image || '/images/default-profile.png'}
                                alt="Profile"
                                width={70}
                                height={70}
                                className="rounded-full border-2 border-[#F8861E]"
                            />
                        </motion.div>

                        {/* Profile Modal */}
                        <AnimatePresence>
                            {showProfileModal && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute top-full mt-2 right-0 backdrop-blur-sm p-4 rounded-lg shadow-lg w-64 z-50"
                                >
                                    <div className="flex flex-col items-center">
                                        <Image
                                            src={userDetails.image || '/images/default-profile.png'}
                                            alt="Profile"
                                            width={80}
                                            height={80}
                                            className="rounded-full border border-[#F8861E] mb-4"
                                        />
                                        <p className="font-bold text-lg">{userDetails.name}</p>
                                        <p className="text-sm text-gray-600">{userDetails.email}</p>
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            onClick={handleLogout}
                                            className="w-full bg-[#F8861E] text-white py-2 px-4 rounded-lg hover:bg-[#d76e00] transition-all"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
                {!isMenuOpen ? (
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Open Menu"
                    >
                        <Image src="/images/menu.svg" alt="menu" width={40} height={40} />
                    </motion.button>
                ) : (
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close Menu"
                        className={`${usangelFont.className} text-5xl pb-4 text-white`}
                    >
                        X
                    </motion.button>
                )}
            </div>

            {/* Mobile Menu */}
            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute rounded-lg p-4 lg:hidden backdrop-blur-sm w-full shadow-lg top-20 right-0 z-50 flex flex-col"
                    >
                        {/* Parent UL with stagger animation */}
                        <motion.ul
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.15 }, // 🔥 stagger effect
                                },
                            }}
                            className="flex flex-col gap-4"
                        >
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, x: -50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="text-[#F8861E] font-semibold text-2xl border-[#F8861E] border-2 p-1 bg-[#F5610D4D] hover:bg-[#F8861E] hover:text-white transition-all duration-300 w-32"
                                >
                                    <Link
                                        href={item.link}
                                        className={`${ibmFont.className} text-center block`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}

                            {/* Profile Section */}
                            {isAuthenticated && (
                                <motion.li
                                    variants={{
                                        hidden: { opacity: 0, x: -50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="flex items-center gap-4 cursor-pointer"
                                    onClick={() => setShowProfileModal(!showProfileModal)}
                                >
                                    <Image
                                        src={userDetails?.image || '/images/default-profile.png'}
                                        alt="Profile"
                                        width={40}
                                        height={40}
                                        className="rounded-full border-4 border-[#F8861E]"
                                    />
                                    <span className="text-[#F8861E] font-semibold text-lg">{userDetails?.name}</span>
                                </motion.li>
                            )}
                        </motion.ul>

                        {/* Mobile Profile Modal */}
                        <AnimatePresence>
                            {showProfileModal && isAuthenticated && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="backdrop-blur-lg p-4 rounded-lg shadow-lg mt-4"
                                >
                                    <div className="flex flex-col items-center">
                                        <Image
                                            src={userDetails?.image || '/images/default-profile.png'}
                                            alt="Profile"
                                            width={80}
                                            height={80}
                                            className="rounded-full border border-[#F8861E] mb-4"
                                        />
                                        <p className="font-bold text-lg">{userDetails?.name}</p>
                                        <p className="text-sm">{userDetails?.email}</p>
                                    </div>
                                    <div className="mt-4">
                                        <button
                                            onClick={handleLogout}
                                            className="w-full bg-[#F8861E] text-white py-2 px-4 rounded-lg hover:bg-[#d76e00] transition-all"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.nav>
    );
}
