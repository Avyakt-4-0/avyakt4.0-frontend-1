import Image from 'next/image';
import Link from 'next/link';
import localFont from 'next/font/local';

const usangelFont = localFont({ src: '../../public/fonts/usangel.ttf' });

export default function NotFound() {
    return (
        <div className="w-full min-h-screen bg-no-repeat flex flex-col items-center justify-center px-4 py-8 sm:py-16 relative overflow-hidden">
            {/* Main 404 Section */}
            <div className={`flex flex-col items-center ${usangelFont.className} max-w-full`}>
                <div className="flex justify-center items-center text-[120px] sm:text-[220px] md:text-[300px] lg:text-[380px] xl:text-[450px] 2xl:text-[500px] text-[#F8861E] leading-none">
                    <h1>4</h1>
                    <div className="relative w-[40vw] h-[40vw] sm:w-[30vw] sm:h-[30vw] md:w-[25vw] md:h-[25vw] lg:w-[35vw] lg:h-[35vw] xl:w-[30vw] xl:h-[30vw]">
                        <Image
                            src="/images/notfound.svg"
                            alt="404 Icon"
                            width={500}
                            height={500}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <h1>4</h1>
                </div>
                {/* Gradient text */}
                <h2 className="text-center text-[20px] sm:text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px] font-bold bg-gradient-to-b from-[#FA861B] to-[#FFAE00] bg-clip-text text-transparent mt-2">
                    Not Found
                </h2>
            </div>

            {/* Back to Home Button */}
            <Link href="/">
                <div
                    className={`flex items-center justify-center ${usangelFont.className} text-white text-[18px] sm:text-[24px] font-normal leading-[30px] text-center bg-[#FA861B] border-2 border-[#FFAE00] hover:shadow-[5px_5px_0px_0px_#FFAE00] w-[140px] sm:w-[180px] h-[50px] sm:h-[60px]`}
                >
                    Go Home
                </div>
            </Link>
        </div>
    );
}