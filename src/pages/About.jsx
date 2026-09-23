
import { div } from 'three/tsl';
import { experiences, skills } from '../constant';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';





const About = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">

                Hello buddy , I 'm
                <span>
                    Sonu
                </span>
            </h1>

            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>
                    Software Enginerr based in Nepal , specializing in technical education through hands-on learning and building applications
                </p>
            </div>

            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">My Skills</h3>

                <div className="mt-16 flex flex-wrap gap-12">

                    {skills.map((skill) => (
                        <div className='block-container w-20 h-20'>
                            <div className='btn-back rounded-xl' />
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain' />
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className='py-16'>
                <h3 className='subhead-text'>Works Experience</h3>
                <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                    <p>
                        I've worked with all sorts of companies , leveeling up my skills and teaming up with smart people here the rundown
                    </p>

                </div>
                {/* below the div we cleraete final div  */}\
                <div className='mt-12 flex'>
                    <VerticalTimeline>
                        {experiences.map((experience) => {
                            <VerticalTimelineElement>
                                <div>
                                    <h3>
                                        {experience.title}
                                    </h3>
                                </div>
                            </VerticalTimelineElement>
                        })}
                    </VerticalTimeline>

                </div>

            </div>





        </section>
    )
}

export default About