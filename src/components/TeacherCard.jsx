import teacherArrow from '../assets/teacher-arrow.png'

function TeacherCard({img, name, batch, rank}) {
  return (
    <>
        <div>
            <div className='shadow-md w-48 rounded-2xl overflow-hidden'>
                <div className='bg-[#D5E8FF] px-3'><img src={img} alt="img" /></div>
                <p className='bg-black text-white font-semibold py-0.5 text-center text-sm'>{batch}</p>
                <div className='bg-[#F7F9FF] px-4 py-2'>
                    <h4 className='text-lg font-bold pb-1 pt-2'>{name}</h4>
                    <div>
                        <p className='text-[#757575] text-xs font-semibold'>Online Classroom Course</p>
                        <p className='text-[#494A4A] text-base font-semibold'>{batch}</p>
                    </div>
                    <div className='text-[#025FCA] flex justify-between items-center pb-1'>
                        <h2 className='text-2xl font-bold'>{rank}</h2>
                        <img className='w-6' src={teacherArrow} alt="img" />
                    </div>
                </div>
            </div>      
        </div>
    </>
  )
}

export default TeacherCard