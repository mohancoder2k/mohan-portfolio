
import AboutImg from '../assets/about.png'
export default function About()
{
    return <section className='flex flex-col md:flex-row bg-primary px-5' id='about'>
    <div className='py-5 md:w-1/2'>
        <img src={AboutImg} alt='About Me '/>
    </div>
    <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
            <p className=' pb-5'>Hi, My name is Mohan, I'm a Full Stack Developer, I built beautiful websites using react js and tailwind css.</p>
            <p className='pb-5' >👉Aspiring software engineer and certified full stack developer with hands-on training on projects handling frontend, backend, and databases.</p>

<p className='pb-5'>👉Expertise in frontend technology REACT JS, integrating it with backend SPRING BOOT and databases like MySQL and MongoDB. </p>

<p className='pb-5'>👉Also experienced with Node JS and React Native mobile app development.</p>
           

            </div>
           
        </div>
    </section>
}