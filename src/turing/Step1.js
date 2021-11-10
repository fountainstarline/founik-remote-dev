import { useContext, useRef, useState } from 'react';
import Jobs from './components/Jobs';
import OtherJobs from './components/OtherJobs';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './static/logo.png';
import { Hire } from './Main';

const Step1 = () => {
    document.title = 'Hire Developers';

    const [errors, setErrors] = useState([]);
    const {jobs, details, setDetails} = useContext(Hire);
    const workEmail = useRef('');
    const next = useRef(null);

    const ckeckEmpty = (e) => {
        if(e.currentTarget.value.search('@') === -1){
            e.currentTarget.classList.add('border-red-400');
            e.currentTarget.classList.remove('border-gray-400');
        } else {
            e.currentTarget.classList.remove('border-red-400');
            e.currentTarget.classList.add('border-gray-400');
        }
    }

    const checkErrors = () => {
        let err = [...errors];

        if((workEmail.current.value.search('@') === -1) && !err.includes('email')){
            err.push('email');
        } else if((workEmail.current.value.search('@') !== -1) && err.includes('email')){
            err = err.filter(e => e !== 'email');
        }
        
        if(jobs.length === 0 && !err.includes('jobs')){
            err.push('jobs');
        } else if(jobs.length > 0 && err.includes('jobs')){
            err = err.filter(e => e !== 'jobs');
        }

        setErrors(err);
        
        if(err.length === 0){
            let localDetails = JSON.parse(localStorage.getItem('details'));
            localStorage.setItem('details', JSON.stringify({...details, country: localDetails.country, skills: jobs}));
            next.current.click();
        }
    }

    return (
        <>
            <main className="max-w-3xl mx-auto py-12 px-4 font-gordita space-y-8">
                <div className="flex justify-between items-center bg-black rounded-lg p-3">
                    <h1 className="flex items-center space-x-3">
                        <img src={logo} alt="" className="w-6 h-6 filter invert" />
                        <span className="font-bold text-xl font-gordita-bold text-white">Hire Screened Dev</span>
                    </h1>
                    <button className="rounded-full text-sm text-gray-100 px-5 py-2 transform scale-75 lg:scale-100" style={{background: '#555', border: 'none'}}>
                        Step 1/3
                    </button>
                </div>

                <div className="">
                    <h1 className="text-2xl font-semibold">Choose the developer's skill you wish to hire</h1>
                    <p className="text-gray-700 py-4">Choose at least one skill or Select no idea so we could suggest the right skill that fits your business after free consultation</p>
                </div>

                <Jobs />
                
                <OtherJobs errors={errors}/>

                <section className="">
                    <label htmlFor="email" className="block">Work Email Address</label>
                    <div className="grid grid-cols-6">
                        <input 
                            ref={workEmail}
                            className={`
                                block my-3 py-2 px-3 lg:text-lg text-md rounded-md w-full border-2 lg:col-span-4 col-span-6 
                                bg-white ${errors.includes('email') ? 'border-red-400' : 'border-gray-400'}
                            `}
                            type="email"
                            name="email" 
                            value={details.email}
                            onChange={(e)=> setDetails({...details, email: e.target.value})}
                            onBlur={ckeckEmpty}
                            placeholder="Enter Your Email"
                        />
                    </div>
                    {errors.includes('email') && <p className="text-red-400 text-xs">Please enter a vaild email</p>}
                </section>

                <button
                    onClick={checkErrors}
                    className="
                        inline-flex text-sm font-bold py-4 px-12 text-white 
                        bg-black rounded-md justify-center items-center
                        focus:ring-2 ring-offset-2 ring-black
                    ">
                        Continue
                        <FaChevronRight className="text-white ml-4"></FaChevronRight>
                </button>

                <Link ref={next} to="/company-details"
                    className="hidden opacity-0"
                />
            </main>
        </>
    );
}

export default Step1;