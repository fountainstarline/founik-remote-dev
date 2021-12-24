import {Link} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


const Abouts = () => {

    document.title = 'About Founik Remote';
    document.head.querySelector('meta[name=description]').content = " founik-soft has develop an App solution kit which makes owing a Tech startup a breeze. we  build, market and manage the overall  clients Apps business.";
    document.head.querySelector('meta[name=keywords]').content = "software company, “software developer, software engineers, ";

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


            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="
                                                                                                                                                                                                                                                col-lg-6
                                                                                                                                                                                                                                                pt-5 pt-lg-0
                                                                                                                                                                                                                                                d-flex
                                                                                                                                                                                                                                                flex-column
                                                                                                                                                                                                                                                justify-content-center
                                                                                                                                                                                                                                              ">
                            <h1 style={
                                {fontSize: '28px'}
                            }>
                                End of discussion for fear of hiring unproductive remote developers
                            </h1>
                            <h2>
                                With Founik Remote it takes you only 48hours to hire already screened developers for your business need,
                                                                                                                                                                                                                                                backed up by a 100% refund on failed contracts or projects.
                            </h2>
                            <div></div>
                        </div>
                        <div className="col-lg-6 hero-img">
                            {/* eslint-disable-next-line */}
                            <img src="assets/img/employee.png" className="img-fluid animated" alt="founik soft undraw image of a receptionist"/>
                        </div>
                    </div>
                </div>
            </section>
            <section id="team" className="team section-bg"
                style={
                    {backgroundColor: 'rgba(255, 255, 255, 0.733)'}
            }>
                <div className="container">

                    <div className="section-title">
                        <h2 className="technologies"
                            style={
                                {textAlign: 'center'}
                        }>
                            Why Founik Remote?
                        </h2>
                        <p className="tech-description"
                            style={
                                {
                                    fontSize: '22px',
                                    lineHeight: '40px',
                                    padding: '30px'
                                }
                        }>

                            Founik Remote was innovated by  Founik Soft in order to extend its services to the global market by giving clients or organizations the opportunity to leverage the talent pool of Founik Soft screened remote developers spanned globally. As a software company, we understand that one of the challenges other organizations face is hiring unskilled developers for their projects. 
                                                                                                                                                                                                                  It leads to both waste of time and resources, that's why we are here to bridge this gap.
                                                                                                                                                                                                                    We work on a service plan that enables us to merge our Remote developers to our Global clients within 48hrs times after sending in a hiring proposal. We are Founik Remote! our goal is to help businesses get access to the right developers with the best skillsets.

                        </p>
                    </div>
                </div>
            </section>


            <div id="hero2" className="dev mt-4"
                style={
                    {backgroundColor: '#f7f7f7'}
            }>
                <div className="container">

                    <div className="row">

                        <div className="col-lg-6 pt-4 pt-lg-0 content mt-4">
                            <h3>
                                Find
                                <strong>
                                    100
                                </strong>
                                plus developers programming skills to hire for your business needs
                            </h3>

                            <div className="btn2">
                                <a href="/hire">
                                    <button type="button" className="btn btn-primary btn-lg ml-4 mt-4" id="group">
                                        Hire screened developers
                                    </button>
                                </a>
                                <span className="option"></span>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/* eslint-disable-next-line */}
                            <img src="assets/img/sof.png" className="img-fluid" alt="an icon of programming  languages"/>
                        </div>
                    </div>

                </div>
            </div>


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


                    <div className="group">
                        <Link to="/book-consultation">
                            <button type="button" className="btn btn-primary btn-lg ml-4" id="group">
                                Book a free consultation with us
                            </button>
                        </Link>
                        <span className="option"></span>
                        <Link to="" target="blank">
                            <button type="button" className="btn btn-secondary btn-lg">
                                start a chat with a recruiting expert
                            </button>
                        </Link>
                    </div>
                </div>


            </div>


            <Footer/>
        </>
    );
}

export default Abouts;
