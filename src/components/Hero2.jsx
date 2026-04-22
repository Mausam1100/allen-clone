import hero2 from '../assets/hero2.webp'
import twinkle2 from '../assets/twinkle2.png'
import TeacherCard from './TeacherCard'
import teacher1 from '../assets/teacher-1.png'
import teacher2 from '../assets/teacher-2.png'
import teacher3 from '../assets/teacher-3.png'
import teacher4 from '../assets/teacher-4.png'
import teacher5 from '../assets/teacher-5.png'
import teacher6 from '../assets/teacher-6.png'
import teacher7 from '../assets/teacher-7.png'
import teacher8 from '../assets/teacher-8.png'
import teacher9 from '../assets/teacher-9.png'
import teacher10 from '../assets/teacher-10.png'
import { useState } from 'react'

function Hero2() {
    const [teacherInfo] = useState([
        {img: teacher1, name: 'Tanmay Jagga', batch: "Neet-UG '25", rank: "AIR 74"},
        {img: teacher2, name: 'Aritro Ray', batch: "JEE Adv. '25", rank: "AIR 50"},
        {img: teacher3, name: 'Charuvrat Bains', batch: "IESO 2025", rank: "Silver"},
        {img: teacher4, name: 'Aabhineet Patnaik', batch: "CBSE 10th, '25", rank: "99.4%"},
        {img: teacher5, name: 'Pragya Poonia', batch: "NEET-UG '25", rank: "AIR 1341"},
        {img: teacher6, name: 'Arka Banerjee', batch: "JEE Adv. '25", rank: "AIR 395"},
        {img: teacher7, name: 'Debarghya Bag', batch: "Neet-UG '25", rank: "AIR 247"},
        {img: teacher8, name: 'Chirag Singh', batch: "JEE Adv. '25", rank: "AIR 516"},
        {img: teacher9, name: 'Disha Patil', batch: "CBSE 10th, '25", rank: "99.2%"},
        {img: teacher10, name: 'Aadish Jain', batch: "IJSO 2025", rank: "Top 6"},
    ])
  return (
    <>
        <div className="bg-white">
            <div className='max-w-262.5 mx-auto w-[88%]'>
                <div>
                    <h2 className="text-2xl font-semibold py-8 text-center">What's Trending</h2>
                    <div className='pb-10 cursor-pointer'>
                        <img src={hero2} alt="img" />
                    </div>
                </div>

                <div>
                    <h4 className='text-2xl font-bold py-6 flex'>Meet our stars <img src={twinkle2} className='h-7 relative bottom-2' alt="img" /></h4>

                    <div className='flex items-center gap-x-4'>
                        <button className='outline-1 outline-[#0266da] px-5 rounded-lg py-2 cursor-pointer bg-[#D5E8FF]'>ALL</button>
                        <button className='outline-1 outline-[#c6c8cc] px-5 rounded-lg py-2 cursor-pointer'>NEET</button>
                        <button className='outline-1 outline-[#c6c8cc] px-5 rounded-lg py-2 cursor-pointer'>JEE</button>
                        <button className='outline-1 outline-[#c6c8cc] px-5 rounded-lg py-2 cursor-pointer'>CLASSES 6-10</button>
                    </div>
                </div>
            </div>

            <div className='relative pt-9 pb-16 overflow-hidden w-[95%] mx-auto flex'>
                <div className="absolute left-0 top-0 h-full w-50 z-10 bg-linear-to-r from-white via-white/80 to-transparent pointer-events-none" />

                <div className="absolute right-0 top-0 h-full w-50 z-10 bg-linear-to-l from-white via-white/80 to-transparent pointer-events-none" />

                <div className='flex gap-x-8 pr-8' style={{animation: 'slideX 60s infinite linear'}}>
                    {teacherInfo.map((i) => {
                        return (
                            <TeacherCard img={i.img} name={i.name} batch={i.batch} rank={i.rank}/>
                        )
                    })}
                </div>
                <div aria-hidden className='flex gap-x-8 pr-8' style={{animation: 'slideX 60s infinite linear'}}>
                    {teacherInfo.map((i) => {
                        return (
                            <TeacherCard img={i.img} name={i.name} batch={i.batch} rank={i.rank}/>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero2