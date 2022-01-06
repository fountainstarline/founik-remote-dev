import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <footer id="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row">


                            <div className="col-lg-4 col-md-6 footer-links">
                                <h4>
                                    Company
                                </h4>
                                <ul>
                                    <li><a href="/hire">Hire developer</a></li>
                                    <li><Link to="/about">About us</Link></li>
                                    


                                </ul>


                            </div>

                            <div className="col-lg-4 col-md-6 footer-links">
                                <h4>
                                    Support
                                </h4>
                                <ul>
                                    <li><Link to="/contact-us">Contact Us</Link></li>
                                    <li><Link to="/book-consultation">Book free consultation</Link></li>

                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-links">
                                <h4>
                                    About Parent Company (Founik Soft)
                                </h4>
                                <ul>
                                    <li><a href="https://www.founiksoft.com" target="blank">founiksoft.com</a></li>
                                    <li><a href="https://www.founiksoft.com/mobile-apps.html" target="blank">Build Mobile apps with Founik Soft</a></li>
                                    <li><a href="https://www.founiksoft.com/web-apps.html" target="blank">Build Web apps & websites  with Founik Soft</a></li>
                                    <li><a href="https://www.founiksoft.com/Ai-apps.html" target="blank">Build AI base apps with Founik Soft</a></li>
                                    <li><a href="https://www.founiksoft.com/lowcode-websites.html" target="blank">Build Low-code apps & websites with Founik Soft</a></li>
                                    <li><a href="https://www.founiksoft.com/big-data.html" target="blank">Big Data analytics solutions</a></li>
                                    <li><a href="https://www.founiksoft.com/digital-business-pipeline.html" target="blank">Build digital business pipelines</a></li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="d-md-flex justify-content-around py-4 fake">

                    <div className="mr-md-auto text-center text-md-left">
                        <div className="copyright">
                            <strong>
                                Founik Remote &nbsp;
                            </strong> 
                            Powered by &nbsp;
                            <strong>
                                Founik Technologies
                            </strong> owners of Founik Soft & Founik Market
                        </div>
                        <div className="credits"></div>
                    </div>
                </div>

                <div className="container d-md-flex justify-content-around py-4">

                    <div className="mr-md-auto text-center text-md-left">
                        <div className="copyright">
                            &copy; Copyright 2021 
                            <strong>
                                <span>
                                    Founik Remote
                                </span>
                            </strong>
                            . All Rights Reserved
                        </div>
                        <div className="credits"></div>
                    </div>
                    <div className="social-links text-center text-md-left pt-3 pt-md-0">

                        <a href="https://web.facebook.com/founiksoft?_rdc" target="blank" className="facebook">
                            <i className="bx bxl-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/founiksoft" target="blank" className="instagram">
                            <i className="bx bxl-instagram"></i>
                        </a>

                        <a href="https://www.linkedin.com/company/founik-soft" target="blank" className="linkedin">
                            <i className="bx bxl-linkedin"></i>
                        </a>
                    </div>
                </div>
            </footer>


            {/* <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a> */}

        </>
    );
}

export default Footer;