import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavbarVideos from './aboutpage-comps/NavBarVideos'

const ExperiencePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <NavbarVideos />

            <section name="Experience" className='relative w-full min-h-screen'>
                <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-24'>
                    <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>Experience</h1>
                    <div className='text-md md:text-lg text-gray-300 max-w-3xl text-justify space-y-4'>
                        <p>During my internship at Pixeltest, I gained hands-on experience working on real-time projects in UI/UX design and frontend development. I was actively involved in designing user-friendly interfaces, improving user flows, and implementing responsive web pages using modern frontend technologies.</p>
                        <p>My role allowed me to collaborate with the team on creating visually appealing and functional designs while ensuring seamless user experiences. This internship helped me strengthen my technical skills, enhance my problem-solving abilities, and understand how design and development come together in building impactful digital products.</p>
                    </div>

                    <div className='mt-8'>
                        <h3 className='text-xl font-semibold text-white mb-4'>Internship Certificate</h3>
                        {
                            /* Use encodeURI to handle spaces in filename and serve from public/ */
                        }
                        <a href={encodeURI('/images/certificates/Screenshot 2025-10-01 214713.png')} target='_blank' rel='noreferrer'>
                            <img src={encodeURI('/images/certificates/Screenshot 2025-10-01 214713.png')} alt='Internship certificate' className='mx-auto rounded-md shadow-md w-80 md:w-[520px] object-contain' />
                        </a>
                        <p className='text-sm text-gray-400 mt-2 text-center'>Click the certificate to view full size.</p>
                    </div>

                    <div className='relative flex justify-center mt-10'>
                        <Link to='/about-me' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end hover:scale-110 duration-300'>
                            <span className=''><i className='bx bx-arrow-back mr-2'></i></span>
                            Back to About
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExperiencePage
