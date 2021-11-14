import Footer from "./Footer";
import Header from "./Header";

const BookConsultaion = () => {

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
    <link href="assets/css/font-awesome.css" rel="stylesheet">
    <link href="assets/css/intlTelInput.min.css" rel="stylesheet">


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
    
  `
  document.title = 'Book Free Consultation For Your Business Hiring Needs With Founik Remote';

  return (
    <>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TVFCCN4"
    height="0" width="0" style={{display:'none', visibility:'hidden'}}></iframe></noscript>
    
    
    <Header />

 <section id="hero" className="d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div
          className="
            col-lg-6
            pt-5 pt-lg-0
            d-flex
            flex-column
            justify-content-center
          "
        >
        <h1 style={{lineHeight: '40px'}}>Discover best hiring options and tips for your business needs </h1>
        <h2>
          Every business need requires a unique hiring approach for a more effective result. Book a 
          free consultation today to learn more about the best hiring options and tips for your business needs.
        </h2>
          <div>
           
          </div>
        </div>
        <div
          className="col-lg-6 hero-img"
                  
        >
          <img
            src="assets/img/consultation.png"
            className="img-fluid animated"
            alt="founik soft undraw image of business consultants"
          />
        </div>
      </div>
    </div>
  </section>
  

  <main id="main">
    
    <section id="contact" className="contact"  style={{background: '#f6f6f6'}}>
      <div className="container">
        

        <div className="row">
          
          <div
          
            className="col-lg-6 col-md-6 order-2 order-lg-1 mt-4" 
            data-aos="fade-"
           
          >
            <div className="contact-about">
            
              
              <p>
                <div className="info">
                  <div>
                    <i className="ri-map-pin-line"></i>
                    <p>64 Azikiwe Rd Aba<br />Abia State, Nigeria, 110001</p>
                  </div>
    
                  <div>
                    <i className="ri-mail-send-line"></i>
                    <p>info@founiksoft.com</p>
                  </div>
    
                  <div>
                    <i className="ri-phone-line"></i>
                    <p>+234 813 995 6940</p>
                  </div>
                </div>
              </p>
              <div className="social-links">
                
                <a href="https://web.facebook.com/FounikRemote/" target="blank" className="facebook"
                  ><i className="bi bi-facebook"></i
                ></a>
                <a href="https://www.instagram.com/founikremote/" className="instagram"
                  target="blank"><i className="bi bi-instagram"></i
                ></a>
                <a href="https://www.linkedin.com/company/founik-remote" target="blank" className="linkedin"
                  ><i className="bi bi-linkedin"></i
                ></a>
              </div>
            
             
                <a href="" target="blank"><button type="button" className="btn btn-primary btn-lg">start a chat with a recruiting expert</button></a>
            
            </div>
          </div>

          
          <div
            className="col-lg-6 col-md-12 order-1 order-lg-2"
                      
          >
            <form
              id="myForm"
              role="form"
              className="php-email-form"
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="Phone"
                  className="form-control"
                  id="Phone"
                  placeholder="You can type in your country code directly on form field"
                  minlength="9" maxlength="16"
                  pattern="[0-9,+, -]+"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">submitting form...plese, have some patient</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Book free consultation</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>


    <Footer />

    </>

  );
}

export default BookConsultaion;