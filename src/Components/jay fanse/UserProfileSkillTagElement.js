import React, { useState } from 'react'
import "./UserProfileSkillTagElement.css"

function UserProfileSkillTagElement(props) {

  const [isTagSelected,setTagSelected] = useState(false);

  const selectedTagStyle = {
    backgroundColor : "red"
  }

  function toggleTagSelection(){
    setTagSelected(!isTagSelected);
    // console.log(isTagSelected);
  }

  return (
    <div className='UserProfileSkillTag'
    style={isTagSelected? selectedTagStyle :null}
    >
    <label htmlFor={props.id}
    onClick={toggleTagSelection}
    >
      {props.tag}
    </label>
    <input 
    type='checkbox' 
    hidden
    className='UserProfileSkillTagCheckbox' 
    value={props.tag}
    id={props.id}
    />
    </div>
    // </input>
  )
}

export default UserProfileSkillTagElement