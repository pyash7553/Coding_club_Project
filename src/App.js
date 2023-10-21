import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// soham zadafiya
import './App.css';
import Myfooter from './Components/Myfooter.js'
import Foundercard from './Components/Foundercard';
import founderinfo from './Components/Founderinfo';
import Resources from './Components/Resources';
import Projects from './Components/Projects';
import News from './Components/News';
import ProjCollab from './Components/ProjCollab';
import Discussion from './Components/Discussion';
import Contest_main from './Components/Contest components/Contest_main';


//kaushal's component
import Navbar_before_login from './Components/kaushal/Navbar_before_login';
import Home_page_before_login from './Components/kaushal/Home_page_before_login';
import Sign_in_page from './Components/kaushal/Sign_in_page';
import Sign_up_first_page from './Components/kaushal/Sign_up_first_page';
import Sign_up_second_page from './Components/kaushal/Sign_up_second_page';
import Sign_up_third_page from './Components/kaushal/Sign_up_third_page';
import Project_Collabration from './Components/kaushal/Project_Collabration';
import Navbar_after_login from './Components/kaushal/Navbar_after_login';
import NotFoundPage from './Components/kaushal/NotFoundPage'

// jay fanse
import LoginHomePage from './Components/jay fanse/LoginHomePage';
import ArticlesNewsHomePage from './Components/jay fanse/ArticlesNewsHomePage';
import EditUserProfile from './Components/jay fanse/EditUserProfile';
import ResourcesContent from './Components/jay fanse/ResourcesContent';
import UserProfile from './Components/jay fanse/UserProfile';

// jay prajapati
import ResourcesHome from './Components/Jay prajapati/ResourcesHome';
import Discussion_Forums from './Components/Jay prajapati/Discussion_Forums';
import Question_data from './Components/Jay prajapati/Question_data';
import ProjectMain from './Components/Jay prajapati/ProjectMain';

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
          {/* <Router>
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
                    <Route path='/discussion' element={<Discussion_Forums/>} />
                  </Routes>

                  <Routes>
                    <Route path='/discussion/question' element={<Question_data/>} />
                  </Routes>

                  <Routes>
                    <Route path="/project" element={<ProjectMain/>} />
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
          </Router> */}

<Router>
        <Routes>
          <Route path='/' element={<HomeBeforeLogin />} />
          <Route path='/signin' element={<Sign_in_page />} />
          <Route path='/signup/step-1' element={<Sign_up_first_page />} />
          <Route path='/signup/step-2' element={<Sign_up_second_page />} />
          <Route path='/signup/step-3' element={<Sign_up_third_page />} />
          <Route path='/home' element={<LoginHomePage />} />
          <Route path='/contest' element={<Contest_main />} />
          <Route path='/article&news' element={<ArticlesNewsHomePage />} />
          <Route path='/resources' element={<ResourcesHome/>} />
          <Route path='/resources/rescontent' element={<ResourcesContent/>} />
          <Route path='/discussion' element={<Discussion_Forums/>} />
          <Route path='/discussion/question' element={<Question_data/>} />
          <Route path='/project' element={<ProjectMain/>} />
          <Route path='/profile' element={<UserProfile/>} />
          <Route path='/profile/edit_profile' element={<EditUserProfile/>} />
          <Route path='/project_collab' element={<Project_Collabration/>} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>

    </>
  );
}

export default App;
