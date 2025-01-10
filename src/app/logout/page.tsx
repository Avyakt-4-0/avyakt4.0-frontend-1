'use client';
import React from 'react';
import localFont from 'next/font/local';
import { handleSignOut } from '@/lib/auth/signOutServerAction';
import { useRouter } from 'next/navigation'; // Ensure using the correct hook for navigation

const usangelFont = localFont({ src: '../../../public/fonts/usangel.ttf' });

export default function LogoutConfirmationPage() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            console.log("test")
            router.back()
            await handleSignOut();
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center p-4">
            <p className={`${usangelFont.className} text-4xl mb-8 text-gray-800`}>
                Are you sure you want to log out?
            </p>
            <button
                onClick={handleLogout}
                className="bg-[#F8861E] text-white px-6 py-3 rounded-lg text-lg hover:bg-[#d76e00] transition-all duration-300"
            >
                Yes, Log Out
            </button>
        </div>
    );
}
