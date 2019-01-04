import React, { Component } from 'react';
import logo1 from './tulasheaderlogo.png';
import logo2 from './profile.png';
import './css/addfaculty.css';

class AddFaculty extends Component {
  
  render() {
    return (
        <div className="Profile">
            <div className="header">
                <div className="header-label">
                    <span>
                        <label><a>Hi,Faculty</a></label>
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
                <div className="colms">
             
                 <div className="firstcolm">
                    <span><h3>Personal Details </h3></span><br/>
                    <div className="label1">
                        <span><label>Name</label></span><br/>
                    </div>
                    <div className="label2">
                        <span><label>Father's Name</label></span><br/>
                    </div>
                    <div className="label3">
                        <span><label>Mother's Name</label></span><br/>
                    </div>
                    <div className="label4">
                        <span><label>DOB</label></span><br/>
                    </div>
                    <div className="label5">
                        <span><label>Address</label></span><br/>
                    </div>
                    <div className="label6">
                        <span><label>Assigned Course</label></span><br/>
                    </div>
                    <div className="label7">
                        <span><label>Assigned Branch</label></span><br/>
                    </div>
                    <div className="label8">
                        <span><label>Mobile No.</label></span><br/>
                    </div>
                    <div className="label9">
                        <span><label>Email Id</label></span><br/>
                    </div>
                </div>

                <div className="secondcolm">
                    <div>
                        <span><input  className="txt1" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input  className="txt2" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input  className="txt3" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input  className="txt4" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input  className="txt5" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input  className="txt6" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input  className="txt7" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input  className="txt8" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input  className="txt9" type="text"></input></span><br/>
                    </div>
                </div>

                <div className="thirdcolm">
                    <span><h3>Additional Details </h3></span><br/>
                    <div className="label19">
                        <span><label>Highest Qualification</label></span><br/>
                    </div>
                    <div className="label20">
                        <span><label>Year of Passing</label></span><br/>
                    </div>
                    <div className="label21">
                        <span><label>University</label></span><br/>
                    </div>
                    <div className="label22">
                        <span><label>College Name</label></span><br/>
                    </div>
                    <div className="label23">
                        <span><label>City</label></span><br/>
                    </div>
                    <div className="label24">
                        <span><label>State</label></span><br/>
                    </div>
                    <div className="label25">
                        <span><label>Country</label></span><br/>
                    </div>
                    <div className="label26">
                        <span><label>Specialised Subject</label></span><br/>
                    </div>
                    <div className="label26">
                        <span><label>Extra Subjects</label></span><br/>
                    </div>
                </div>

                <div className="fourthcolm">
                    <div>
                        <span><input  className="txt19" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input  className="txt20" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input  className="txt21" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input  className="txt22" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input  className="txt23" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input  className="txt24" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input  className="txt25" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input  className="txt26" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input  className="txt27" type="text"></input></span><br/>
                    </div>
                    <span>
                    <button>Submit</button> 
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

export default AddFaculty;