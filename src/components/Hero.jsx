import hero_img from '../assets/hero_img.webp'
import liveClass from '../assets/recording.webp'
import studyModules from '../assets/study_modules.png'
import testSeries from '../assets/test_series.png'
import classroom from '../assets/classroom.webp'

function Hero() {
  return (
    <div className='bg-[#edf2fa]'>
        <div className="max-w-262.5 mx-auto w-[88%]">
            <div className='py-20'>
                <img src={hero_img} className='rounded-4xl cursor-pointer' alt="img" />
            </div>

            <div>
                <h3 className='text-[#494A4A] font-bold text-2xl'>Explore Courses</h3>
                <div className='grid grid-cols-4 gap-x-3 py-8'>
                    <div className='bg-white cursor-pointer border border-[#c6c8cc] shadow-xs py-3 px-3 rounded-2xl'>
                        <img src={liveClass} className='h-16 py-2' alt="img" />
                        <h4 className='font-semibold'>Live Courses</h4>
                    </div>
                    <div className='bg-white cursor-pointer border border-[#c6c8cc] shadow-xs py-3 px-3 rounded-2xl'>
                        <img src={classroom} className='h-16' alt="img" />
                        <h4 className='font-semibold'>Classroom</h4>
                    </div>
                    <div className='bg-white cursor-pointer border border-[#c6c8cc] shadow-xs py-3 px-3 rounded-2xl'>
                        <img src={studyModules} className='h-16' alt="img" />
                        <h4 className='font-semibold'>Study Modules</h4>
                    </div>
                    <div className='bg-white cursor-pointer border border-[#c6c8cc] shadow-xs py-3 px-3 rounded-2xl'>
                        <img src={testSeries} className='h-16 py-2' alt="img" />
                        <h4 className='font-semibold'>Test Series</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero