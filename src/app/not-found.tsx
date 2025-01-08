import Image from 'next/image'
import Link from 'next/link'
import localFont from 'next/font/local'
const usangelFont = localFont({ src: '../../public/fonts/usangel.ttf' })

export default function NotFound() {
    return (
        <div className='bg-hero bg-cover w-full min-h-screen bg-no-repeat flex flex-col justify-center content-center gap-1 p-24'>
            <div className={`${usangelFont.className} flex justify-center items-center min-h-screen  text-[500px] h-[20px] text-[#F8861E]`}>
                <h1>4</h1>
                <Image src="/images/notfound.svg" width={500} height={10} alt="404" />
                <h1>4</h1>
            </div>
            <h2 className={`${usangelFont.className} text-center text-[100px] `}>Page Not Found</h2>
            <Link href="/" >
                <div className={`${usangelFont.className} text-center bg-[#FA861B] w-[193px]`}>
                    Go Home
                </div>
            </Link>
        </div>
    )
}