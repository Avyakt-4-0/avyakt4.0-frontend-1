import React from 'react'
import { Jersey_10 } from 'next/font/google'
import Image from 'next/image'

const jerseyFont = Jersey_10({
    weight: '400',
    subsets: ['latin'],
})
const images = [
    { image: "/images/gallery/1.jpg" },
    { image: "/images/gallery/2.jpg" },
    { image: "/images/gallery/3.jpg" },
    { image: "/images/gallery/4.jpg" },
    { image: "/images/gallery/5.jpg" },
]
function ImageCard({ image }: { image: string }) {
    return (
        <div className='bg-white h-40 w-40'>
            <Image src={image || ""} width={500} height={500} alt="photos" />
        </div>
    )
}
export default function Gallery() {
    return (
        <div className=''>
            <h1 className={`${jerseyFont.className} lg:text-[205px] text-[50px] text-[#FA861B] text-center`}>Gallery</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {/* {images.map((image, index) => (
                    <ImageCard key={index} image={image.image} />
                ))} */}
            </div>
        </div>
    )
}
