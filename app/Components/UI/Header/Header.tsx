'use client'
//Libraries
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//Components
import FlyOutLink from '../../Animation/FlyOutLink/FlyOutLink'
import { FaCaretDown } from "react-icons/fa";


//Assets
import logoBooking from '@/assets/logo/logo-light.svg'
import FlyContent from '../../Animation/FlyOutLink/ContentFlyOutLink/FlyContent'
const Header = () => {
  return (
    <header className='flex flex-row items-center justify-center space-x-16'>
      <Link href='/'>
        <Image src={logoBooking} alt='logo' width={170} height={170} style={{color: 'black'}}/>
      </Link>

      <nav className='flex flex-row items-center justify-center space-x-4'>
        <FlyOutLink IconMenu={<FaCaretDown />} key={'booking'} FlyoutContent={FlyContent}>
          <span className='text-lg subpixel-antialiased '>Booking</span>
        </FlyOutLink>

      </nav>
    </header>
  )
}

export default Header