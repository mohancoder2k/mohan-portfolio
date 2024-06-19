import ResumeImg from '../assets/resume.jpg'

export default function Resume() {
    return (
        <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5 pb-10'> {/* Added pb-10 for increased padding */}
            <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
                <img className='w-[300px]' src={ResumeImg} alt="Resume" />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
                    <div>
                        <p className='pb-5'>You can view my Resume</p>
                        <a className='btn' href='https://drive.google.com/file/d/1falpbf2nk80czEnQpc5wn1Te9fKG7qTv/view?usp=sharing'>Download</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
<img className='w-[300px]' src={ResumeImg} alt="Resume" />