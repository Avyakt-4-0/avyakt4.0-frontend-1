import NavBar from '@/components/nav-bar';
import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`
const titleFont = localFont({ src: '../../public/fonts/ARB.ttf' })
const usangelFont = localFont({ src: '../../public/fonts/usangel.ttf' })
const farFromHomeComingFont = localFont({ src: '../../public/fonts/Far-From Homecoming.otf' })
const yellowPeasFont = localFont({ src: '../../public/fonts/Yellow Peas.ttf' })
export default function Home() {
  return (
    <div className='bg-hero bg-repeat-y min-h-screen lg:bg-contain bg-contain'>
      <NavBar />
      {/* intro section */}
      <div className='flex justify-center'>
        <div className='flex flex-col w-fit'>
          <div className='flex justify-center items-center h-full gap-4 lg:gap-12 text-[40px] lg:text-[160px]'>
            <h1 className={`${titleFont.className} `}>AVYAKT</h1> <h1 className={`${usangelFont.className}`}>4.0</h1>
          </div>
          <h2 className={`${usangelFont.className} text-right text-[10px] lg:text-[32px]`}>The most Awaited CSE Department Fest</h2>
        </div>
      </div>

      {/* About event section */}
      <div className='flex flex-col justify-center items-center gap-4 mt-72'>
        <h1 className={`${farFromHomeComingFont.className} text-[96px] leading-[85.38px]`}>About the Event</h1>
        <p className={`${yellowPeasFont.className} text-center max-w-6xl text-[48px] leading-[42.69px]`}>
          Welcome to CSE FEST '25, the annual celebration of innovation, technology, and collaboration hosted by the Department of Computer Science and Engineering.
          This year's fest is set to be bigger and better, bringing together students, tech enthusiasts, and industry leaders to explore groundbreaking ideas and showcase talent. From hackathons and coding challenges to tech talks and interactive workshops, CSE FEST '25 offers something for everyone.
          Whether you're here to compete, learn, or network, this event is your gateway to the world of cutting-edge technology and limitless possibilities. Join us as we innovate, code, and excel together!
        </p>
      </div>
    </div>
  );
}
