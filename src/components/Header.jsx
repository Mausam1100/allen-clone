import logo from '../assets/logo.svg'
import { Phone } from 'lucide-react'
import mike from '../assets/mike.png'
import twinkle from '../assets/twinkle.webp'
import rightArrow from '../assets/right_arrow.webp'

function Header() {
  return (
    <div className='sticky top-0 z-50 bg-white'>
    <div className='max-w-312.5 w-[88%] mx-auto'>
        <div className=' py-5 flex justify-between items-center'>
            <img src={logo} alt="allen" />
            <div className='flex gap-x-4'>
                <div className='rounded-full aspect-square h-8 flex justify-center items-center bg-[#0266da]'><Phone size={16} fill='#ffffff' stroke='none' /></div>
                <button className='outline-2 outline-[#0266da] rounded-2xl px-3 py-1 text-xs font-semibold'>Login</button>
            </div>
        </div>

        <div className='pb-5 pt-2'>
          <ul className='flex justify-between text-sm font-medium'>
            <li><a href="#">Classroom Courses</a></li>
            <li><a href="#">Online Courses</a></li>
            <li><a href="#">Test Series</a></li>
            <li><a href="#">Results</a></li>
            <li><a href="#">Study Materials</a></li>
            <li><a href="#">Scholarships</a></li>
            <li><a href="#">ALLEN E-Store</a></li>
            <li><a href="#">More</a></li>
          </ul>
        </div>
    </div>
 
    <div className='bg-[#019370] h-10'>
      <div className='flex items-center h-full justify-center'>
        <img src={mike} className='h-6 w-9' alt="Mike" />
        <div className='flex items-center h-full '>
          <p className='text-[#F8FD05] text-sm font-medium'>ASAT starts 26th APR</p>
          <img src={twinkle} className='h-5 pr-3' alt="img" />
          <p className='text-white text-sm font-semibold'>Win upto 90% scholarship on classroom & online courses</p>
          <img src={rightArrow} alt="img" className='h-7 pl-3' />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header