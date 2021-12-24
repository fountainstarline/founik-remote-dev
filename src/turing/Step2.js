import { useContext, useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './static/logo.png';
import { Hire } from './Main';
import Toastify from 'toastify-js';
import intlTelInput from 'intl-tel-input';
import { time, staffs } from './config.json';
import './static/toastify.min.css';
import 'intl-tel-input/build/css/intlTelInput.css';


const Step2 = () => {
    document.title = 'About Your Company';
    const {
        error,
        setError,
        loading,
        jobs,
        go,
        setGo,
        details,
        setDetails,
        sendDetails
    } = useContext(Hire);

    const [errors, setErrors] = useState([]);
    const [initTel, setInitTel] = useState(false);
    const clicker = useRef('clicker');
    const phoneRef = useRef(null);

    const handleEmpty = (e) => {
        if(!e.currentTarget.value){
            e.currentTarget.classList.add('border-red-400');
            e.currentTarget.classList.remove('border-gray-400');
        } else {
            e.currentTarget.classList.remove('border-red-400');
            e.currentTarget.classList.add('border-gray-400');
        }
    }

    const checkErrors = () => {
        let err = [...errors];

        for(let prop in details){
            if(prop === "company") continue;

            if(!details[prop] && !err.includes(prop)){
                err.push(prop);
            } else if(details[prop] && err.includes(prop)){
                err = err.filter(e => e !== prop);
            }
        }
        setErrors(err);

        if(err.length === 0) {
            var val = document.querySelector('.iti__selected-dial-code').innerText;
            let country = window.intlTelInputGlobals.getInstance(phoneRef.current).getSelectedCountryData().iso2;
            localStorage.setItem('details', JSON.stringify({...details, country, skills: jobs}));
            sendDetails({ phone: val + details.phone.replace(/^0/, '') });
        }
    }
    
    const onlyNumbers = (e) => {
        let val = e.currentTarget.value.replace(/[a-z]/ig, '');
        setDetails({...details, phone: val});
    }

    useEffect(()=>{

        !initTel && intlTelInput(phoneRef.current, {
            initialCountry: "us",
            autoPlaceholder: 'aggressive',
            separateDialCode: true,
            utilsScript: '/utils.js',
        });
        setInitTel(true);

        phoneRef.current.addEventListener('countrychange', () => {
            let iti = window.intlTelInputGlobals.getInstance(phoneRef.current);
            localStorage.setItem('details', JSON.stringify({...details, skills: jobs, country: iti.getSelectedCountryData().iso2}))
        });

        let iti = window.intlTelInputGlobals.getInstance(phoneRef.current);
        iti?.setCountry(JSON.parse(localStorage.getItem('details')).country || 'us');

        go && clicker.current.click();

        error && (function(){
            Toastify({
                text: error,
                duration: 3000,
                backgroundColor: "linear-gradient(to right, #eb4778, #e41452)",
                gravity: "top",
                position: "center",
                stopOnFocus: true,
                close: true
            }).showToast();
            setError(null);
        })();
        
        return () => {
            setGo(false);
        }
    }, [initTel, go, error, details, jobs, setError, setGo]);

    return (
        <>
            <main className="max-w-3xl mx-auto py-12 px-4 font-gordita lg:space-y-8 space-y-8">
                <div className="flex justify-between items-center bg-black rounded-lg p-3">
                    <h1 className="flex items-center space-x-3">
                        <img src={logo} alt="" className="w-6 h-6 filter invert" />
                        <span className="font-bold text-xl font-gordita-bold text-white">Hire Screened Dev</span>
                    </h1>
                    <div className="flex justify-end items-center lg:space-x-3 space-x-0">
                        
                        <Link to="/hire" 
                            className="hidden sm:grid place-content-center h-9 rounded-full text-sm text-gray-200 px-5 py-2
                                transform scale-75 lg:scale-100
                            "
                             style={{background: '#555', border: 'none'}}
                            >
                            <FaChevronLeft className="text-md"></FaChevronLeft>
                        </Link>
                        <button className="h-9 rounded-full text-sm text-gray-100 px-5 py-2 transform scale-75 lg:scale-100"
                             style={{background: '#555', border: 'none'}}
                        >
                            Step 2/3
                        </button>
                    </div>
                </div>

                <div className="">
                    <h1 className="text-2xl font-semibold">We will be glad to learn more about your company</h1>
                    <p className="text-gray-700 py-4">Tell us about your business and hiring needs</p>
                </div>

                {/* Part-Time or Full-Time */}
                <section className="p-0 flex flex-col lg:flex-row lg:space-x-5 lg:items-center items-start">
                    <span className="pb-3 lg:pb-0">Your hiring needs</span>
                    <div className="space-x-4 opt">
                        {time.map((t,index) => {
                            return(
                                <button 
                                    key={index}
                                    data-time={t}
                                    onClick={(e => setDetails({...details, time: e.target.dataset.time}))}
                                    className={`
                                    h-9 rounded-full text-sm px-5 py-2 font-bold 
                                    ${details.time === t ?
                                         'bg-black text-white': 
                                         'bg-gray-200 text-gray-500 hover:bg-gray-300'}
                                    `}>
                                    {t}
                                </button>
                            );
                        })}
                    </div>
                    {errors.includes('time') && <p className="text-red-400 mt-3 text-xs">Please choose the type of worker you need</p>}
                </section>

                {/* Numbers of staffs */}
                <section className="p-0 flex flex-col space-y-3 items-start">
                    <span className="">Current employees in your company</span>
                    <div className="space-x-4 space-y-2 lg:space-y-0 opt">
                        {staffs.map((staff, index) => {
                            return(
                                <button 
                                    key={index}
                                    data-staffs={staff}
                                    onClick={(e => setDetails({...details, staffs: e.target.dataset.staffs}))}
                                    className={`
                                    h-9 rounded-full text-sm px-5 py-2 font-bold
                                    ${details.staffs === staff ? 
                                        'bg-black text-white': 
                                        'bg-gray-200 text-gray-500 hover:bg-gray-300'}
                                    `}>
                                    {staff}
                                </button>
                            );
                        })}
                    </div>
                    {errors.includes('staffs') && <p className="text-red-400 text-xs">Please choose your company staff size</p>}
                </section>


                {/* Other Details */}
                <section className="p-0 lg:space-y-8 space-y-4">

                    <div className="">
                        <label htmlFor="email" className="block">Your Name</label>
                        <div className="grid grid-cols-6">
                            <input 
                                className={`
                                    block my-3 py-2 px-3 lg:text-lg text-md rounded-md w-full border-2 
                                    lg:col-span-3 col-span-6 bg-white
                                    ${errors.includes('fullname') ? 'border-red-400' : 'border-gray-400'}
                                `}
                                type="text"
                                name="fullname" 
                                value={details.fullname}
                                onBlur={handleEmpty}
                                onChange={(e)=> setDetails({...details, fullname: e.target.value})}
                                placeholder="Enter Your Fullname"
                            />
                        </div>
                        {errors.includes('fullname') && <p className="text-red-400 text-xs">Please enter your name</p>}
                    </div>

                    <div className="">
                        <label htmlFor="email" className="block">Phone Number</label>
                        <div className="grid grid-cols-6">
                            <input 
                                ref={phoneRef}
                                className={`
                                    block my-3 py-2 pr-3 lg:text-lg text-md rounded-md w-full border-2 
                                    bg-white
                                    ${errors.includes('phone') ? 'border-red-400' : 'border-gray-400'}
                                `}
                                type="text"
                                name="phone" 
                                value={details.phone}
                                onBlur={handleEmpty}
                                onChange={onlyNumbers}
                                placeholder="Enter Phone Number"
                            />
                        </div>
                        {errors.includes('phone') && <p className="text-red-400 pt-3 text-xs">Please enter a vaild phone number</p>}
                    </div>

                    <div className="">
                    <label htmlFor="email" className="block">Company Website (Optional)</label>
                    <div className="grid grid-cols-6">
                        <input 
                            className={`
                                block my-3 py-2 px-3 lg:text-lg text-md rounded-md w-full border-2 
                                lg:col-span-3 col-span-6 bg-white
                                ${errors.includes('company') ? 'border-red-400' : 'border-gray-400'}
                            `}
                            type="text"
                            name="website"
                            value={details.company}
                            // onBlur={handleEmpty}
                            onChange={(e)=> setDetails({...details, company: e.target.value})}
                            placeholder="https://www.company-name.com"
                        />
                    </div>
                    {/* {errors.includes('company') && <p className="text-red-400 text-xs">Please enter a company website</p>} */}
                </div>
                
                </section>

                {/* <p className={`text-red-500 ${!error ? 'hidden' : null }`}>An error has ocurred. Check Network!</p> */}

                <button onClick={checkErrors} 
                    className={`
                    inline-flex text-sm font-bold py-3 px-12 text-white 
                    rounded-md justify-center items-center focus:ring-2 ring-offset-2
                    ${ !loading ?  'bg-black ring-black' : 'bg-gray-600 ring-gray-600' }
                    `} disabled={loading ? true : false}>
                        Submit
                        { !loading ? <FaChevronRight className="text-white ml-4"></FaChevronRight> :
                            <svg className="animate-spin ml-4 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        }
                </button>

                <Link type="hidden" ref={clicker} to="/final" />
                
            </main>
        </>
    );
}

export default Step2;