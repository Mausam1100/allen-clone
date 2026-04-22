import imageBg from '../assets/image-background.png'

function ParentCard({img, name, address, rank, batch, review}) {
  return (
    <>
        <div className='flex flex-col w-70 shadow-md'>
            <div>
                <div className='bg-blue-200 rounded-t-2xl'>
                    <p className='text-center font-semibold py-2 text-sm'>{review}</p>
                </div>
            </div>
            
            <div className='bg-contain rounded-2xl' style={{backgroundImage: `url(${imageBg})`}}>
                <div className='px-4 pt-4 h-91.25'>
                    <img src={img} className='rounded-2xl' alt="img" />
                </div>
            </div>

            <div className='bg-white px-4 rounded-b-2xl py-3 pb-4 flex justify-between items-center'>
                <div>
                    <h2 className='font-semibold text'>{name}</h2>
                    <p className='text-[#494a4a] text-xs font-medium'>{address}</p>
                </div>
                <div>
                    <div className='border-5 border-[#0266da] rounded-3xl p-0.5 flex justify-center items-center'>
                        <button className='bg-[#0266da] whitespace-nowrap rounded-2xl text-white text-xs px-3.5 py-1.5 font-bold'>{rank}</button>
                    </div>
                    <p className='text-xs font-bold text-[#494a4a] pt-1 text-center'>{batch}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ParentCard