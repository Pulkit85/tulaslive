import React, { Component } from 'react';
import logo1 from './tulasheaderlogo.png';
import logo2 from './profile.png';
import './css/profile.css';

class Profile extends Component {
  
  render() {
    return (
      <div className="Profile">
        <div className="header">
            <div className="header-label">
                <span>
                    <label><a>Hi,Pulkit</a></label>
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
              <span>
                <button>Update</button>
              </span>
            </div>
            <div className="labels">
              <div className="label1">
                <span><label>Name</label><input readOnly="true" className="txt1" type="text"></input></span><br/>
                </div>
                <div className="label2">
                <span><label>Date of Birth</label><input className="txt2" type="text"/></span><br/>
                </div>
                <div className="label3">
                <span><label>College Id</label><input className="txt3" type="text"/></span><br/>
                </div>
                <div className="label4"> 
                <span><label>University No.</label><input className="txt4" type="text"/></span><br/>
                </div>
                <div className="label5">
                <span><label>Batch</label><input className="txt5" type="text"/></span><br/>
                </div>
                <div className="label6">
                <span><label>Department</label><input className="txt6" type="text"/></span><br/>
                </div>
                <div className="label7">
                <span><label>Attendance</label><input className="txt7" type="text"/></span><br/>
                </div>
                <div className="label8">
                <span><label>Mobile No.</label><input className="txt8" type="text"/></span><br/>
                </div>
                <div className="label9">
                <span><label>Email</label><input className="txt9" type="text"/></span><br/>
                </div>
                <div className="label10">
                <span><label>Father's Name</label><input className="txt10" type="text"/></span><br/>
                </div>
                <div className="label11">
                <span><label>Address</label><input className="txt11" type="text"/></span><br/>
                </div>
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

export default Profile;