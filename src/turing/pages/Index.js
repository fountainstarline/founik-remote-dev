import { useEffect } from "react";
import {Link} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


const Index = () => {

    document.title = 'Hire remote developers within 48hours from Founik Remote';
    document.head.querySelector('meta[name=description]').content = "Hire Founik Soft screened remote developers within 48hours and secure a 100% refund guarantee on any failed contract plus emergency worker backup for each hire you made. ";
    document.head.querySelector('meta[name=keywords]').content = "Ai engineers, Machine Learning Engineers, Data Scientist, Web developers, Website developers, Back End-developers, Frontend developers, Mobile-apps-developers, Quality-assurance, Wordpress-developers, DevOp-Engineers, shopify website developers, cloud computing engineers, cyber security, AWS computing, best software outsourcing companies, hire remote developers, hire FOUNIK SOFT REMOTE DEVELOPERS, HIRE FOUNIK REMOTE DEVELOPERS";

    useEffect(() => {

        window.scrollTo(0, 0);
        return null;

        //eslint-disable-next-line
    }, []);

    return (
        <>
                <noscript>
                    <iframe title="Google Tag" src="https://www.googletagmanager.com/ns.html?id=GTM-TVFCCN4" height="0" width="0"
                        style={
                            {
                                display: 'none',
                                visibility: 'hidden'
                            }
                    }></iframe>
                </noscript>


                <Header/>

                <section id="hero" className="d-flex align-items-center">

                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-lg-6 pt-5 pt-lg-0 d-flex flex-column justify-content-center">
                                <h1 data-aos=""
                                    style={
                                        {fontSize: '30px'}
                                }>
                                    Hire from the global remote developer's talent pool
                                </h1>
                                <div className="col-lg-9">
                                    <h2 data-aos="" data-aos-delay="">
                                        Hire Founik Remote screened developers within 48hours and secure a 100% refund guarantee on any failed contract plus emergency worker backup for each hire you made.
                                    </h2>
                                </div>
                                <div className="btn2 pl-0 flex justify-content-center justify-content-lg-start">
                                    <a href="/hire" className="">
                                        <button type="button" className="btn btn-primary btn-lg bg-black border-0 mt-4" id="group" style={{ fontWeight: '600' }}>
                                            Hire Screened Developers
                                        </button>
                                    </a>
                                    <span className="option"></span>

                                </div>
                            </div>
                            <div className="col-lg-6 hero-img" data-aos="" data-aos-delay="">
                                <img src="assets/img/remotedev.png" className="img-fluid animated mx-auto" alt="a remote developer"/>
                            </div>
                        </div>
                    </div>

                </section>


                <main id="main">


                    <section id="services" className="services "
                        style={
                            {background: '#fff'}
                    }>
                        <div className="container" data-aos="">

                            {/* <div className="section-title">
                                <h2 style={
                                    {fontSize: '19px'}
                                }>
                                    Find out why the fastest-growing Businesses choose Founik Remote for their hiring needs.
                                </h2>
                                <p style={
                                    {
                                        fontWeight: 'normal',
                                        fontSize: '20px'
                                    }
                                }>
                                    Let’s take a drive as we walk you through packs of benefits that make our clients keep on coming back for our services
                                </p>
                            </div> */}

                            <div className="row mt-4">
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="" data-aos-delay="">

                                    <div className="icon-box">

                                        <div className="icon">
                                            <span className="iconify" data-icon="fa-solid:jedi"
                                                style={
                                                    {
                                                        fontSize: '80px',
                                                        color: '#fff'
                                                    }
                                            }></span>
                                        </div>
                                        <h4 style={
                                            {
                                                fontSize: ' 23px',
                                                color: ' #000'
                                            }
                                        }>
                                            Our reputation in Tech
                                        </h4>
                                        <p>
                                            Founik Soft is a top-notch AI-powered software app Development Company, with a talent pool of remote developers spanning globally; hence our talents are screened and ready for job deployments anytime.
                                        </p>

                                    </div>


                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="" data-aos-delay="">

                                    <div className="icon-box">

                                        <div className="icon">
                                            <span className="iconify" data-icon="fa-solid:clock"
                                                style={
                                                    {
                                                        fontSize: ' 80px',
                                                        color: ' #fff'
                                                    }
                                            }></span>
                                        </div>
                                        <h4 style={
                                            {
                                                fontSize: ' 23px',
                                                color: ' #000'
                                            }
                                        }>
                                            Timeliness and Zero hiring risk
                                        </h4>
                                        <p>
                                            We offer a 100% money refund on any failed contract, and It only takes us 48hours to merge our clients with the list of our best talents that fit their job requirements to ensure easy choice-making.
                                        </p>

                                    </div>


                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="" data-aos-delay="">

                                    <div className="icon-box">

                                        <div className="icon">
                                            <span className="iconify" data-icon="fa-solid:user-circle"
                                                style={
                                                    {
                                                        fontSize: ' 80px',
                                                        color: ' #fff'
                                                    }
                                            }></span>
                                        </div>
                                        <h4 style={
                                            {
                                                fontSize: ' 23px',
                                                color: ' #000'
                                            }
                                        }>
                                            Provision of talent backups in case of emergencies
                                        </h4>
                                        <p>
                                            We offer talent backups to our clients in case of emergencies such
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            as health issues of our remote worker or work incompatibility to the proposed Client.
                                        </p>

                                    </div>


                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="" data-aos-delay="">

                                    <div className="icon-box">

                                        <div className="icon">
                                            <span className="iconify" data-icon="fa-solid:lock"
                                                style={
                                                    {
                                                        fontSize: ' 80px',
                                                        color: ' #fff'
                                                    }
                                            }></span>
                                        </div>
                                        <h4 style={
                                            {
                                                fontSize: ' 23px',
                                                color: ' #000'
                                            }
                                        }>
                                            Flexible  and  secured payment plans
                                        </h4>
                                        <p>
                                            Our remote workers accept hourly, weekly and monthly pay provided a good payment agreement was reached. Clients also enjoy a high secured payment agreement system coupled with an agreement protecting their project idea if the need arises.
                                        </p>

                                    </div>


                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="" data-aos-delay="">

                                    <div className="icon-box">

                                        <div className="icon">
                                            <span className="iconify" data-icon="dashicons:money-alt"
                                                style={
                                                    {
                                                        fontSize: ' 80px',
                                                        color: ' #fff'
                                                    }
                                            }></span>
                                        </div>
                                        <h4 style={
                                            {
                                                fontSize: ' 23px',
                                                color: ' #000'
                                            }
                                        }>
                                            Easy hiring plans and payment systems
                                        </h4>
                                        <p>
                                            We offer flexible hiring plans (full-time to part-time). Also, payment of our remote developers is based on the contractual binding agreement we endorsed with our clients before the contract kicks off.
                                        </p>

                                    </div>


                                </div>
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="" data-aos-delay="">

                                    <div className="icon-box">

                                        <div className="icon">
                                            <span className="iconify" data-icon="clarity:administrator-solid"
                                                style={
                                                    {
                                                        fontSize: ' 80px',
                                                        color: ' #fff'
                                                    }
                                            }></span>
                                        </div>
                                        <h4 style={
                                            {
                                                fontSize: ' 23px',
                                                color: ' #000'
                                            }
                                        }>
                                            Supervision of client's contract and 24/7 customer support
                                        </h4>
                                        <p>
                                            We offer solid job supervision of our client’s project or contract from start to finish, as well as the provision of  24/7 customer support.
                                        </p>

                                    </div>


                                </div>


                            </div>

                        </div>


                    </section>

                    <div id="hero2" className="dev mt-4"
                        style={
                            {backgroundColor: ' #f7f7f7'}
                    }>
                        <div className="container">

                            <div className="row">

                                <div className="col-lg-6 pt-4 pt-lg-0 content mt-4">

                                    <h3 style={
                                            {
                                                fontSize: '20px',
                                                lineHeight: '30px',
                                                // fontWeight: "bold",
                                                textTransform: "capitalize"
                                            }
                                        }
                                        className="hire-description">
                                        Founik Remote offers 100 plus developers programming skills you can hire for your business needs. We also empower our developers to help you in achieving your business milestones
                                    </h3>
                                    <div className="btn2 pl-0 flex justify-content-center justify-content-lg-start">
                                        <a href="/hire" className="">
                                            <button type="button" className="btn btn-primary btn-lg bg-black border-0 mt-4" id="group">
                                                Hire screened developers
                                            </button>
                                        </a>
                                        <span className="option"></span>

                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img src="assets/img/sof.png" className="img-fluid" alt="an icon of programming  languages"/>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <!-- <div id="hero2" className="d-flex align-items-center" >
                
                        <div className="container ">
                          <div className="row">
                            <div className="col-lg-6 pt-5 pt-lg-0 d-flex flex-column justify-content-center">
                              
                              <h2 data-aos="" data-aos-delay="" style="padding-right: 20px; color: #000;">
                               Find <strong>100</strong> plus developers programming skills to hire for your business needs 
                              </h2>
                              
                              <div className="btn2" >
                                <Link to="/hire"><button type="button" className="btn btn-primary btn-lg ml-4 mt-4" id="group" >Hire screened developers</button></a><span className="option"></span>
                                
                              </div>
                            </div>
                            <div className="col-lg-6 hero-img" data-aos="" data-aos-delay="" >
                              <img src="assets/img/sof.png" className="img-fluid animated" alt="">
                            </div>
                          </div>
                
                         
                        </div>
                
                      </div>End Hero --> */}


                    <div className="v7-cta mt-4 "
                        style={
                            {backgroundColor: 'rgba(0, 0, 0, 0.747)'}
                    }>
                        <div className="v7-content is-narrow text-center">
                            <h4 className="h1 white">
                                Would you like to learn more about the best hiring options and tips
                                <br/>
                                that will meet your current needs?


                            </h4>


                            {/* <!-- <p className="white" >
                                        Take advantage of our Apps solution kit today to start building your Apps and websites
                                      </p> --> */}
                            <div className="group grid grid-cols-1 gap-1 lg:w-1/2 mx-auto items-center">
                                <Link to="/book-consultation" className="lg:col-span-1 col-span-2">
                                    <button type="button" className="btn btn-primary btn-md ml-4" id="group2" style={{ background: '#ef7f1a', border: '#ef7f1a' }}>
                                        Book a free consultation with us
                                    </button>
                                </Link>
                                {/* <span className="option"></span> */}
                                {/* <a href="" target="blank" className="lg:col-span-1 col-span-2">
                                    <button type="button" className="btn btn-secondary btn-md" id="group2">
                                        start a chat with a recruiting expert
                                    </button>
                                </a> */}
                            </div>
                        </div>


                    </div>


                </main>


                <Footer/>


                <script src="assets/vendor/aos/aos.js"></script>
                <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
                <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>

                <script src="assets/vendor/purecounter/purecounter.js"></script>
                <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>


                <script src="assets/js/main.js"></script>
                <script src="assets/js/button.js"></script>
                <script src="https://code.iconify.design/2/2.0.3/iconify.min.js"></script>


                <script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>

        </>
    );

}

export default Index;
