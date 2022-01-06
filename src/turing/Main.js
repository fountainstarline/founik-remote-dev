import {useState, createContext} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Page404 from './Page404';
import emailjs from 'emailjs-com';
import {emailjs_id, googleSheetUrl} from './config.json';
import './static/turing.css';
import Abouts from './pages/Abouts';
import BookConsultation from './pages/BookConsultation';
import ContactUs from './pages/ContactUs';
import HelpCenter from './pages/HelpCenter';
import Partnership from './pages/Partnership';
import Support from './pages/Support';
import Thank from './pages/Thank';
import Index from './pages/Index';
// import Home from './Home';

import { 
    BsFillChatRightTextFill,
    BsWhatsapp,
    BsFacebook,
    FaPhoneAlt,
    BsLinkedin
} from 'react-icons/all';



export const Hire = createContext();

const Main = () => {
    if (!localStorage.getItem('details')) {
        localStorage.setItem('details', JSON.stringify({
            fullname: '',
            email: '',
            phone: '',
            company: '',
            staffs: '',
            time: '',
            skills: []
        }));
    }

    const {
        fullname,
        email,
        phone,
        company,
        staffs,
        time,
        skills
    } = JSON.parse(localStorage.getItem('details'));

    let [error, setError] = useState(null);
    let [loading, setLoading] = useState(false);
    let [go, setGo] = useState(false);
    let [jobs, setJobs] = useState(skills);
    let [details, setDetails] = useState({
        fullname: fullname || '',
        email: email || '',
        phone: phone || '',
        company: company || '',
        staffs: staffs || '',
        time: time || '',
        skills: skills || []
    });

    const [ showContact, setShowContact ] = useState(false);

    const handleJob = (e) => {
        let elem = e.currentTarget;

        if (elem.dataset.job === 'No Idea') {
            if (!jobs.includes('No Idea')) {
                return setJobs(['No Idea']);
            }

            return setJobs(jobs.filter(job => job !== elem.dataset.job));
        }

        if (jobs.includes(elem.dataset.job)) {
            return setJobs(jobs.filter(job => job !== elem.dataset.job));
        }

        if (jobs.includes('No Idea')) {
            return setJobs([elem.dataset.job]);
        }

        setJobs([
            ...jobs,
            elem.dataset.job
        ]);
    };

    const sendDetails = async ({phone}) => { // e.preventDefault();
        let string = '';
        for (let i in jobs) {
            string += `${ + i + 1
            }. ${
                jobs[i]
            }\n`;
        }

        try {
            const {service_id, template_id, user_id} = emailjs_id;
            setLoading(true);

            // Send to email
            await emailjs.send(service_id, template_id, {
                ...details,
                phone,
                jobs: string
            }, user_id);

            // // Upload to Google Spreadsheet
            await fetch(googleSheetUrl, {
                method: 'post',
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        ...details,
                        phone,
                        skills: jobs
                    }
                )
            });

            // console.log({...details, phone})
            // throw new Error('Error 202')

            setError(null);
            setGo(true);
            setLoading(false);
            localStorage.setItem('details', JSON.stringify({
                fullname: '',
                email: '',
                phone: '',
                company: '',
                staffs: '',
                time: '',
                skills: []
            }));
            setDetails({
                fullname: fullname || '',
                email: email || '',
                phone: phone || '',
                company: company || '',
                staffs: staffs || '',
                time: time || '',
                skills: skills || []
            })
            setJobs([]);
            // console.log('Finish')

        } catch (e) {
            setError('An error has occured. Check Network!');
            setLoading(false);
        }

    };

    const animation = () => {
        // if(!localStorage.getItem('knowContact')){
        //     localStorage.setItem('knowContact', true);
        // }
        setShowContact(!showContact);
        if(showContact){
            document.querySelectorAll('.transformX-100').forEach(el => {
                el.style.transform = 'translateX(100px)';
            });
        } else if(!showContact){
            document.querySelectorAll('.transformX-100').forEach(el => {
                el.style.transform = 'translateX(0px)';
            });
        }
    }


    return (<Hire.Provider value={
        {
            error,
            go,
            loading,
            jobs,
            details,
            handleJob,
            setGo,
            setError,
            setLoading,
            setDetails,
            sendDetails
        }
    }>
        <Router>
            <Switch>
                <Route exact path='/'
                    component={Index}/>

                <Route exact path='/about'
                    component={Abouts}/>

                <Route exact path='/book-consultation'
                    component={BookConsultation}/>

                <Route exact path='/contact-us'
                    component={ContactUs}/>

                <Route exact path='/help-center'
                    component={HelpCenter}/>

                <Route exact path='/partnership'
                    component={Partnership}/>

                <Route exact path='/support'
                    component={Support}/>

                <Route exact path='/thanks'
                    component={Thank}/>

                <Route exact path='/hire'
                    component={Step1}/>

                <Route exact path='/company-details'
                    component={Step2}/>

                <Route exact path='/final'
                    component={Step3}/>

                <Route path='/*'
                    component={Page404}/>
            </Switch>
        </Router>

        <div className="fixed bottom-5 right-5 z-50 flex flex-col justify-end">
            <a href="tel:+2348139956940"
                className=
                {`bg-yellow-500 my-2 shadow-md rounded-full w-14 h-14 place-content-center ml-auto
                grid transformX-100 `}  
                style={{ '--delay': '.4s' }}>
                <FaPhoneAlt className="text-white text-2xl" />
            </a>
            {/* eslint-disable-next-line */}
            <a href="https://www.linkedin.com/company/founik-soft" target="_blank"
                className={`bg-blue-800 my-2 shadow-md rounded-full w-14 h-14 place-content-center ml-auto
                grid transformX-100 `} 
                style={{ '--delay': '.3s' }}>
                <BsLinkedin className="text-white text-2xl" />
            </a>
            {/* eslint-disable-next-line */}
            <a href="https://web.facebook.com/founiksoft?_rdc" target="_blank"
                className={`bg-blue-500 my-2 shadow-md rounded-full w-14 h-14 place-content-center ml-auto
                grid transformX-100 `} 
                style={{ '--delay': '.2s' }}>
                <BsFacebook className="text-white text-2xl" />
            </a>
            {/* eslint-disable-next-line */}
            <a href="https://wa.me/message/3KOMWA47YOUEO1" target="_blank"
                className={`bg-green-500 my-2 shadow-md rounded-full w-14 h-14 place-content-center ml-auto
                grid transformX-100 `} 
                style={{ '--delay': '.1s' }}>
                <BsWhatsapp className="text-white text-2xl" />
            </a>


            <div className="flex justify-center items-center">
                {/* <div 
                    className={`bg-white my-2 shadow-md rounded-full px-5 py-1 grid place-content-center cursor-pointer mr-3
                        ${localStorage.getItem('knowContact') && 'hidden'}
                    `}
                >
                    Reach us on more channels!
                </div> */}
                <div 
                    className="bg-purple-500 my-2 shadow-md rounded-full w-14 h-14 grid place-content-center cursor-pointer"
                    onClick={animation}
                >
                    <BsFillChatRightTextFill className="text-white text-2xl" />
                </div>

            </div>
        </div>

    </Hire.Provider>);
}

export default Main;
