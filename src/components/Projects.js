import Supply from '../assets/scm.jpg'
import Stop from '../assets/watch.jpg'
import blog from '../assets/website-blog.jpg'
export default function Projects(){
    return <section id='projects' className="  flex flex-col py-5 px-5 justify-center bg-primary text-white">
        <div className="w-full ">
            <div className="flex flex-col px-10 py-5">
            <h1 className='text-4xl  border-b-4 border-[#2b2d77] mb-5 font-bold w-[150px]'>Projects</h1>
            <p> These are some of my Projects Built using React JS, Bootstrap, Tailwind CSS and Spring Boot.</p>
          </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                <div className='relative '>
                     <img className='h-[200px] w-[500px]' src={Supply} alt="" />
                     <div className='absolute left-0 right-0 bottom-[45px] h-full  top-0 bg-secondary opacity-0 duration-500 hover:opacity-100'>
                        <p className='text-center py-5'> A Logistics Website. Built with React Js, Spring Boot and MySQL.</p>
                        <div>
                        <a className='btn px-10 justify-center' href='https://mohanscm.netlify.app/'>View Project</a>
                        </div>
                     </div>
                </div>
                <div className='relative'>
                     <img className='h-[200px] w-[500px]' src={Stop} alt="" />
                     <div className='project-desc'>
                        <p className='text-center py-5'>A Stopwatch Website. Built with React JS.</p>
                        <a className='btn' href='https://stopmohan.netlify.app/'>View Project</a>
                     </div>

                </div>
                <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={blog} alt="" />
                    <div className='project-desc'>
                        <p className='text-center py-5'>Basic Blog Website . Built with React JS </p>
                        <a className='btn' href='#'>View Project</a>
                    </div>

                </div>
               
                
            </div>
        </div>

    </section>
}