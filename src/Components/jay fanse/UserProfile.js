import React, { useState } from "react";
import UserProfileLeftPanel from "./UserProfileLeftPanel";
import "./UserProfile.css";
import UserProfileMainPanel from "./UserProfileMainPanel";

function UserProfile() {
  const [searchValue, setSearchValue] = useState("");

  function changeSearchValue(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="userProfile">
      <div className="searchProfile">
        <input
          type="text"
          value={searchValue}
          placeholder="search username"
          onChange={changeSearchValue}
          
        />
        <button>search</button>
      </div>
      <div className="UPouterFrame">
        <div>
          <UserProfileLeftPanel />
        </div>
        <div>
          <UserProfileMainPanel />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
