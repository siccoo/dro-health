import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import config from "../../config";
// import { GoogleLogin } from 'react-google-login';
import "./style.css";

import Logo from "../../images/dro-logo.png";
// import Icon1 from "../../images/sign in.png";

const Register = () => {
    // const responseGoogle = () => {
    //     props.history.push("/");
    //     window.location.reload();
    // };

    const { register, handleSubmit, errors } = useForm();
    const [message, setMessage] = useState();

    useEffect(() => {
        document.title = "Create account | DRO Health";
    }, []);

    

  const onSubmit = (data, e) => {
    setMessage({
      data: "Registration is in progress...",
      type: "alert-warning",
    });
    fetch(`${config.baseUrl}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const hasError = "error" in data && data.error != null;
        setMessage({
          data: hasError ? data.error : "Registered successfully",
          type: hasError ? "alert-danger" : "alert-success",
        });

        !hasError && e.target.reset();
      });
  };


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

        <section className="signin-card">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-10 offset-md-2">
                        <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                            {message && <span>{message.data}</span>}
                            <p>Sign Up!</p>
                            <div className="form-group">
                                <label htmlFor="inputForUsername">Username</label>
                                <input 
                                    id="inputForUsername"
                                    name="username"
                                    type="text"
                                    aria-describedby="Enter your username"
                                    placeholder="Enter your username"
                                    ref={register({
                                        required: {
                                          value: true,
                                          message: "Please enter your user name",
                                        },
                                        minLength: {
                                          value: 4,
                                          message: "Minimum 4 characters are allowed",
                                        },
                                        maxLength: {
                                          value: 15,
                                          message: "Maximum 15 characters are allowed",
                                        },
                                      })}
                                />
                                {errors.username && <p className="errMsg">{errors.username.message}</p>}
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                        <label htmlFor="inputFirstname">First Name</label>
                                        <input 
                                            id="inputForFirstname"
                                            name="firstname"
                                            type="text"
                                            aria-describedby="Enter your first name"
                                            placeholder="Enter your first name"
                                            ref={register({
                                                required: {
                                                  value: true,
                                                  message: "Please enter your first name",
                                                },
                                                minLength: {
                                                  value: 6,
                                                  message: "Minimum 6 characters are allowed",
                                                },
                                                maxLength: {
                                                  value: 225,
                                                  message: "Maximum 225 characters are allowed",
                                                },
                                              })}  
                                        />
                                        {errors.firstname && <p className="errMsg">{errors.firstname.message}</p>}
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputForLastname">Last Name</label>
                                    <input 
                                        id="inputForLastname"
                                        name="lastname"
                                        type="text"
                                        aria-describedby="Enter your last name"
                                        placeholder="Enter your last name"
                                        ref={register({
                                            required: {
                                              value: true,
                                              message: "Please enter your last name",
                                            },
                                            minLength: {
                                              value: 6,
                                              message: "Minimum 6 characters are allowed",
                                            },
                                            maxLength: {
                                              value: 225,
                                              message: "Maximum 225 characters are allowed",
                                            },
                                          })}
                                    />
                                    {errors.lastname && <p className="errMsg">{errors.lastname.message}</p>}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputForEmail">Email address</label>
                                <input 
                                    id="inputForEmail"
                                    name="email"
                                    type="email"
                                    aria-describedby="Enter email address"
                                    placeholder="Enter email address" 
                                    ref={register({
                                        required: {
                                          value: true,
                                          message: "Please enter your email address",
                                        },
                                        pattern: {
                                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                          message: "Enter a valid email address",
                                        },
                                        minLength: {
                                          value: 6,
                                          message: "Minimum 6 characters are allowed",
                                        },
                                        maxLength: {
                                          value: 255,
                                          message: "Maximum 255 characters are allowed",
                                        },
                                      })}
                                />
                                {errors.email && <p className="errMsg">{errors.email.message}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputForPassword">Password</label>
                                
                                <input 
                                    type="password"
                                    name="password"
                                    id="inputForPassword"
                                    placeholder="Enter password" 
                                    ref={register({
                                        required: {
                                          value: true,
                                          message: "Please enter password",
                                        },
                                        minLength: {
                                          value: 6,
                                          message: "Minimum 6 characters are allowed",
                                        },
                                        maxLength: {
                                          value: 255,
                                          message: "Maximum 255 characters are allowed",
                                        },
                                      })}
                                />
                                {errors.password && <p className="errMsg">{errors.password.message}</p>}
                            </div>
                            <button type="submit" className="">Register</button>
                            <Link className="forgot-password" to="/login">Already Registered?</Link>
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
                    <div className="col-md-12">
                        <p className="copywright mt-5   ">© 2020 DROHealth.com. All Rights Reserved. </p>
                    </div>
                </div>
            </div>
        </section>
       </div>
   ) 
}

export default Register;