import React, { useState } from "react";
import "./UserProfileLeftPanel.css";
// import dp from "../images/profile.jpeg";
import EditUserProfile from "./EditUserProfile";
import tagCollection from "./UserProfileTagsInfo";
import UserProfileSkillTagElement from "./UserProfileSkillTagElement";
import { Link } from "react-router-dom";

function UserProfileLeftPanel(props) {
  const ToggleStyle = {
    display: "flex",
  };

  console.log(props.userData.skills);

  const [showEdit, setShowEdit] = useState(false);
  
  function EditDP() {
    setShowEdit(!showEdit);
  }

  function displayTags(tagElement){
      return <UserProfileSkillTagElement 
      tag = {tagElement}
      />
  }

  const base64Img = `data:image/png;base64,${props.userData.profileImg}`;

  return (
    <div className="UPleftPanel">
      <div className="UPProfile">
        <div className="ProfileImg" onMouseEnter={EditDP} onMouseLeave={EditDP}>
          <img src={base64Img} alt="" className="ProfileImg"/>
        </div>
        <div className="ProfileName">
          {props.userData.fname} {props.userData.lname}
        </div>
        <div className="ProfileUsername">
          @{props.userData.username}
        </div>
        {(props.visitID==null) ? 
        <div className="ProfileEditLink">
          <Link to={`edit_profile/?userID=${props.userData._id}`}>Edit Profile</Link>
        </div>
        : null}
      </div>
      <div className="UPSkills">
        <div className="UPSkillsTitle">
          Skills
        </div>
        <div className="UPSkillsContent">
          {(props.userData.skills || []).map(displayTags)}
        </div>
      </div>
    </div>
  );
}

export default UserProfileLeftPanel;
