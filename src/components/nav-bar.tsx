import Image from 'next/image'
import React from 'react'

export default function NavBar() {
    return (
        <div className='flex justify-between px-4 pt-4'>
            <div>
                <Image src={'/images/logo.png'} alt='logo' width={50} height={50} />
            </div>
            {/* menu bar */}
            <div >
                <Image src={'/images/menu.svg'} alt='menu' width={40} height={40} />
            </div>
        </div>
    )
}
