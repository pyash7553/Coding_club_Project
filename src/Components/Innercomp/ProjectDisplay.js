import React from "react";
import './ProjectDisplay.css'

export default function ProjectDisplay(props) {

    var x,y;

    function f(){
        var x = document.getElementById("video_info"+props.name);
        var y = document.getElementById("btnname" + props.name);
        if (x.style.display === "none" || x.style.display === "") {

            x.style.display = "block";
            y.innerHTML = "Show Less";

        } else {
            x.style.display = "none";
            y.innerHTML = "Show More";
        }
    }

        function add(name){
            return(
                <li>{name}</li>
            );
        }

        function team(){
            if(props.team){
                return(
                    props.team.map(add)
                )
            }
        }

        function video(){
            if(props.video){
                return(
                    <source type="video/mp4" src={props.video}></source>
                )
            }
        }

        function image(){
            if(props.image){
                return(
                    <img src={props.image}  alt="project image"></img>
                )
            }
        }
        

    return (
        
        <div className="projectmain">
            <div className="projdisplay">

                <div className="projdispheader">
                    <div>
                        {/* <img src={image()}    alt="project image"></img> */}
                        {image()}
                    </div>
                    <div>
                        <h1 className="prjectname">{props.name}</h1>
                        {/* {props.team.map(add)} */}
                        <p className="projectdiscription">{props.description}</p>
                        <p className="projecttech">{props.tech}</p>
                        <button className="projdispbutton" id={"btnname" + props.name} onClick={f}>Show More</button>
                    </div>

                </div>

                <div className="video_info" id={"video_info"+props.name}>
                    <div>
                        <video controls>
                            {/* {console.log(props.video)} */}
                            {video()}
                        </video>
                    </div>
                    <div>
                        <h2>Project Information :</h2>
                        <p className="projectinfo">{props.projectinfo}</p>
                    </div>
                    <div className="teaminfo">
                        <h2>Name Of Team Member</h2>
                        <ul>
                            {team()}
                        </ul>
                        

                    </div>
                    <div className="projlink">
                        <h3>Project Link:</h3>
                        <form action={props.projectlink} target="_blank">
                            <button className="ProjectLink" type="submit">
                                Link
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


