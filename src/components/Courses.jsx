import { useState } from "react"
import courseTeacher1 from '../assets/course-teacher-1.png'
import courseTeacher2 from '../assets/course-teacher-2.png'
import CourseInfo from "./CourseInfo"
import icon1 from '../assets/recording2.svg'
import icon2 from '../assets/recorded.svg'

function Courses() {
    const [courseInfo] = useState([
        {title: "JEE Nurture Online Course: Target 2028", clas: "11", duration: "1 year", lang:"Hinglish, English", start: "15 Dec, 2025", img: courseTeacher1, teacherName: "Chirag Singh", air: "516", desc: "Chose this course | JEE Adv. 2025 | IIT Delhi", top: "Live Course", icon: icon1},
        {title: "JEE Enthusiast Self-Study PRO Course: Target 2027", clas: "12", duration: "1 year", lang: "English", start: "09 Jan, 2026", img: courseTeacher2, teacherName: "Natu Dhruv Amol", air: "293", desc: "Chose Online Test Series | JEE Adv. 2025", top: "Recorded Lectures + Online Test Series", icon: icon2}
    ])
  return (
    <>
        <div className="bg-[#edf2fa]">
            <div className="max-w-262.5 mx-auto w-[88%] pt-11">
                <div className="text-2xl font-bold">Courses chosen by <span className="text-[#025FCA]">our champions</span></div>

                <div className='flex items-center gap-x-4 py-5 pb-10'>
                    <button className='outline-1 outline-[#0266da] px-5 rounded-lg py-2 cursor-pointer bg-[#D5E8FF]'>JEE</button>
                    <button className='outline-1 bg-white outline-[#c6c8cc] px-5 rounded-lg py-2 cursor-pointer'>NEET</button>
                    <button className='outline-1 bg-white outline-[#c6c8cc] px-5 rounded-lg py-2 cursor-pointer'>CLASSES 6-10</button>
                </div>

                <div className="grid grid-cols-2 gap-x-5">
                    {courseInfo.map((p) => {
                        return (
                            <CourseInfo title={p.title} clas={p.class} duration={p.duration} lang={p.lang} start={p.start} img={p.img} teacherName={p.teacherName} air={p.air} desc={p.desc} top={p.top} icon={p.icon} />
                        )
                    })}
                </div>

                <div className="text-center pt-6 pb-10">
                    <button className="text-black cursor-pointer bg-transparent border-2 border-[#0266da] text-sm font-bold rounded-3xl px-5  py-2.5">View all Courses</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Courses