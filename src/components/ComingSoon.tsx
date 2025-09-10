'use client';
import { Arbutus } from 'next/font/google'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const arbutusFont = Arbutus({
    weight: '400',
    subsets: ['latin'],
});

export default function ComingSoon() {
    // Countdown state
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Target = 2 days from now
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 2);

        const interval = setInterval(() => {
            const now = new Date();
            const diff = targetDate.getTime() - now.getTime();

            if (diff <= 0) {
                clearInterval(interval);
                setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
            } else {
                const hours = Math.floor((diff / (1000 * 60 * 60)) % 48); // 48 hrs total
                const minutes = Math.floor((diff / (1000 * 60)) % 60);
                const seconds = Math.floor((diff / 1000) % 60);
                setTimeLeft({ hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full lg:h-[100vh] h-[50vh] overflow-hidden border-[#F8861E] border-4">
            <Image
                src="/images/loki-name.svg"
                width={1000}
                height={1000}
                alt="coming soon"
                className="absolute top-0 left-0 w-full lg:h-[100vh] h-[50vh] z-0"
            />

            <div className="absolute top-0 left-0 w-full lg:h-[100vh] h-[50vh] bg-[#65270393] z-10"></div>

            <Image
                src="/images/loki-footer.svg"
                width={1000}
                height={1000}
                alt="coming soon"
                className="w-full lg:h-[100vh] h-[50vh] relative z-20"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-30 px-4 pt-[30vh]">
                <h1
                    className={`${arbutusFont.className} text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white drop-shadow-lg`}
                >
                    AVYAKT 4.0 Events
                </h1>
                <h2
                    className={`${arbutusFont.className} mt-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white drop-shadow-md`}
                >
                    Coming Soon
                </h2>

                <div className="flex space-x-4 text-white text-lg sm:text-2xl md:text-3xl font-bold">
                    <div className="flex flex-col items-center">
                        <span>{String(timeLeft.hours).padStart(2, '0')}</span>
                        <span className="text-xs sm:text-sm font-normal">Hours</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
                        <span className="text-xs sm:text-sm font-normal">Minutes</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                        <span className="text-xs sm:text-sm font-normal">Seconds</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
