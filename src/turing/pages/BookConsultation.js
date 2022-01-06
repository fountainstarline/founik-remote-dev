import Footer from "./Footer";
import Header from "./Header";
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
import {useEffect, useRef, useState} from 'react';


const BookConsultaion = () => {
    
    document.title = 'Book Free Consultation For Your Business Hiring Needs With Founik Remote';
    document.head.querySelector('meta[name=description]').content = "founik-soft has develop an App solution kit which makes owing a Tech startup a breeze. we  build, market and manage the overall  clients Apps business.";
    document.head.querySelector('meta[name=keywords]').content = "software company, “software developer, software engineers";

    const phoneRef = useRef(null);
    // const myFormRef = useRef(null);
    const [initTel, setInitTel] = useState(false);
    // const [ form, setForm ] = useState({
    //     name: null,
    //     phone: null,
    //     email: null,
    //     subject: null,
    // })
    
    useEffect(()=>{

        !initTel && intlTelInput(phoneRef.current, {
            initialCountry: "us",
            autoPlaceholder: 'aggressive',
            separateDialCode: true,
            utilsScript: '/utils.js',
        });
        setInitTel(true);

        phoneRef.current.addEventListener('countrychange', () => {
            // eslint-disable-next-line
            let iti = window.intlTelInputGlobals.getInstance(phoneRef.current);
            // console.log(iti.getSelectedCountryData().iso2);
        });

        // let iti = window.intlTelInputGlobals.getInstance(phoneRef.current);
        // iti.setCountry(JSON.parse(localStorage.getItem('details')).country || 'us');
        
        return () => {
            // setGo(false);
        }
    }, [initTel]);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(form)
    // }

    // const handleChange = (attr, e) => {
    //     switch (attr){
    //         case 'name':
    //             setForm({...form,[attr]: e.target.value});
    //             break;
    //         case 'email':
    //             setForm({...form,[attr]: e.target.value});
    //             break;
    //         case 'phone':
    //             setForm({...form,[attr]: e.target.value});
    //             break;
    //         case 'subject':
    //             setForm({...form,[attr]: e.target.value});
    //             break;
    //         case 'message':
    //             setForm({...form,[attr]: e.target.value});
    //             break;
    //     }
    // }

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

            <section id="hero" className="d-flex align-items-center pb-0" onLoad={window.scrollTo(0, 0)}>
                <div className="container">
                    <div className="row relative overflow-hidden">
                        <div className=" col-lg-6 pt-5 pt-lg-0 pb-8 d-flex flex-column justify-content-center">
                            <h1 style={
                                {lineHeight: '40px'}
                            }>
                                Discover best hiring options and tips for your business needs
                            </h1>
                            <h2>
                                Every business need requires a unique hiring approach for a more effective result. Book a free consultation today to learn more about the best hiring options and tips for your business needs.
                            </h2>
                            <div></div>
                        </div>
                        <div className="col-lg-6 hero-img relative bottom-0">
                            {/* eslint-disable-next-line */}
                            <img src="assets/img/consultation.png" className="img-fluid animated mx-auto" alt="founik soft undraw image of business consultants"/>
                        </div>
                    </div>
                </div>
            </section>


            <main id="main pt-10">

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


                                    <a href="https://wa.me/message/3KOMWA47YOUEO1" target="blank">
                                        <button type="button" className="btn btn-primary btn-lg bg-black border-0">
                                            start a chat with a recruiting expert
                                        </button>
                                    </a>

                                </div>
                            </div>


                            <div className="col-lg-6 col-md-12 order-1 order-lg-2">
                                <form  id="myForm" className="php-email-form">
                                    <div className="form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"
                                        required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" name="Phone" 
                                        ref={phoneRef}
                                        className="form-control" id="Phone" placeholder="You can type in your country code directly on form field" minlength="9" maxlength="16" pattern="[0-9,+, -]+"
                                        required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
                                        required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"
                                        required/>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" rows="5" placeholder="Message"
                                        required></textarea>
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
                                            Book free consultation
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

export default BookConsultaion;
