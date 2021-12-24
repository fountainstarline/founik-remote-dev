import Footer from "./Footer";
import Header from "./Header";


const Partnership = () => {

    document.title = 'Partner with founik remote';

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

            <section id="hero" className="d-flex align-items-center "
                style={
                    {height: '65vh'}
            }>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pt-5 pt-lg-0 d-flex flex-column justify-content-center">

                            <h1>
                                Businesses grow faster with the Founik Remote partnership because it's a win-win game
                            </h1>
                            <h2>
                                To learn about our various partnership plans and how your  business can subscribe to them kindly connect with us through any of our communication channels shown below.
                            </h2>
                            <div></div>
                        </div>
                        <div className="col-lg-6 hero-img">
                            {/* eslint-disable-next-line */}
                            <img src="assets/img/consultation.png" className="img-fluid animated" alt="founik soft undraw image of a receptionist"/>
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
                                        <input type="tel" name="Phone" className="form-control" id="Phone" placeholder="You can type in your country code directly on form field" minlength="9" maxlength="16" pattern="[0-9,+, -]+" required/>
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
                                            Book meeting
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer/>


            <script src="assets/vendor/aos/aos.js"></script>
            <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
            <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>

            <script src="assets/vendor/purecounter/purecounter.js"></script>
            <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
            <script src="https://code.iconify.design/2/2.0.3/iconify.min.js"></script>


            <script src="assets/js/main.js"></script>
            <script src="assets/js/button.js"></script>

            <script src="https://code.iconify.design/2/2.0.3/iconify.min.js"></script>

            <script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>

            <script src="assets/vendor/intlTelInput/intlTelInput.min.js"></script>

        </>
    );

}

export default Partnership;
