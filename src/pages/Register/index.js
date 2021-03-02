import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import Logo from "../../images/dro-logo.png";

const Register = () => {
   return (
       <div>
           <section className="nav-section">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light nav-bg justify-content-sm-start fixed-top" >
                    <Link to={'/'} className="navbar-brand order-1 order-lg-0 ml-lg-0 ml-2 mr-auto">
                        <img src={Logo} alt="drohealth" className="home-logo" />
                    </Link>
                    <button className="navbar-toggler align-self-start hidden-sm-up float-xs-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" style={{marginTop: 5 + 'px'}}>
                        <span className="line"></span> 
                        <span className="line"></span> 
                        <span className="line"></span>
                    </button>
                        <div id="navbarNavDropdown" className="navbar-collapse collapse">
                            
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-btn1" to="/">New Customer?</Link>
                                </li><br />
                                <li className="nav-item">
                                    <Link className="nav-btn" to="/">Try for Free <FiChevronRight/></Link>
                                </li><br />
                            </ul>
                        </div>
                    </nav> 
                </div>
        </section>

        <section className="login-card">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-10 offset-md-2">
                        <form>
                            <h3>Sign In</h3>
                            <p>Welcome Back!</p>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email / Username</label>
                                <input type="email"  id="email_address" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Password</label>
                                
                                <input type="password"  id="password" />
                                {/* <span><FiEye className="icon"/></span>  */}
                            </div>
                            <button type="submit" className="">Login</button>
                            <Link className="forgot-password">Forgot Password?</Link>
                            <div className="" id="social-icons mt-5">
                                <img className="so-icon" src={Icon1} alt="alternative" />
                                <img className="so-icon" src={Icon2} alt="alternative" />
                                <img className="so-icon" src={Icon3} alt="alternative" />
                                <img className="so-icon" src={Icon4} alt="alternative" />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-12 ">
                        <p className="copywright mt-5">© 2020 Oneburner.com. All Rights Reserved. </p>
                    </div>
                </div>
            </div>
        </section>
       </div>
   ) 
}

export default Register;