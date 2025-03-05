const Hero = (props) => {
    return (
        <div class="relative">
            <div class="flex flex-col md:flex-row p-6">
                <div class="flex justify-center">
                    <img class="rounded-2xl" src="src/assets/images/catcat.jpg" alt="lautaro rodriguez" width={220} />
                </div>
                
                <div class="flex flex-col justify-evenly p-4">
                    <h2 class=" text-4xl text-gray-200 font-bold">Hello, I'm Lautaro Rodriguez.</h2>

                    <p class="text-gray-300">
                    I have 5+ years of experience in the dev industry, having worked on multiple projects as a solo dev
                    and in a variety of teams with people all around the world. With ease to learn new technologies and start coding.
                    </p>
                </div>
            </div>

            <div className="text-center">
                <span onClick={() => props.handleShowSkills()} className={`hover:text-gray-100 drop-shadow-lg transition-all duration-800 ease-in-out ${props.seeSkills ? 'text-8xl' : 'text-md'} cursor-pointer text-gray-300`}>
                    my skills
                </span>
            </div>
        </div>
    )
}

export default Hero;