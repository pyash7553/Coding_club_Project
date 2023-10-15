import React, { useState } from "react";
import "./EditUserProfile.css";
// import dp from "../images/profile.jpeg";
import UserProfileInfo from "./UserProfileInfo";
// import { event } from "jquery";
// import Filter_bar from "../additional_codes/Filter_bar";
import UserProfileSkillTagElement from "./UserProfileSkillTagElement";
import tagCollection from "./UserProfileTagsInfo";

function EditUserProfile() {
  const ToggleStyle = {
    display: "flex",
  };

  const EditSelectionStyle = {
    backgroundColor: "rgb(101, 5, 150)",
  };


  const [fname, setFname] = useState(UserProfileInfo.fname);
  const [lname, setLname] = useState(UserProfileInfo.lname);
  const [about, setAbout] = useState(UserProfileInfo.about);
  const [linkedIn, setLinkedin] = useState(UserProfileInfo.linkedIn);
  const [programme, setProgramme] = useState(UserProfileInfo.programme);
  const [dept, setDept] = useState(UserProfileInfo.dept);
  const [year, setYear] = useState(UserProfileInfo.year);
  const [username, setUsername] = useState(UserProfileInfo.username);
  const [email, setEmail] = useState(UserProfileInfo.email);
  const [addSkillDisplay,setaddSkillDisplay] = useState(false);

  const [showEdit, setShowEdit] = useState(false);
  const [isEditSelected, setEditSelected] = useState({
    PersonalInfo: "true",
    AccountInfo: "false",
    CollegeInfo: "false",
    PasswordInfo: "false",
  });
  const [displayChangePassword, setDisplayChangePassword] = useState(false);

  function changeDisplayChangePassword(event) {
    setDisplayChangePassword(true);
    event.preventDefault();
  }

  function EditDP() {
    setShowEdit(!showEdit);
  }

  function changeEditSelected(name) {
    setEditSelected({
      PersonalInfo: "false",
      AccountInfo: "false",
      CollegeInfo: "false",
      PasswordInfo: "false",
      [name]: "true",
    });
    console.log(isEditSelected);
  }

  function changeFName(event) {
    setFname(event.target.value);
  }
  function changeLName(event) {
    setLname(event.target.value);
  }
  function changeAbout(event) {
    setAbout(event.target.value);
  }
  function changeLinkedIn(event) {
    setLinkedin(event.target.value);
  }
  function changeUsername(event) {
    setUsername(event.target.value);
  }
  function changeEmail(event) {
    setEmail(event.target.value);
  }
  function savePersonal(event) {
    UserProfileInfo.fname = fname;
    event.preventDefault();

  }

  function addSkillTags(tagElement) {
    if(tagElement.use==true)
    {
      return <UserProfileSkillTagElement 
        tag = {tagElement.name}
        use = {tagElement.use}
      />
    }
  }
  function addAllSkillsTags(tagElement) {
  
    
      return <UserProfileSkillTagElement 
        tag = {tagElement.name}
        use = {tagElement.use}
        id = {tagElement.id}
      />
    
  }
  function toggleAddSkills(event){
    setaddSkillDisplay(!addSkillDisplay);

    event.preventDefault();
  }


  return (
    <div className="EditUserProfile">
      <div className="EditProfilePhotoPanel">
        <div
          className="EditProfileImg"
          onMouseEnter={EditDP}
          onMouseLeave={EditDP}
        >
          <img src="/images/profile.jpeg" alt="" />
          <div
            className="EditProfileImgChange"
            id="editDP"
            style={showEdit ? ToggleStyle : null}
          >
            <button className="EditProfileImgChangeButton">
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
        <div className="EditProfileUsernameDisplay">jayfanse29</div>
      </div>

      <div className="EditProfileMainPanel">
        <div
          className="EditPerosnalInfoDisplay"
          style={
            isEditSelected.PersonalInfo == "true"
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <h3>Perosnal Info</h3>
          <form action="">
            <div className="EditFormFrame">
              <span>First Name</span>
              <span>:</span>
              <input
                id="fname"
                type="text"
                placeholder="First Name here"
                value={fname}
                onChange={changeFName}
                required
              />
              <span>Last Name</span>
              <span>:</span>{" "}
              <input
                type="text"
                value={lname}
                onChange={changeLName}
                required
              />
              <span>About</span>
              <span>:</span>{" "}
              <textarea
                name=""
                id=""
                cols="15"
                rows="6"
                value={about}
                onChange={changeAbout}
                required
              ></textarea>
              <span>LinkedIn Profile</span>
              <span>:</span>{" "}
              <input type="text" value={linkedIn} onChange={changeLinkedIn} />
              <span style={{ border: "none" }}>Skills</span>
              <span style={{ border: "none" }}>:</span>{" "}
              <div className="skillTagContainer"
              style={addSkillDisplay?{display:"none"} : {display:"flex"}}>
                {tagCollection.map(addSkillTags)}
                <button className='UserProfileAddSkillTag'
                onClick={toggleAddSkills}
                >
                  Edit skills
                </button>
                </div>
                <div className="allSkillsTagContainer"
                style={addSkillDisplay?{display:"flex"} : {display:"none"}}>
                {tagCollection.map(addAllSkillsTags)}
                <button className='UserProfileAddSkillTag'
                onClick={toggleAddSkills}
                >
                  Save
                </button>

                </div>
              <div className="EditSaveButtonDiv">
                <button onClick={savePersonal}>Save</button>
              </div>
            </div>
          </form>
        </div>
        <div
          className="EditAccountInfoDisplay"
          style={
            isEditSelected.AccountInfo == "true"
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <h3>Account</h3>
          <form action="">
            <div className="EditFormFrame">
              <span>Username</span>
              <span>:</span>
              <input type="text" value={username} onChange={changeUsername} />
              <span>E-mail</span>
              <span>:</span>
              <input type="text" value={email} onChange={changeEmail} />
              <div
                className="EditSaveButtonDiv"
                style={{ justifyContent: "space-between" }}
              >
                <button>Logout</button>
                <button>Save</button>
              </div>
            </div>
          </form>
        </div>
        <div
          className="EditCollegeInfoDisplay"
          style={
            isEditSelected.CollegeInfo == "true"
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <h3>College Details</h3>
          <form action="">
            <div className="EditFormFrame">
              <span>Programme</span>
              <span>:</span>
              <select>
                <option>Bachelor's of Engineering</option>
                <option>Master's of Engineering</option>
                <option>Bachelor's of Computer Applications</option>
                <option>Master's of Computer Applications</option>
              </select>
              <span>Department</span>
              <span>:</span>
              <select>
                <option>Computer Science and Engineering</option>
                <option>Electronics and Communication Engineering</option>
                <option>Electrical Engineering</option>
              </select>
              <span>Graduation Year</span>
              <span>:</span>
              <select>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
              </select>
              <div className="EditSaveButtonDiv">
                <button>Save</button>
              </div>
            </div>
          </form>
        </div>
        <div
          style={
            isEditSelected.PasswordInfo == "true"
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <h3>Change Password</h3>
          <form action="">
            <div className="EditFormFrame">
              <span>Current Password</span>
              <span>:</span>
              <input type="text" />
              <span>New Password</span>
              <span>:</span>
              <input type="text" />
              <span>Confirm Password</span>
              <span>:</span>
              <input type="text" />
              <div className="EditSaveButtonDiv">
                <button>Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="EditProfileSelectionPanel">
        <div
          name="ProfileInfo"
          style={
            isEditSelected.PersonalInfo == "true" ? EditSelectionStyle : null
          }
          onClick={() => {
            return changeEditSelected("PersonalInfo");
          }}
        >
          Personal Info
        </div>
        <div
          name="CollegeInfo"
          style={
            isEditSelected.CollegeInfo == "true" ? EditSelectionStyle : null
          }
          onClick={() => {
            return changeEditSelected("CollegeInfo");
          }}
        >
          College Details
        </div>
        <div
          name="AccountInfo"
          style={
            isEditSelected.AccountInfo == "true" ? EditSelectionStyle : null
          }
          onClick={() => {
            return changeEditSelected("AccountInfo");
          }}
        >
          Account
        </div>
        <div
          name="AccountInfo"
          style={
            isEditSelected.PasswordInfo == "true" ? EditSelectionStyle : null
          }
          onClick={() => {
            return changeEditSelected("PasswordInfo");
          }}
        >
          Change Password
        </div>
      </div>
    </div>
  );
}

export default EditUserProfile;
