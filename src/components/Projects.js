import Supply from '../assets/scm.jpg' 
import spotify from '../assets/spotify.jpg'
import translate from '../assets/translate.jpg'
export default function Projects() {
    return (
        <section id='projects' className="flex flex-col py-5 px-5 justify-center bg-secondary text-white">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className='text-4xl border-b-4 border-[#2b2d77] mb-5 font-bold w-[150px]'>Projects</h1>
                    <p>These are some of my Projects Built using React JS, Bootstrap, Tailwind CSS and Spring Boot.</p>
                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={translate} alt="My Project" />
                        <div className='absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100 flex flex-col justify-center items-center'>
                            <p className='text-center py-5'>English Video into Regional Indian Languages - I'm Currently working on this Project. The Tech Stack is MERN Stack Development.</p>
                            {/* Add any additional content or buttons here */}
                        </div>
                        </div>
                <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={spotify} alt="Spotify Clone ScreenShot" />
                    <div className='absolute left-0 right-0 bottom-[45px] h-full top-0 bg-secondary opacity-0 duration-500 hover:opacity-100 flex flex-col justify-center items-center'>
                        <p className='text-center py-5'>Spotify Clone built using React Native and Spotify Developer's API </p>
                        <div>
                        <a className='btn px-10' href='https://github.com/mohancoder2k/Spotify-Clone-React-Native-API'>View Project</a>
                        </div>
                    </div>
                    </div>
                    <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={Supply} alt="Logistics Website Screenshot" />
                        <div className='absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100 flex flex-col justify-center items-center'>
                            <p className='text-center py-5'>A Logistics Website. Built with React Js, Spring Boot and MySQL.</p>
                            <div>
                            <a className='btn px-10' href='https://github.com/mohancoder2k/logistics_management_springBoot_mern'>View Project</a>
                            </div>
                        </div>
                        </div>

                       

                    
                </div>
            </div>
        </section>
    );
}
