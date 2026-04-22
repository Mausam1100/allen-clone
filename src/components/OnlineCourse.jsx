import blueArrow from '../assets/blue-left-arrow.png'

function OnlineCourse({img, course}) {
  return (
    <>
        <div className="bg-white flex justify-between cursor-pointer border border-[#c6c8cc] shadow-xs py-3 px-4 rounded-2xl">
            <div>
                <img src={img} className='h-22 py-4' alt="img" />
                <h2 className='font-bold text-lg pb-3'>{course}</h2>
            </div>

            <div className='pt-3'>
                <img className='w-6' src={blueArrow} alt="img" />
            </div>
        </div>
    </>
  )
}

export default OnlineCourse