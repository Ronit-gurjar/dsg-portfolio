import React from "react"
import ImageCard from "../components/card/ImageCard"
import team1 from "../../../public/team1.jpeg"
import team2 from "../../../public/team2.jpeg"
import team3 from "../../../public/team3.jpeg"

const Team = () => {
  return (
    <div className="bg-Theme-black w-full h-fit flex flex-col items-center justify-center gap-8 lg:p-8 rounded-lg">
        <div>
            <h1 className="text-4xl text-Theme-cream text-center underline underline-offset-4 font-serif p-4">Team</h1>
            <h1 className="text-2xl"><strong>Meet our vibrant team</strong></h1>
        </div>
        <div className="flex flex-col gap-4 lg:gap-40 lg:flex-row items-center">
        
            <p className="lg:hidden">(click on image to see info)</p>
            <ImageCard imageSrc={team1} name="Kush Upadhyay" title="Advocate" experience={5} contact={8305841391}/>
            <ImageCard imageSrc={team2} name="Lokesh Rajak" title="Advocate" experience={3} contact={9165506790}/>
            <ImageCard imageSrc={team3} name="Istiyak Ansari" title="Advocate" experience={3} contact={8821847419}/>
        </div>
        <div>
            <p className="p-4 text-2xl text-center mt-2">
            a dynamic ensemble of young, passionate advocates each wielding great amount of invaluable experience.
            Committed to innovation and excellence, our team combines youthful energy with seasoned expertise,
            dedicated to championing our clients" causes with unwavering zeal and fresh perspectives.
            </p>
        </div>
    </div>
  )
}

export default Team