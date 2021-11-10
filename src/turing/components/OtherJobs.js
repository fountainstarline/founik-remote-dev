import { useState, useContext } from 'react';
import {FaTimes, FaCheck} from 'react-icons/fa';
import { Hire } from '../Main';
import { skillArray } from '../config.json';


const OtherJobs = ({errors}) => {
    const {handleJob, jobs} = useContext(Hire);
    const [skills, setSkills] = useState(skillArray);

    const inputStyle = {
        border: 'none',
        outline: 'none',
    }

    const handleSearch = (e) => {
        setSkills(skillArray.filter(skill => {
            return skill.search(new RegExp(e.target.value, 'ig')) !== -1
        }));
    }
    
    const popup = (e) => {
        const moreJobs = document.querySelector('#more-jobs');
        const modal = document.querySelector('.modal');
        modal.classList.remove('hidden');
        moreJobs.classList.remove('hidden');
    }

    const popdown = () => {
        // console.log(e);
        // const moreJobs = document.querySelector('#more-jobs');
        // const input = document.querySelector('input[name="otherSkill"]')
        // if(e.target !== input ){
        //     if(!Array.from(moreJobs?.children)?.includes(e.target)){
        //         moreJobs.classList.add('hidden');
        //     }
        // }

        const moreJobs = document.querySelector('#more-jobs');
        const modal = document.querySelector('.modal');
        modal.classList.add('hidden');
        moreJobs.classList.add('hidden');

    }


    return(
        <>
            <div onClick={popdown} className="modal hidden fixed w-full h-full top-0 left-0"></div>

            <section className="relative z-10">

                {/* Popup Box that contains more skills */}
                <div id="more-jobs" className="hidden
                    h-56 bg-white border-2 border-gray-400 rounded-md overflow-hidden overflow-y-scroll
                    absolute bottom-full my-3 w-full
                ">
                    {skills.map((skill, index) => {
                        return(
                            <div key={index} onClick={handleJob} data-job={skill} className={`
                            text-gray-600 py-2 px-3 flex justify-between items-center cursor-pointer
                            hover:bg-gray-200 overscroll-contain ${jobs.includes(skill) ? 'bg-gray-200': null}
                            `}>
                                {skill}
                                {jobs.includes(skill)? <FaCheck className="text-xs text-purple-400"></FaCheck> : null}
                            </div>
                        );

                    })}     
                </div>
                {/* Ends Here */}


                <div className={`
                    space-x-2 space-y-2 block my-3 lg:pt-0 pt-2 pb-2 pl-1 pr-3 lg:text-lg text-md rounded-md w-full border-2 
                     col-span-4 bg-white ${errors.includes('jobs') ? 'border-red-400' : 'border-gray-400'}
                `}>
                    {jobs.map((job, index) => {
                        return(
                            <div key={index} className="rounded-full ml-2 px-3 py-2 bg-gray-300 inline-flex space-x-5">
                                <span className="text-sm font-semibold text-gray-600">{job}</span>
                                <span onClick={handleJob} data-job={job} className="
                                    cursor-pointer rounded-full bg-gray-400 text-white w-5 h-5 
                                    flex justify-center items-center
                                ">
                                    <FaTimes className="text-xs"></FaTimes>
                                </span>
                            </div>
                        );
                    })}

                    <input 
                        className="lg:w-1/2 w-full mt-2 inline-block"
                        type="text"
                        name="otherSkill"
                        onChange={handleSearch}
                        onFocus={popup}
                        data-popup="false"
                        placeholder="Enter other Skill 40+ available"
                        style={inputStyle}
                    />
                </div>
                {errors.includes('jobs') && <p className="text-red-400 text-xs">Please select atleast one skill</p>}

            </section>
        </>
    );
}

export default OtherJobs;