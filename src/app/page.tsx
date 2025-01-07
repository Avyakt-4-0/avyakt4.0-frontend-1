import NavBar from '@/components/nav-bar';
import localFont from 'next/font/local'
import Image from 'next/image';
import { Jersey_10 } from 'next/font/google'
import { IBM_Plex_Mono } from 'next/font/google'
import Card from '@/components/card';
import Guests from '@/components/guests';
import Multiverse from '@/components/multiverse';
import Clubs from '@/components/clubs';
// Font files can be colocated inside of `pages`
const titleFont = localFont({ src: '../../public/fonts/ARB.ttf' })
const usangelFont = localFont({ src: '../../public/fonts/usangel.ttf' })
const farFromHomeComingFont = localFont({ src: '../../public/fonts/Far-From Homecoming.otf' })
const yellowPeasFont = localFont({ src: '../../public/fonts/Yellow Peas.ttf' })
const jerseyFont = Jersey_10({
  weight: '400',
  subsets: ['latin'],
})
const ibmFont = IBM_Plex_Mono({
  weight: '600',
  subsets: ['latin'],
})
const aerionFont = localFont({ src: '../../public/fonts/aerion-bold.otf' })
const eventNames = ['technical', 'non-technical', 'cultural', 'others']

export default function Home() {
  return (
    <div className='bg-hero bg-contain'>

      <div className='min-h-screen border-[#F8861E] border-4'>
        <NavBar />
        <div className='bg-loki bg-contain bg-no-repeat h-[800px] min-w-[813px] bg-center'>
          {/* intro section */}
          <div className='flex flex-col justify-center items-center h-full'>
            <div className='flex flex-col w-fit leading-[100.38px] mt-32'>
              <div className='flex justify-center items-center h-full gap-4 lg:gap-24 text-[40px] lg:text-[160px]'>
                <h1 className={`${titleFont.className} `}>AVYAKT</h1> <h1 className={`${usangelFont.className}`}> 4.0</h1>
              </div>
              <h2 className={`${usangelFont.className} text-center text-[10px] lg:text-[32px]`}>The most Awaited CSE Department Fest</h2>
            </div>
            <div className={`flex justify-center gap-2 bg-[#F8861E] w-[327px] h-[36px] ${ibmFont.className} text-center text-[24px] rounded-lg`}>
              <Image src='/images/google.svg' width={30} height={30} alt="google" />
              <p className='text-black'>LOGIN WITH GOOGLE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start">
        <Image
          src="/images/border.svg"
          width={400}
          height={20}
          alt="border"
          className=""
        />
      </div>
      {/* About event section */}
      <div className='flex flex-col justify-center items-center gap-4 my-24 h-[1000px]'>
        <p className={`${ibmFont.className} text-start text-shadow-lg max-w-[90%] text-[48px] leading-[64.32px] h-[847px] intersect:motion-preset-blur-right  motion-duration-2000`}>
          Welcome to CSE FEST '25, the annual celebration of innovation, technology, and collaboration hosted by the Department of Computer Science and Engineering.
          This year's fest is set to be bigger and better, bringing together students, tech enthusiasts, and industry leaders to explore groundbreaking ideas and showcase talent. From hackathons and coding challenges to tech talks and interactive workshops, CSE FEST '25 offers something for everyone.
          Whether you're here to compete, learn, or network, this event is your gateway to the world of cutting-edge technology and limitless possibilities. Join us as we innovate, code, and excel together!
        </p>
      </div>

      {/* you tube video part */}
      <div className='flex justify-center items-center mt-48'>
        <div className='w-[1107px] h-[635px] border-[#F8861E] border-8 rounded-[83px]'>
          {/* here we are adding youtube video */}
        </div>
      </div>
      {/* avyakt multiverse */}
      <Multiverse />

      {/* college clubs */}
      <div>
        <h1 className={`${jerseyFont.className} text-[205px] text-[#FA861B] text-center`}>OUR CLUBS</h1>
        <Clubs />
      </div>
      {/* events section */}
      <div className="bg-event_bg bg-contain h-[1000px] min-w-full flex flex-col items-start gap-4">

        <div className={`${jerseyFont.className} leading-[85.38px] text-[#F8861E] p-12 `}>
          <h1 className="text-[128px]">
            Code, Create,<br /> Celebrate
          </h1>
          <h2 className="text-[96px]">
            The CSE Fest is Here!
          </h2>
        </div>
        {/* events cards */}
        <div className='flex justify-around gap-4 w-full'>
          {
            eventNames.map((eventName, index) => (
              <Card key={index} image={`/images/${eventName}.svg`} title={eventName} />
            ))
          }
        </div>
        <h1 className={`${aerionFont.className} text-[40px] text-[#F8861E] drop-shadow-sm pl-8`}>21 / 02 /2025  to  22 / 02 / 2025 AVYAKT 4.0 </h1>
      </div>

      <div className='bg-hero bg-repeat-y min-h-screen lg:bg-contain bg-contain'>
        <h1 className={`${farFromHomeComingFont.className} text-[64px] text-center`}>Guests and Speaker</h1>
        <Guests />
        <div className=''>
          <Image src='/images/club.png' alt="hero-bg" width={1500} height={400} />

        </div>
      </div>
    </div>
  );
}
