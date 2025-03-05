// src/components/SlideToggle.jsx
import { useState } from 'react';
import './InfoDisplay.css';
import Hero from './Hero.jsx';
import SkillList from './SkillList.jsx';

const InfoDisplay = () => {
  const [yesIam, setYesIam] = useState(false);
  const [seeSkills, setSeeSkills] = useState(false);
  
  return (
    <>    
        <div className={`absolute md:flex-col transition items-center justify-evenly duration-700 ease-in-out ${yesIam ? 'blur-2xl' : ''}`}>
            <div className="relative">
                <h1 className="text-6xl text-gray-200">Are you looking for an experienced full stack dev?</h1>
            </div>
            <div className="text-2xl relative md:text-sm flex justify-center md:justify-self-end">
                <button onClick={() => setYesIam(!yesIam)} className="bg-gray-900 shadow-2xl cursor-pointer rounded-2xl md:rounded-none pr-2 pl-2 hover:bg-gray-700 p-2 text-slate-300">
                    yes I am
                </button>
            </div>
        </div>

        <div className={`blur-bg absolute transition-all duration-700 ease-in-out ${
            !yesIam ? 'transform relative translate-x-full opacity-0' : 'transform relative translate-x-0 z-10 opacity-100'
        }`}>
            <Hero seeSkills={seeSkills} handleShowSkills={() => setSeeSkills(!seeSkills)} />
            {seeSkills && <SkillList />}
        </div>

    </>
  );
};

export default InfoDisplay;