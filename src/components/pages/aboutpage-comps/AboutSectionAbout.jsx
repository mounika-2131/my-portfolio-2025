import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import profileImg from '../../portfolio.img.jpg';
import ProfileImage from '../../ProfileImage';

const AboutSectionAbout = () => {
    return (
        <section name="About" className='relative w-full h-screen'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-24 lg:py-0 lg:flex-row lg:gap-8'>
                
                {/* Image column: occupies its own column on large screens */}
                <div className='flex mt-8 md:mt-0 lg:flex-1 lg:items-center'>
                    <ProfileImage alt="Portrait of Mounika Mandangi" />
                </div>

                {/* Text column: constrained width so image and text balance visually */}
                <div className='flex flex-col justify-center items-center h-[85%] md:h-full lg:items-start lg:flex-1'>
                    
                    <h1 className='text-4xl md:text-5xl font-bold text-white mb-2 md:mb-4'>Who I am?</h1>

            
                    <p className='text-md md:text-lg text-gray-300 py-4 max-w-xl text-justify'>Hi, I'm Mounika Mandangi, a final-year Computer Science and Design student at Sagi Ramakrishnam Raju Engineering College (SRKR), Bhimavaram. I'm a passionate learner with a strong interest in both full stack development and UI/UX design.</p>
                    <p className='text-md md:text-lg text-gray-300 max-w-xl text-justify'>During my academic journey, I discovered that I'm not only fascinated by the logic behind programming but also by the creativity involved in designing clean, user-friendly interfaces. This blend of technical and visual thinking has led me to explore the world of web development—where I can combine both design and code to build engaging digital experiences.</p>
                    
                </div>
            </div>
        </section>
    );
}

export default AboutSectionAbout
