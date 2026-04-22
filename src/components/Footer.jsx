import youtube from '../assets/youtube.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import linkedln from '../assets/linkedln.svg'
import iso from '../assets/iso.webp'

function Footer() {
  return (
    <>
        <div className="bg-[#edf2fa]">
            <div className="max-w-262.5 mx-auto w-[88%] pt-12 ">
                <div className='pb-9'>
                    <div className="text-sm text=[#1E1E22] grid grid-cols-6 gap-x-12">
                        <div className="flex flex-col gap-y-4">
                            <h4 className="font-semibold text-xs">About</h4>
                            <p>About us</p>
                            <p>Blog</p>
                            <p>News</p>
                            <p>MyExam EduBlogs</p>
                            <p>Privacy policy</p>
                            <p>Public notice</p>
                            <p>Careers</p>
                            <p>Dhoni Inspires NEET Aspirants</p>
                            <p>Dhoni Inspires JEE Aspirants</p>
                        </div>

                        <div className="flex flex-col gap-y-4">
                            <h4 className="font-semibold text-xs">Help & Support</h4>
                            <p>Refund policy</p>
                            <p>Transfer policy</p>
                            <p>Terms & Conditions</p>
                            <p>Contact us</p>
                        </div>

                        <div className="flex flex-col gap-y-4">
                            <h4 className="font-semibold text-xs">Popular goals</h4>
                            <p>NEET Coaching</p>
                            <p>JEE Coaching</p>
                            <p>6th to 10th</p>
                        </div>

                        <div className="flex flex-col gap-y-4">
                            <h4 className="font-semibold text-xs">Courses</h4>
                            <p>Classroom Courses</p>
                            <p>Online Courses</p>
                            <p>Distance Learning</p>
                            <p>Online Test Series</p>
                            <p>International Olympiads Online Course</p>
                            <p>NEET Test Series</p>
                            <p>JEE Test Series</p>
                            <p>JEE Main Test Series</p>
                        </div>

                        <div className="flex flex-col gap-y-4">
                            <h4 className="font-semibold text-xs">Centers</h4>
                            <p>Kota</p>
                            <p>Bangalore</p>
                            <p>Indore</p>
                            <p>Delhi</p>
                            <p>More centres</p>
                        </div>

                        <div className="flex flex-col gap-y-4">
                            <h4 className="font-semibold text-xs">Exam information</h4>
                            <p>JEE Advanced</p>
                            <p>NEET UG</p>
                            <p>CBSE</p>
                            <p>NIOS</p>
                            <p>NCERT Solutions</p>
                            <p>Olympiad</p>
                            <p>NEET Previous Year Papers</p>
                            <p>NEET Sample Papers</p>
                            <p>NEET Mock test</p>
                            <p>NEET Answer Key 2026</p>
                            <p>JEE Main 2026 Percentile Predictor</p>
                            <p>JEE Main 2026 April Solutions</p>
                            <p>JEE Rank Predictor 2026</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#dcdcdc] flex justify-between items-center pt-12 pb-30">
                    <div>
                        <div className='flex items-center gap-x-3'>
                            <img src={youtube} alt="img" />
                            <img src={instagram} alt="img" />
                            <img src={facebook} alt="img" />
                            <img src={twitter} alt="img" />
                            <img src={linkedln} alt="img" />
                        </div>
                        <p className='text-sm text-[#494a4a] pt-3'>ALLEN Career Institute Pvt. Ltd. © All Rights Reserved.</p>
                    </div>

                    <div>
                        <img src={iso} className='w-16' alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer