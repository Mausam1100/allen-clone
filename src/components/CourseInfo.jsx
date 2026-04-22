function CourseInfo({title, clas, duration, lang, start, img, teacherName, air, desc, top, icon}) {
  return (
    <>
      <div className="relative">
        <div className="outline-1 outline-[#c6c8cc] overflow-hidden rounded-2xl cursor-pointer">
          <div className="bg-[#F7F9FF] px-4">
            <h2 className="text-lg font-bold pt-6">{title}</h2>
            <div className="grid grid-cols-2 py-5">
              <p className="text-sm font-semibold">
                <span className="text-[#757575]">Class:</span>
                {clas}
              </p>
              <p className="text-sm font-semibold">
                <span className="text-[#757575]">Duration:</span>
                {duration}
              </p>
            </div>
          </div>

          <div className="bg-white px-4 py-5">
            <div className="grid grid-cols-2">
              <div>
                <p className="text-[#757575] text-sm">Language:</p>
                <p className="text-sm font-semibold">{lang}</p>
              </div>
              <div>
                <p className="text-[#757575] text-sm">Started from:</p>
                <p className="text-sm font-semibold">{start}</p>
              </div>
            </div>
            <button className="bg-[#0266da] mt-4 cursor-pointer text-white font-bold text-sm px-17 rounded-3xl py-3">
              Enrol now
            </button>
          </div>
          <div className="border-t border-[#c6c8cc]"></div>

          <div className="bg-white px-4 py-4 flex gap-x-4 items-center">
            <div className="w-12 h-12">
              <img src={img} alt="img" />
            </div>
            <div>
              <div className="flex items-center gap-x-2 pb-1">
                <h4 className="font-semibold text-base">{teacherName}</h4>
                <div className="bg-[#0AA978] text-white text-sm px-3 py-1 rounded-2xl">
                  AIR {air}
                </div>
              </div>
              <p className="text-[#757575] text-xs font-semibold">{desc}</p>
            </div>
          </div>
        </div>
        <div className="bg-[#AD69E8] flex gap-x-2 text-white absolute font-semibold px-4 rounded-2xl py-1 text-sm -top-4 left-6">
          <img src={icon} alt="img" />
          <p>{top}</p>
        </div>
      </div>
    </>
  );
}

export default CourseInfo;
