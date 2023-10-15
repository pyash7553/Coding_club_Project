import React from "react";
import'./Projects.css';



export default function Projects(){
    return(
        <div className="projects">
            <div className="image">
                <img src="/images/Project.jpg" alt="Project image"></img>
            </div>
            <div className="discription">
                <p className="dischead">All Previous Projects</p>
                <p className="discnode">
                    Get Knowledge Of All Previous Projects Which Are Made By Senior
                </p>
                <button className="btnproject">See All</button>
            </div>
            
        </div>
    );
}