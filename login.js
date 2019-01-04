import React, { Component } from 'react';
import logo1 from './tulasheaderlogo.png';
import logo2 from './profile.png';
import './css/login.css';


class Login extends Component {
  render() {
    return (
        <div className="Login">
            <div className="header">
                <div className="header-label">
                    <span>
                        <label><a></a></label>
                    </span>
                </div>
                <div className="header-logo">
                    <span>
                        <img src={logo1} alt="logo1"/>
                    </span>
                </div>
                <div className="header-button">
                    <span>
                        <button>Logout</button>
                    </span>
                </div>
            </div>

            <div className="content">
                <div className="content-p-l-b">
                    <div className="profile-image">
                            <span>
                                <img src={logo2} className="img" alt="logo2"/>
                            </span>
                    </div>
                    <div className="text">
                        <div className="text1">
                            <span>
                                <input placeholder="Name" className="txt1" type="text"/>
                            </span>
                        </div>
                        <div className="text2">
                            <span>
                                <input placeholder="Password" className="txt2" type="text"/>
                            </span>
                        </div>
                    </div>
                    <div className="btn">
                        <span>
                            <button>Login</button>
                        </span>
                    </div>
                    <div className="lbl">
                        <span>
                            <label className="lbl1">Forgot Password</label>
                        </span>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="footerh">
                    <span>
                        <h2>© 2018 Tulas Institute, Dehradun | All Rights Reserved</h2>
                    </span>
                </div>
        </div>

        </div>
        );
  }
}

export default Login;