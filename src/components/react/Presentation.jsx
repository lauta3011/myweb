// src/components/SlideToggle.jsx
import { useState } from 'react';
import './Presentation.css';

const SlideToggle = (props) => {
  const [isToggled, setIsToggled] = useState(false);
  
  return (
    <div className="overflow-hidden relative max-w-3/4 flex justify-center items-center rounded-2xl">

        <div className={`blur-bg w-full transition-transform duration-500 ease-in-out ${
          !isToggled ? 'transform relative translate-x-full opacity-0' : 'transform relative translate-x-0 z-10 opacity-100'
        }`}>{props.children}</div>

        <div className={`flex-col absolute transition duration-800 ease-in-out w-full ${isToggled ? 'blur-2xl' : ''}`}>
            <div className="">
                <h1 className="text-6xl text-gray-200">Are you looking for an experienced full stack dev?</h1>
            </div>
            <div className="text-2xl mt-2 md:text-sm flex justify-center md:justify-self-end">
                <button onClick={() => setIsToggled(!isToggled)} className="bg-gray-900 shadow-2xl cursor-pointer rounded-2xl md:rounded-none pr-2 pl-2 hover:bg-gray-700 p-2 text-slate-300">
                    yes I am
                </button>
            </div>
        </div>

    </div>
  );
};

export default SlideToggle;