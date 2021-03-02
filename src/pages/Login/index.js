import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { GoogleLogin } from 'react-google-login';
import "./style.css";

import Logo from "../../images/dro-logo.png";
// import Icon1 from "../../images/sign in.png";

const Login = (props) => {
    // const responseGoogle = () => {
    //     props.history.push("/");
    //     window.location.reload();
    // };

    useEffect(() => {
        document.title = "Login | DRO Health";
    }, []);
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
                                    <Link className="nav-btn1" to="/">Consultations?</Link>
                                </li><br />
                                <li className="nav-item">
                                    <Link className="nav-btn" to="/">Try for Free</Link>
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
                            <p>Welcome back!</p>
                            <div className="form-group">
                                <label htmlFor="inputForUsername">Username</label>
                                <input 
                                    id="inputForUsername"
                                    type="text"
                                    aria-describedby="Enter your username"
                                    placeholder="Enter your username" 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputForPassword">Password</label>
                                
                                <input 
                                    type="password"
                                    id="inputForPassword"
                                    placeholder="Enter password" />
                            </div>
                            <button type="submit" className="">Login</button>
                            <Link className="forgot-password" to="/register">Not Registered?</Link>
                            {/* <div className="" id="social-icons mt-5">
                                <img className="so-icon" src={Icon1} alt="alternative" />
                                <GoogleLogin
                                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                    buttonText="Continue with Google"
                                    onSuccess={()=>responseGoogle}
                                    onFailure={()=>responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                    className="google"
                                />
                            </div> */}
                        </form>
                    </div>
                    <div className="col-md-12 ">
                        <p className="copywright mt-5">© 2020 DROHealth.com. All Rights Reserved. </p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    ) 
}

export default Login;