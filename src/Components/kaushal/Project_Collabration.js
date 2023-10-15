import React, { useState } from 'react'
// import P_Collabration from "./images/pc_4.jpg"
import "./Project_Collabration.css";
import ProjectCollabrationCard from './ProjectCollabrationCard';
import Navbar_before_login from "./Navbar_before_login";
import Navbar_after_login from './Navbar_after_login';


function Project_Collabration() {

  const [changeImage, setChangeImage] = useState('true');

  return (
    <>
    <Navbar_after_login />
    <div className='projectCollabrationContainer'>
      <div style={{width: "85%"}}>
        <img id='pc_image' src="/images/pc_4.jpg" alt='PC' />
        <h2 className='projectTitle'>Project Collabration</h2>
        <p className='project_collabration_oneliner'>Talent wins games, but teamwork and intelligence win championships.</p>
      </div>
      <div style={{width: '85%', display: 'flex', justifyContent: 'space-between'}}>
        <button className={changeImage ? 'addProjectCollabrationBtn changeAddImage' : 'addProjectCollabrationBtn'} 
          onMouseOut={() => setChangeImage(true)}
          onMouseOver={()=> setChangeImage(false)}> Add </button>
        {/* <Filter_bar /> */}

        
      </div>
        <hr style={{width: '85%'}}/>
        <ProjectCollabrationCard />
        <ProjectCollabrationCard />
    </div>
    </>
  )
}

export default Project_Collabration