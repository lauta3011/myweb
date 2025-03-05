const SkillItem = (props) => {
    return (
        <div className="skill-item h-60 w-full md:w-2/5 flex justify-center items-center">
            <span className="hover:opacity-80 md:opacity-0 opacity-80 text-2xl text-gray-100 font-black bg-gray-600 transition-all ease-in-out duration-200 absolute w-full h-full flex items-center justify-center">{props.title}</span>
            <img src={`src/assets/images/${props.img}`} alt={props.img} className="h-full"/>
        </div>  
    )
}

export default SkillItem;