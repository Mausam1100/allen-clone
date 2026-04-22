import rightArrow from "../assets/right-arrow.svg";
import leftArrow from "../assets/left-arrow.svg";
import ParentCard from "./ParentCard";
import { useState } from "react";
import parent1 from "../assets/parent-1.jpg";
import parent2 from "../assets/parent-2.jpg";
import parent3 from "../assets/parent-3.jpg";
import parent4 from "../assets/parent-4.jpg";
import OnlineCourse from "./OnlineCourse";
import magnet from '../assets/magnet.png'
import leaf from '../assets/leaf.png'
import chemical from '../assets/chemical.png'

function ParentsReview() {
  const [onlineCourse] = useState([
    {img: magnet, course: "JEE"},
    {img: leaf, course: "NEET"},
    {img: chemical, course: "Classes 6-10"}
  ])
    
  const [parentInfo] = useState([
    {
      img: parent1,
      name: "Yogita Goyal's Father",
      address: "Kaithal, Haryana",
      rank: "AIR 1697",
      batch: "JEE Adv. 2024",
      review: "The study schedule was perfect",
    },
    {
      img: parent2,
      name: "Simran Goyal's Father",
      address: "Jaipur, Rajasthan",
      rank: "527/720",
      batch: "NEET 2025",
      review: "The quality of test was top-notch!",
    },
    {
      img: parent3,
      name: "Inchara Shasti's Mother",
      address: "Bengaluru, Karnataka",
      rank: "Class 6",
      batch: "2025",
      review: "Her mental ability improved a lot",
    },
    {
      img: parent4,
      name: "Suchi Jain's Father",
      address: "Udham Singh Nagar, Uttharakhand",
      rank: "695/720",
      batch: "NEET 2024",
      review: "My child was WITH me all the time",
    },
  ]);
  return (
    <>
      <div className="bg-white">
        <div className="max-w-262.5 mx-auto w-[88%] pt-12 ">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">
                ALLEN Online se,{" "}
                <span className="text-[#025FCA]">success MUMKIN hai!</span>
              </h1>
              <p className="text-[#494a4a] font-medium text-base">
                What our parents say about us
              </p>
            </div>
            <div className="flex gap-x-4">
              <div className="bg-[#edf2fa] rounded-full flex justify-center items-center p-1">
                <img src={leftArrow} alt="img" />
              </div>
              <div className="bg-[#edf2fa] rounded-full flex justify-center items-center p-1">
                <img src={rightArrow} alt="img" />
              </div>
            </div>
          </div>
        </div>

        <div className="py-7 relative">
          <div className="absolute left-0 top-0 h-full w-60 z-10 bg-linear-to-r from-white via-white/80 to-transparent pointer-events-none" />

          <div className="absolute right-0 top-0 h-full w-60 z-10 bg-linear-to-l from-white via-white/80 to-transparent pointer-events-none" />

          <div className="flex items-center justify-center gap-x-5">
            {parentInfo.map((p) => {
              return (
                <ParentCard img={p.img} name={p.name} address={p.address} rank={p.rank} batch={p.batch} review={p.review} />
              );
            })}
          </div>
        </div>

        <div className="max-w-262.5 mx-auto w-[88%] pt-20">
          <h1 className="text-2xl font-bold pb-4">
            Explore <span className="text-[#025FCA]">Online Courses</span>
          </h1>

          <div className="grid grid-cols-3 gap-x-4 pb-12">
            {onlineCourse.map((p) => {
                return(
                    <OnlineCourse img={p.img} course={p.course} />
                )
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ParentsReview;
