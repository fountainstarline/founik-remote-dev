import {Link} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


const Abouts = () => {

    document.head.innerHTML = `
    <link href="assets/vendor/aos/aos.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
    <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
      rel="stylesheet">
    <link href="assets/css/style.css" rel="stylesheet">


    <meta content=" founik-soft has develop an App solution kit which makes owing a Tech startup a breeze. we  build, market and manage the overall  clients Apps business." name="description">
    <meta content="software company, “software developer, software engineers, " name="keywords">

    <!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TVFCCN4');</script>
    <!-- End Google Tag Manager -->


    <!-- Facebook Pixel Code -->
      <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '879346696086897');
        fbq('track', 'PageView');
      </script>
      <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=879346696086897&ev=PageView&noscript=1"
      /></noscript>
    <!-- End Facebook Pixel Code -->
    <meta name="theme-color" content="#000000" />
    <link rel="icon" href="/favicon.png" />
    
  `
    document.title = 'About Founik Remote';

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
