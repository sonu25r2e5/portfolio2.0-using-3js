import { Link } from 'react-router-dom';
import { projects } from '../constant/index.js';
import { arrow } from '../assets/icons/index.js';
import CTA from '../components/CTA.jsx';

const Project = () => {
    return (
        <section className='max-container'>
            <h1 className="head-text">

                My
                <span className='px-1 blue-gradient_text font-semibold drop-shadow-2xl'>
                    Projects
                </span>
            </h1>

            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>
                    I've embarked on numerous projects throughout the years, but these are the ones I choose to be special ones . Many of them are open-source we can get
                    its on github and fork inside the project. nothing more than that.  Feel to instrutate it thanks you Your collaboration can get value

                </p>


            </div>

            <div className="flex flex-wrap my-20 gap-16">
                {projects.map((project) => (
                    <div className="lg:w-[400px] w-full" key={project.name} >
                        <div className='block-container w-12 h-12'>
                            <div className={`btn-back rounded-xl ${project.theme}`} />
                            <div className='btn-front rounded-xl flex jusitfy-center items-center'>
                                <img src={project.iconUrl} alt="Project Icon"
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>

                        </div>
                        {/* // other project */}
                        <div className='mt-5 flex flex-col'>

                            <h4 className='text-2xl font-poppins font-semibold'>
                                {project.name}
                            </h4>
                            <p className='mt-2 text-slate-500'>
                                {project.description}
                            </p>
                            <div className='mt-5 flex items-center gap-2 font-poppins'>
                                <Link to={project.link} target='_blank'
                                    rel='noopned norefer'
                                    className='font-semibold text-blue-600'
                                >
                                    Live Link
                                </Link>
                                <img src={arrow} alt="src" className='w-4 h-4 object-contain' />

                            </div>
                        </div>

                    </div>
                ))}

            </div>

            <hr className='border-slate-200' />


            <CTA />


        </section>
    )
}

export default Project