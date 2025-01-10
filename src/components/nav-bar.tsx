'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { IBM_Plex_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import Link from 'next/link';
import { getUserDetails } from '@/lib/auth/getUserDetailsServerAction'; // Assuming this fetches user details
import { checkIsAuthenticated } from '@/lib/auth/checkIsAutheticatedServerAction';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'
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
    const router = useRouter()
    // Fetch authentication status and user details
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
        { name: 'Dev Team', link: '/dev-team' },
        { name: 'About Us', link: '/about-us' },
    ];

    const handleLogout = () => {
        try {
            console.log("test")
            router.push('/logout')
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <nav className="flex justify-between items-center lg:p-8 p-4 min-w-full">
            {/* Logo Section */}
            <div className="p-2">
                <Image src="/images/logo.png" alt="logo" width={60} height={60} />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-4 items-center">
                <ul className="flex gap-4">
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            className="text-[#F8861E] font-semibold text-2xl border-[#F8861E] border-2 p-1 bg-[#F5610D4D] w-[236px] hover:bg-[#F8861E] hover:text-white transition-all duration-300"
                        >
                            <Link href={item.link} className={`${ibmFont.className} text-center block`}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Profile Section */}
                {isAuthenticated && userDetails && (
                    <div
                        className="flex items-center gap-4 ml-4 cursor-pointer relative"
                        onClick={() => setShowProfileModal(!showProfileModal)}
                    >
                        <Image
                            src={userDetails.image || '/images/default-profile.png'}
                            alt="Profile"
                            width={70}
                            height={70}
                            className="rounded-full border-2 border-[#F8861E]"
                        />
                        {showProfileModal && (
                            <div className="absolute top-full mt-2 right-0 backdrop-blur-sm p-4 rounded-lg shadow-lg w-64 z-50">
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
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
                {!isMenuOpen ? (
                    <button onClick={() => setIsMenuOpen(true)} aria-label="Open Menu">
                        <Image src="/images/menu.svg" alt="menu" width={40} height={40} />
                    </button>
                ) : (
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close Menu"
                        className={`${usangelFont.className} text-5xl pb-4 text-white`}
                    >
                        X
                    </button>
                )}
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute rounded-lg p-4 lg:hidden backdrop-blur-sm w-full shadow-lg top-20 right-0 z-50 flex flex-col">
                    <ul className="flex flex-col gap-4">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className="text-[#F8861E] font-semibold text-2xl border-[#F8861E] border-2 p-1 bg-[#F5610D4D] hover:bg-[#F8861E] hover:text-white transition-all duration-300 w-32"
                            >
                                <Link
                                    href={item.link}
                                    className={`${ibmFont.className} text-center block`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}

                        {/* Profile Section */}
                        {isAuthenticated && (
                            <li
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
                            </li>
                        )}

                        {/* Profile Modal in Mobile */}
                        {showProfileModal && isAuthenticated && (
                            <div className="backdrop-blur-lg p-4 rounded-lg shadow-lg mt-4">
                                <div className="flex flex-col items-center">
                                    <Image
                                        src={userDetails?.image || '/images/default-profile.png'}
                                        alt="Profile"
                                        width={80}
                                        height={80}
                                        className="rounded-full border border-[#F8861E] mb-4"
                                    />
                                    <p className="font-bold text-lg">{userDetails?.name}</p>
                                    <p className="text-sm ">{userDetails?.email}</p>
                                </div>
                                <div className="mt-4">
                                    <button
                                        onClick={handleLogout}
                                        className="w-full bg-[#F8861E] text-white py-2 px-4 rounded-lg hover:bg-[#d76e00] transition-all"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
}
