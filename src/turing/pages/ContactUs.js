// import {Link} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import { useEffect, useRef, useState } from 'react';


const ContactUs = () => {
    
    document.title = 'contact founik remote for hiring of remote developers';
    document.head.querySelector('meta[name=description]').content = " founik-soft has develop an App solution kit which makes owing a Tech startup a breeze. we  build, market and manage the overall  clients Apps business.";
    document.head.querySelector('meta[name=keywords]').content = "software company, “software developer, software engineers, "


    const phoneRef = useRef(null);
    const [initTel, setInitTel] = useState(false);
    
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
            console.log(iti.getSelectedCountryData().iso2);
        });

        // let iti = window.intlTelInputGlobals.getInstance(phoneRef.current);
        // iti.setCountry(JSON.parse(localStorage.getItem('details')).country || 'us');
        
        return () => {
            // setGo(false);
        }
    }, [initTel]);



    return (

        <>

            <noscript>
                <iframe title="Noscript" src="https://www.googletagmanager.com/ns.html?id=GTM-TVFCCN4" height="0" width="0"
                    style={
                        {
                            display: 'none',
                            visibility: 'hidden'
                        }
                }></iframe>
            </noscript>

            <Header/>

            <section id="hero" className="d-flex align-items-center"
                style={
                    {height: '65vh'}
            }>
                <div className="container">
                    <div className="row">
                        <div className="
                                                                                col-lg-6
                                                                                pt-5 pt-lg-0
                                                                                d-flex
                                                                                flex-column
                                                                                justify-content-center
                                                                              ">
                            <h1>
                                Need more insights?
                            </h1>
                            <h2>
                                Want to hire us, Partner, or gain more insights about our services? 
                                                                                Do let us know through any of our contact channels below.
                            </h2>
                            <div></div>
                        </div>
                        <div className="col-lg-6 hero-img">
                            {/* eslint-disable-next-line */}
                            <img src="assets/img/customer.png" className="img-fluid animated" alt="founik soft undraw image of a receptionist"/>
                        </div>
                    </div>
                </div>
            </section>

            <main id="main">
                <section id="contact" className="contact"
                    style={
                        {background: '#f6f6f6'}
                }>
                    <div className="container">


                        <div className="row">
                            <div className="col-lg-6 col-md-6 order-2 order-lg-1 mt-4" data-aos="fade-">
                                <div className="contact-about">

                                    <p>
                                        <div className="info">
                                            <div>
                                                <i className="ri-map-pin-line"></i>
                                                <p>
                                                    64 Azikiwe Rd Aba
                                                    <br/>
                                                    Abia State, Nigeria, 110001
                                                </p>
                                            </div>

                                            <div>
                                                <i className="ri-mail-send-line"></i>
                                                <p>
                                                    info@founiksoft.com
                                                </p>
                                            </div>

                                            <div>
                                                <i className="ri-phone-line"></i>
                                                <p>
                                                    +234 813 995 6940
                                                </p>
                                            </div>
                                        </div>
                                    </p>
                                    <div className="social-links">

                                        <a href="https://web.facebook.com/FounikRemote/" target="blank" className="facebook">
                                            <i className="bi bi-facebook"></i>
                                        </a>
                                        <a href="https://www.instagram.com/founikremote/" className="instagram" target="blank">
                                            <i className="bi bi-instagram"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/company/founik-remote" target="blank" className="linkedin">
                                            <i className="bi bi-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
                                <form id="myForm" className="php-email-form">
                                    <div className="form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" name="Phone" className="form-control" id="Phone" 
                                        ref={phoneRef}
                                        placeholder="You can type in your country code directly on form field" minlength="9" maxlength="16" pattern="[0-9,+, -]+" required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">
                                            submitting form...plese, have some patient
                                        </div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">
                                            Your message has been sent. Thank you!
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </main>


            <Footer/>

        </>

    );
}

export default ContactUs;
