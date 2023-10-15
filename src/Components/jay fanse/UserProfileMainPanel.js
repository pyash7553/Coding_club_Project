import React, { useState } from "react";
import "./UserProfileMainPanel.css";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap";
// import email from "../images/email.png";
// import linkedin from "../images/linkedIn.png";

function UserProfileMainPanel() {
  return (
    <div className="UPMainPanel">
      <div className="UPMainDetails">
        <div className="UPBio">
          <div id="UPBioTitle" className="UPBioTitle">
            About
          </div>
          <div className="UPBioInfo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio porro ea dignissimos?
          </div>
        </div>
        <div className="UPPersonalInfo">
          <div
            className="UPBioTitle"
          >
            Details
            
          </div>
          <div className="UPBioInfo">
            <div>
              <span>Programme</span> : Bachelor's of Engineering
            </div>
            <div>
              <span>Department</span> : Computer Science and Engineering
            </div>
            <div>
              <span>Year of Graduation</span> : 2025
            </div>
            <div>
              <span>E-mail {/* <img src={email}/> */}</span> :{" "}
              <a href="">jayf29112003@gmail.com</a>
            </div>
            <div>
              <span>LinkedIn {/* <img src={linkedin}/> */}</span> :{" "}
              <a href="">wdeth4yjtn</a>
            </div>
          </div>
        </div>
      </div>
      <div className="UPMainActivity">
        <div className="UPBioTitle">Projects</div>
        <div className="UPMainActivityInfo">
          <div className="UPMainNoActivity">No Project to Display!</div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileMainPanel;
