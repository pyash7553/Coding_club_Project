import React from 'react';
import './App.css';
import Myfooter from './Components/Myfooter.js'
import Foundercard from './Components/Foundercard';
import founderinfo from './Components/Founderinfo';
import Resources from './Components/Resources';
import Projects from './Components/Projects';
import News from './Components/News';
import ProjCollab from './Components/ProjCollab';
import Discussion from './Components/Discussion';
import ProjectDisplay from './Components/Innercomp/ProjectDisplay';
import Contest_main from './Components/Contest components/Contest_main';
import Ask_Question, { question_open } from './Components/Question_answer/Ask_Question';
import Giv_answer from './Components/Question_answer/Give_answer';


//kaushal's component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar_before_login from './Components/kaushal/Navbar_before_login';
import Home_page_before_login from './Components/kaushal/Home_page_before_login';
import Sign_in_page from './Components/kaushal/Sign_in_page';
import Sign_up_first_page from './Components/kaushal/Sign_up_first_page';
import Sign_up_second_page from './Components/kaushal/Sign_up_second_page';
import Sign_up_third_page from './Components/kaushal/Sign_up_third_page';
import LoginHomePage from './Components/jay fanse/LoginHomePage';
import ArticlesNewsHomePage from './Components/jay fanse/ArticlesNewsHomePage';
import Navbar_after_login from './Components/kaushal/Navbar_after_login';
import ResourcesHome from './Components/Jay prajapati/ResourcesHome';
import ResourcesContent from './Components/jay fanse/ResourcesContent';
import Discussion_Forums from './Components/Jay prajapati/Discussion_Forums';
import Question_data from './Components/Jay prajapati/Question_data';
import ProjectMain from './Components/Jay prajapati/ProjectDetails';
import UserProfile from './Components/jay fanse/UserProfile';
import EditUserProfile from './Components/jay fanse/EditUserProfile';
import Project_Collabration from './Components/kaushal/Project_Collabration';

function HomeBeforeLogin() {
  return (
    <>
      <Navbar_before_login />
      <Home_page_before_login />
      <Resources/>
      <News/>
      <Projects/>
      <ProjCollab/>
      <Discussion/>
    <div className='founderinfo'>
      <h1 className='foundercardline'>
        The Founders And Current Operator Of MSU Codeing Club Website
      </h1>
      {founderinfo.map(function Founderinfocard(element){
          return(
              <Foundercard key = {element.id} name = {element.name} post = {element.post} image = {element.image}></Foundercard>
          );
      })}
      </div>
      <Myfooter/>
    </>
  )
}



function App() {
  return (
    <>
    
    <div>
<Router>
        <Routes>
          <Route path='/' element={<HomeBeforeLogin />} />
        </Routes>
      
        <Routes>
          <Route path='/signin' element={<Sign_in_page />} />
        </Routes>

        <Routes>
          <Route path='/signup/step-1' element={<Sign_up_first_page />} />
        </Routes>

        <Routes>
          <Route path='/signup/step-2' element={<Sign_up_second_page />} />
        </Routes>

        <Routes>
          <Route path='/signup/step-3' element={<Sign_up_third_page />} />
        </Routes>

        <Routes>
          <Route path='/home' element={<LoginHomePage />} />
        </Routes>

        <Routes>
          <Route path='/contest' element={<Contest_main />} />
        </Routes>
        
        <Routes>
          <Route path='/article&news' element={<ArticlesNewsHomePage />} />
        </Routes>

        <Routes>
          <Route path='/resources' element={<ResourcesHome/>} />
        </Routes>

        <Routes>
          <Route path='/resources/rescontent' element={<ResourcesContent/>} />
        </Routes>

        <Routes>
          <Route path='/discusion' element={<Discussion_Forums/>} />
        </Routes>

        <Routes>
          <Route path='/discusion/question' element={<Question_data/>} />
        </Routes>

        <Routes>
          <Route path='/project' element={<ProjectMain/>} />
        </Routes>

        <Routes>
          <Route path='/profile' element={<UserProfile/>} />
        </Routes>

        <Routes>
          <Route path='/profile/edit_profile' element={<EditUserProfile/>} />
        </Routes>

        <Routes>
          <Route path='/project_collab' element={<Project_Collabration/>} />
        </Routes>

        
</Router>

</div>

      
      

      {/* <ProjectDisplay
        imgurl = "https://img.freepik.com/free-vector/collab-concept-illustration_114360-3960.jpg?w=740&t=st=1694080167~exp=1694080767~hmac=2f03780fcc6038f49bc8b29f250f90803b682439a539981f1d9f459c6a7157fa"
        name = "Project Name"
        discription = "Project Discription in 2-3 line"
        tech = "HTML, CSS, JavaScript, ReactJs, MongoDB, Node.JS"
      />
      <ProjectDisplay
        imgurl = "https://img.freepik.com/free-vector/collab-concept-illustration_114360-3960.jpg?w=740&t=st=1694080167~exp=1694080767~hmac=2f03780fcc6038f49bc8b29f250f90803b682439a539981f1d9f459c6a7157fa"
        name = "Project"
        discription = "Project Discription in 2-3 line"
        tech = "HTML, CSS, JavaScript, ReactJs, MongoDB, Node.JS"
      /> */}


      {/* <Contest_main/> */}
      {/* <Ask_Question/>
      <input type='button' onClick={question_open} value={'open'}/> */}
      {/* <Giv_answer/> */}



    </>
  );
}

export default App;
