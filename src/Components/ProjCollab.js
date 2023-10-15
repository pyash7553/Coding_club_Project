import React from "react";
import './ProjCollab.css';


export default function ProjCollab(){

    return(
        <div className="projcollab">
            <div className="image">
                <img src="/images/ProjCollab.jpg" alt="Project Collabration image"></img>
            </div>
            <div className="PCdiscription">
                <p className="PCdischead">Current Running Projects</p>
                <p className="PCdiscnode">
                    Take a Part And Collaborate in Current Running Projects 
                </p>
                <button className="btnprojcollab">Collaborate</button>
            </div>
            
        </div>
    );

}