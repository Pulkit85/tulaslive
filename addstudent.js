import React, { Component } from 'react';
import logo1 from './tulasheaderlogo.png';
import logo2 from './profile.png';
import './css/addstudent.css';

class AddStudent extends Component {
  
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
                    <img src={logo1} alt="logo1" />
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
                    <span><h3 >Personal Details </h3></span><br/>
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
                        <span><label>University Roll No.</label></span><br/>
                    </div>
                    <div className="label6">
                        <span><label>Course</label></span><br/>
                    </div>
                    <div className="label7">
                        <span><label>Branch</label></span><br/>
                    </div>
                    <div className="label8">
                        <span><label>Mobile No.</label></span><br/>
                    </div>
                    <div className="label9">
                        <span><label>Email Id</label></span><br/>
                    </div>
                    
                        <span><h3>Class Xth Details </h3></span><br/>
                    
                    <div className="label10">
                        <span><label>Roll No.</label></span><br/>
                    </div>
                    <div className="label11">
                        <span><label>Year of Passing</label></span><br/>
                    </div>
                    <div className="label12">
                        <span><label>Medium</label></span><br/>
                    </div>
                    <div className="label13">
                        <span><label>Board</label></span><br/>
                    </div>
                    <div className="label14">
                        <span><label>School Name</label></span><br/>
                    </div>
                    <div className="label15">
                        <span><label>City</label></span><br/>
                    </div>
                    <div className="label16">
                        <span><label>State</label></span><br/>
                    </div>
                    <div className="label17">
                        <span><label>Country</label></span><br/>
                    </div>
                    <div className="label18">
                        <span><label>% of marks</label></span><br/>
                    </div>

                </div>

                <div className="secondcolm">
                    <div>
                        <span><input readOnly="true" className="txt1" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt2" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt3" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt4" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt5" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt6" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt7" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt8" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt9" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt10" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt11" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt12" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt13" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt14" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt15" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt16" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt17" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt18" type="text"></input></span><br/>
                    </div>
                                       
                </div>
                <div className="thirdcolm">
                    <span><h3>Class XIIth Details </h3></span><br/>
                    <div className="label19">
                        <span><label>Roll No.</label></span><br/>
                    </div>
                    <div className="label20">
                        <span><label>Year of Passing</label></span><br/>
                    </div>
                    <div className="label21">
                        <span><label>Medium</label></span><br/>
                    </div>
                    <div className="label22">
                        <span><label>Board</label></span><br/>
                    </div>
                    <div className="label23">
                        <span><label>School Name</label></span><br/>
                    </div>
                    <div className="label24">
                        <span><label>City</label></span><br/>
                    </div>
                    <div className="label25">
                        <span><label>State</label></span><br/>
                    </div>
                    <div className="label26">
                        <span><label>Country</label></span><br/>
                    </div>
                    <div className="label27">
                        <span><label>% of marks</label></span><br/>
                    </div>
                </div>    
                <div className="fourthcolm">
                    <div>
                        <span><input readOnly="true" className="txt19" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt20" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt21" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt22" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt23" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt24" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt25" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt26" type="text"></input></span><br/>
                    </div>
                    <div>
                        <span><input readOnly="true" className="txt27" type="text"></input></span><br/>
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

export default AddStudent;