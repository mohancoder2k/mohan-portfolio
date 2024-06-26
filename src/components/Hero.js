import HeroImg from '../assets/hero1.png'
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className='text-white text-6xl font-hero-font'>
                    Hi, <br /> I'm Mohan
                    <p className='text-2xl '>Full Stack Web/App Developer | Spring Boot & MERN Stack Developer </p>
                </h1>
                <div className='flex py-10'>
                    <a href="https://twitter.com" className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
                    <a href="https://facebook.com" className='pr-5 hover:text-white'><AiOutlineFacebook size={40} /></a>
                    <a href="https://www.linkedin.com/in/mohan-sarady-164321251/" className='pr-5 hover:text-white'><AiOutlineLinkedin size={40} /></a>
                </div>
            </div>
            <img className='md:w-1/3 px-5' src={HeroImg} alt="Illustration representing Mohan" />
        </section>
    );
}
