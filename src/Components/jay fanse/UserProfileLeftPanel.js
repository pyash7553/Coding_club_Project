import React, { useState } from "react";
import "./UserProfileLeftPanel.css";
// import dp from "../images/profile.jpeg";
import EditUserProfile from "./EditUserProfile";
import tagCollection from "./UserProfileTagsInfo";
import UserProfileSkillTagElement from "./UserProfileSkillTagElement";
import { Link } from "react-router-dom";

function UserProfileLeftPanel() {
  const ToggleStyle = {
    display: "flex",
  };

  const [showEdit, setShowEdit] = useState(false);
  
  function EditDP() {
    setShowEdit(!showEdit);
  }

  function displayTags(tagElement){
    if(tagElement.use==true)
    {
      return <UserProfileSkillTagElement 
      tag = {tagElement.name}
      />
    }
  }

  return (
    <div className="UPleftPanel">
      <div className="UPProfile">
        <div className="ProfileImg" onMouseEnter={EditDP} onMouseLeave={EditDP}>
          <img src="/images/profile.jpeg" alt="" />
          <div
            className="ProfileImgEdit"
            id="editDP"
            style={showEdit ? ToggleStyle : null}
          >
            <button className="EditDPButton">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="ProfileName">
          Jay Fanse
        </div>
        <div className="ProfileUsername">
          @jayfanse29
        </div>
        <div className="ProfileEditLink">
          <Link to="edit_profile">Edit Profile</Link>
        </div>
      </div>
      <div className="UPSkills">
        <div className="UPSkillsTitle">
          Skills
        </div>
        <div className="UPSkillsContent">
            {tagCollection.map(displayTags)}
            {tagCollection.map(displayTags)}
            {tagCollection.map(displayTags)}
        </div>
      </div>
    </div>
  );
}

export default UserProfileLeftPanel;
