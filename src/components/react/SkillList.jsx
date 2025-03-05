import { useEffect, useState } from "react";
import './SkillList.css';
import SkillItem from "./SkillItem";

const SkillList = () => {
    const [isVisible, setIsVisible] = useState();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="absolute mt-8 flex flex-col">
            <div className="flex justify-center m-8">
                <span className="text-gray-300 font-extralight w-3/4 md:text-justify">
                    these are the main technologies I work with, I did not list the DBs or serverless services I've used for the projects I've done or worked for.
                </span>
            </div>
            <div className={`justify-center flex w-full flex-wrap slide-in ${isVisible ? 'visible' : ''}`}>
                <SkillItem img={'react-logo.png'} title="React / React Native" />
                <SkillItem img={'node-logo.png'} title="NodeJS" />
                <SkillItem img={'svelte-logo.png'} title="SvelteKit" />
                <SkillItem img={'astro-logo.png'} title="Astro" />
                <SkillItem img={'electron-logo.png'} title="Electron" />
            </div>

            <div className="relative mt-8 mb-14">
                <a href="/about" className="text-gray-300 hover:text-gray-100 duration-800 ease-in-out">learn more about me</a>
            </div>
        </div>
    )
}

export default SkillList;