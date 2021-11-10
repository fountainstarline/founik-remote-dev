import { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Page404 from './Page404';
import emailjs from 'emailjs-com';
import { emailjs_id, googleSheetUrl } from './config.json';
import './static/turing.css';

export const Hire = createContext();

const Main = () => {
    if(!localStorage.getItem('details')){
        localStorage.setItem('details', JSON.stringify({
            fullname: '',
            email: '',
            phone: '',
            company: '',
            staffs: '',
            time: '',
            skills: [],
        }));
    }

    const {
        fullname,
        email,
        phone,
        company,
        staffs,
        time,
        skills,
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
        skills: skills || [],
    });

    const handleJob = (e) => {
        let elem = e.currentTarget;

        if(elem.dataset.job === 'Not Sure'){
            if(!jobs.includes('Not Sure')){
                return setJobs(['Not Sure']);
            }
            
            return setJobs(jobs.filter(job => job !== elem.dataset.job));
        }
        
        if(jobs.includes(elem.dataset.job)){
            return setJobs(jobs.filter(job => job !== elem.dataset.job));
        }

        if(jobs.includes('Not Sure')){
            return setJobs([elem.dataset.job]);
        }
        
        setJobs([...jobs, elem.dataset.job]);
    };
    
    const sendDetails = async({ phone }) => {
        // e.preventDefault();
        let string = '';
        for(let i in jobs){
            string += `${+i+1}. ${jobs[i]}\n`;
        }

        try{
            const { service_id, template_id, user_id } = emailjs_id;
            setLoading(true);

            // Send to email
            await emailjs.send(
                service_id,
                template_id, 
                {...details, phone, jobs: string},
                user_id
            );

            // // Upload to Google Spreadsheet
            await fetch(googleSheetUrl,{
                method: 'post',
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({...details, phone, skills: jobs })
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
                skills: [],
            }));
            setDetails({
                fullname: fullname || '',
                email: email || '',
                phone: phone || '',
                company: company || '',
                staffs: staffs || '',
                time: time || '',
                skills: skills || [],
            })
            setJobs([]);
            // console.log('Finish')

        } catch(e){
            setError('An error has occured. Check Network!');
            setLoading(false);
        }
        
    };
        

    return (
      <Hire.Provider value={{
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
          sendDetails,
        }}
      >
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />

            <Route exact path='/hire' component={Step1} />

            <Route exact path='/company-details' component={Step2} />

            <Route exact path='/final' component={Step3} />

            <Route path='/*' component={Page404} />
          </Switch>
        </Router>
      </Hire.Provider>
    );
}

export default Main;