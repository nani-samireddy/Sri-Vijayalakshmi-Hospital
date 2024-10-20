import Image from 'next/image';
import logo from '../logo.svg';
import Link from 'next/link';
export default function Navbar() {
  return (
    <div className='flex w-full justify-between'>
        <div className='flex items-center justify-center gap-2'>
        <Image src={logo} alt="logo" className="h-14 w-14"/>
        <span className='font-medium text-xl hidden md:block'>Sri Vijaya Lakshmi Hospital</span>
        </div>
        <div className='flex gap-8 items-center justify-center'>
            <Link href="/"><span>Home</span></Link>
            <Link href="/#services"><span>Services</span></Link>
            <Link href="/#doctors"><span>Doctors</span></Link>
            <Link href="/#contact" className='bg-blue-800 px-6 py-2 rounded-full text-white'><span>Contact</span></Link>
        </div>
    </div>
  )
}
