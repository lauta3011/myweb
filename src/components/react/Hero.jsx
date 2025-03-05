import { useState } from "react";
import SkillList from "./SkillList";

const Hero = () => {
    const [seeSkills, setSeeSkills] = useState(false);
    return (
        <div class="relative ">
            <div class={`flex flex-col transition-all duration-500 ease-in-out md:flex-row p-6 ${seeSkills ? 'md:blur-2xl' : ''}`}>
                <div class="flex justify-center">
                    <img class="rounded-2xl" src="src/assets/images/catcat.jpg" alt="lautaro rodriguez" width={220} />
                </div>
                
                <div class="flex flex-col justify-evenly p-4">
                    <h2 class=" text-4xl text-gray-200 font-bold">Hello, I'm Lautaro Rodriguez.</h2>

                    <p class="text-gray-300 font-extralight">
                    I have 5+ years of experience in the dev industry, having worked on multiple projects as a solo dev
                    and in a variety of teams with people all around the world. With ease to learn new technologies and start coding.
                    </p>
                </div>
            </div>

            <div className={`${seeSkills ? 'md:-translate-y-100 ' : 'relative'} h-full transition-transform duration-700 ease-in-out w-full text-center`} >
                <span onClick={() => setSeeSkills(!seeSkills)} className={`hover:text-gray-100 drop-shadow-lg ${seeSkills ? 'text-7xl' : 'text-md'} duration-800 ease-in-out transition-all cursor-pointer text-gray-300`}>
                    my skills
                </span>
                {seeSkills && <SkillList />}
            </div>
        </div>
    )
}

export default Hero;