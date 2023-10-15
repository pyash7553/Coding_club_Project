import React from 'react'
import "./ResourcesContent.css"
import ResourcesBooksDisplay from './ResourcesBooksDisplay';
import ResourcesVideosDisplay from './ResourcesVideosDisplay';
import ResourcesNotesDisplay from './ResourcesNotesDisplay';
import Navbar_after_login from '../kaushal/Navbar_after_login';

function ResourcesContent() {

    function changeType(active){

        document.getElementById("books").checked=false;
        document.getElementById("videos").checked=false;
        document.getElementById("notes").checked=false;
        
        document.getElementById(active).checked=true;
        console.log(active);
        
    }

  return (
       <>
       <Navbar_after_login/> 
        <div className="ResourcesContentFrame">
            

        <div className="ResourcesContentTopic">Get all your requirements at just one click!</div>

        <div className="ResourcesContentMain">
            <input type="radio" name="slider" id="books" onClick={ () => {
                changeType("books")
            }}/>
            <input type="radio" name="slider" id="videos" onClick={ () => {
                changeType("videos")
            }}/>
            <input type="radio" name="slider" id="notes" onClick={ () => {
                changeType("notes")
            }}/>

            <div class="ResourcesContentList">
                <label for="books" class="books">
                    <span>Books</span>
                </label>
                <label for="videos" class="videos">
                    <span>Videos</span>
                </label>
                <label for="notes" class="notes">
                    <span>Notes</span>
                </label>
                
                <div class="slider"></div>
            </div>

            <div class="text-content">
                <div class="books text">
                    <div class="title">Books</div>
                    <ResourcesBooksDisplay />
                </div>
                <div class="videos text">
                    <div class="title">Videos</div>
                    <ResourcesVideosDisplay />
                </div>
                <div class="notes text">
                    <div class="title">Notes</div>
                    <ResourcesNotesDisplay />
                </div>
                
            </div>
        </div>
        </div>
        </>
  )
}

export default ResourcesContent