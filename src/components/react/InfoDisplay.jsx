// src/components/SlideToggle.jsx
import { useState } from 'react';
import './InfoDisplay.css';
import Hero from './Hero.jsx';

const InfoDisplay = () => {
  const [yesIam, setYesIam] = useState(false);
  
  return (
    <div className='absolute w-full md:w-3/4 h-full items-center flex justify-center'>    

        <div className={`h-full flex flex-col justify-evenly md:justify-center transition duration-700 ease-in-out ${yesIam ? 'blur-2xl' : ''}`}>
            <div className="">
                <h1 className="text-6xl text-gray-200">Are you looking for an experienced full stack dev?</h1>
            </div>

            <div className="text-xl md:text-sm flex justify-center md:justify-end">
                <button onClick={() => setYesIam(!yesIam)} className="bg-gray-900 shadow-2xl cursor-pointer rounded-2xl md:rounded-none pr-2 pl-2 hover:bg-gray-700 p-2 text-slate-300">
                    yes I am
                </button>
            </div>
        </div>

        <div className={`absolute blur-bg transition-all duration-700 ease-in-out ${
            !yesIam ? 'transform translate-x-full opacity-0' : 'transform translate-x-0 z-10 opacity-100'
        }`}>
            <Hero />
        </div>
        
    </div>
  );
};

export default InfoDisplay;