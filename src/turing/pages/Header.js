import { Link } from "react-router-dom";
export default() => {
    return (

        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">

                <div className="logo">
                    <h1>
                        <Link to="/">
                            <img src="assets/img/logo.png" alt="" width="200" height="auto"/>
                        </Link>
                    </h1>

                </div>


                <nav id="navbar" className="navbar">
                    <ul>


                        <li>
                            <Link to="/contact-us">
                                Jump to hiring page
                            </Link>
                        </li>
                        <li>
                            <Link to="/book-consultation">
                                Book free hiring consultation
                            </Link>
                        </li>
                        <li>
                            <Link to="/partnership">
                                Join our Partners
                            </Link>
                        </li>


                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>


            </div>
        </header>

    );
}
