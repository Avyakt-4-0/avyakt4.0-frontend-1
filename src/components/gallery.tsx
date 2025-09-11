'use client'
import React, { useRef } from 'react'
import { Jersey_10 } from 'next/font/google'
import Image from 'next/image'
import HTMLFlipBook from "react-pageflip"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const jerseyFont = Jersey_10({
    weight: '400',
    subsets: ['latin'],
})

type FlipBookProps = {
    width: number
    height: number
    size: 'stretch' | 'fixed'
    minWidth: number
    maxWidth: number
    minHeight: number
    maxHeight: number
    maxShadowOpacity: number
    showCover: boolean
    className: string
    style: React.CSSProperties
    startPage: number
    drawShadow: boolean
    flippingTime: number
    usePortrait: boolean
    startZIndex: number
    autoSize: boolean
    clickEventForward: boolean
    useMouseEvents: boolean
    swipeDistance: number
    showPageCorners: boolean
    disableFlipByClick: boolean
    mobileScrollSupport: boolean
    children: React.ReactNode
}

type ImageCardProps = {
    image: string
}

function ImageCard({ image }: ImageCardProps) {
    return (
        <div className='bg-white h-40 w-40'>
            <Image src={image || ""} width={500} height={500} alt="photos" />
        </div>
    )
}

type GalleryProps = {}

export default function Gallery(props: GalleryProps) {
    const flipBook = useRef<any>(null);
    const images = [
        { image: "/images/book-cover.svg" },
        { image: "https://res.cloudinary.com/dmqpa2073/image/upload/v1757568452/Group_55_qvlaup.png" },
        { image: "https://res.cloudinary.com/dmqpa2073/image/upload/v1757568453/Group_57_vrg8ke.png" },
        { image: "https://res.cloudinary.com/dmqpa2073/image/upload/v1757568453/Group_58_bl6fo6.png" },
        { image: "https://res.cloudinary.com/dmqpa2073/image/upload/v1757568453/Group_58_bl6fo6.png" },
        { image: "https://res.cloudinary.com/dmqpa2073/image/upload/v1757568454/Group_56_ngrtln.png" },
        { image: "https://res.cloudinary.com/dmqpa2073/image/upload/v1757568455/Group_53_y7k3rx.png" },
        { image: "https://res.cloudinary.com/dmqpa2073/image/upload/v1757568465/Group_61_jimlp4.png" },
        { image: "https://res.cloudinary.com/dmqpa2073/image/upload/v1757568466/Group_64_urtfuh.png" },
        { image: "https://res.cloudinary.com/dmqpa2073/image/upload/v1757568467/Group_59_r7tiry.png" },
        { image: "https://res.cloudinary.com/dmqpa2073/image/upload/v1757568467/Group_62_np06qk.png" },
        { image: "https://res.cloudinary.com/dmqpa2073/image/upload/v1757568467/Group_63_uqgeqv.png" },
        { image: "https://res.cloudinary.com/dmqpa2073/image/upload/v1757568468/Group_60_mx4sbk.png" },
        { image: "/images/book-last.jpg" }

    ]

    const goNextPage = () => {
        if (flipBook.current) {
            flipBook.current.pageFlip().flipNext();
        }
    };

    const goPrevPage = () => {
        if (flipBook.current) {
            flipBook.current.pageFlip().flipPrev();
        }
    };

    return (
        <div className="relative">
            <h1 className={`${jerseyFont.className} lg:text-[205px] text-[50px] text-[#FA861B] text-center mb-8`}>
                Gallery
            </h1>

            <div className="relative w-full flex flex-col items-center py-4 sm:py-8 lg:py-12 px-2 sm:px-4">
                <div className="w-full max-w-7xl flex flex-col items-center">
                    <div className="w-full flex items-center justify-center gap-2 sm:gap-4 px-2">

                        <div className="relative z-10 w-full max-w-1xl">
                            <HTMLFlipBook
                                ref={flipBook}
                                width={250}
                                height={350}
                                size="stretch"
                                minWidth={170}
                                maxWidth={700}
                                minHeight={300}
                                maxHeight={350}
                                maxShadowOpacity={0.5}
                                showCover={true}
                                className="demo-book w-full h-auto"
                                style={{ width: '100%', height: 'auto' }}
                                startPage={0}
                                drawShadow={true}
                                flippingTime={1500}
                                usePortrait={false}
                                startZIndex={0}
                                autoSize={true}
                                clickEventForward={false}
                                useMouseEvents={true}
                                swipeDistance={10}
                                showPageCorners={true}
                                disableFlipByClick={false}
                                mobileScrollSupport={true}
                            >
                                {images.map((image, index) => (
                                    <div key={index} className="demoPage bg-[#F5610D4D] w-full h-full">
                                        <div className="w-full h-full relative">
                                            <Image
                                                src={image.image}
                                                alt={`Gallery photo ${index + 1}`}
                                                fill
                                                className="object-cover p-2 sm:p-4"
                                                sizes="(max-width: 600px) 90vw, (max-width: 1024px) 70vw, 50vw"
                                                priority={index === 0}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </HTMLFlipBook>
                        </div>


                    </div>

                    <div className="mt-2 flex gap-6">
                        <button
                            onClick={goPrevPage}
                            className="text-white bg-[#FA861B] p-2 sm:p-3 rounded-full z-20 hover:bg-opacity-90 transition-all flex-shrink-0"
                            aria-label="Previous page"
                        >
                            <FaChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                        </button>
                        <button
                            onClick={goNextPage}
                            className="text-white bg-[#FA861B] p-2 sm:p-3 rounded-full z-20 hover:bg-opacity-90 transition-all flex-shrink-0"
                            aria-label="Next page"
                        >
                            <FaChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                        </button>
                    </div>
                </div>

                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/images/gallery-bg.svg"
                        alt="Gallery background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
