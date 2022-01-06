import {useContext} from 'react';
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaJava,
    FaAndroid,
    FaAngular,
    FaWordpress,
    FaPhp,
    FaLaravel,
    FaSwift,
    FaAws,
    FaQuestionCircle
} from 'react-icons/fa';
import {Hire} from '../Main';

const skills = [
    {
        title: 'React',
        icon() {
            return (<FaReact className="text-3xl text-blue-300"></FaReact>);
        }
    },
    {
        title: 'NodeJs',
        icon() {
            return (<FaNodeJs className="text-3xl text-green-400"></FaNodeJs>);
        }
    },
    {
        title: 'Python',
        icon() {
            return (<FaPython className="text-3xl text-yellow-500"></FaPython>);
        }
    },
    {
        title: 'Java',
        icon() {
            return (<FaJava className="text-3xl text-blue-600"></FaJava>);
        }
    }, {
        title: 'Angular',
        icon() {
            return (<FaAngular className="text-3xl text-red-600"></FaAngular>);
        }
    }, {
        title: 'PHP',
        icon() {
            return (<FaPhp className="text-3xl text-indigo-500"></FaPhp>);
        }
    }, {
        title: 'Android',
        icon() {
            return (<FaAndroid className="text-3xl text-green-500"></FaAndroid>);
        }
    }, {
        title: 'Laravel',
        icon() {
            return (<FaLaravel className="text-3xl text-yellow-700"></FaLaravel>);
        }
    }, {
        title: 'Wordpress',
        icon() {
            return (<FaWordpress className="text-3xl text-black"></FaWordpress>);
        }
    }, {
        title: 'Swift',
        icon() {
            return (<FaSwift className="text-3xl text-black"></FaSwift>);
        }
    }, {
        title: 'AWS',
        icon() {
            return (<FaAws className="text-3xl text-black"></FaAws>);
        }
    },

]

const Jobs = () => {
    const {handleJob, jobs} = useContext(Hire);
    return (<div className="all-jobs grid lg:grid-cols-6 grid-cols-3 lg:gap-5 gap-3">
        <div onClick={handleJob}
            data-job="No Idea"
            className={
                `bg-white cursor-pointer flex flex-col text-center items-center space-y-4 justify-center h-24 p-4 shadow-sm hover:shadow-lg rounded-sm ${
                    jobs.includes('No Idea') ? 'job-active' : null
                } `
        }>
            <FaQuestionCircle className="text-3xl text-gray-500"></FaQuestionCircle>
            <p className="text-sm font-medium">
                No Idea
            </p>
        </div>
        {
        skills.map(({
            title,
            icon
        }, index) => {
            return (<div key={index}
                onClick={handleJob}
                data-job={title}
                className={
                    `
                        job
                        ${
                        jobs.includes(title) ? 'job-active' : null
                    }
                    `
            }> {
                icon()
            }
                <p className="text-sm font-medium"> {title} </p>
            </div>);
        })
    } </div>);
}

export default Jobs;
