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


    return (
        <div className="projectmain">
            <div className="projdisplay">

                <div className="projdispheader">
                    <div>
                        <img src={props.imgurl} alt="project image"></img>
                    </div>
                    <div>
                        <h1 className="prjectname">{props.name}</h1>
                        <p className="projectdiscription">{props.discription}</p>
                        <p className="projecttech">{props.tech}</p>
                        <button className="projdispbutton" id={"btnname" + props.name} onClick={f}>Show More</button>
                    </div>

                </div>

                <div className="video_info" id={"video_info"+props.name}>
                    <div>
                        <video src="https://player.vimeo.com/external/236075858.sd.mp4?s=488e67b8e35ca33ef18880b46bb4752da56a4035&profile_id=164&oauth2_token_id=57447761" controls></video>
                    </div>
                    <div>
                        <h2>Project Information :</h2>
                        <p className="projectinfo">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis ducimus, illum cum sint quibusdam excepturi aut voluptates enim, repellat veniam recusandae modi commodi expedita deserunt delectus sapiente. Exercitationem blanditiis veniam hic illo aperiam deserunt voluptatum odit saepe excepturi perspiciatis, deleniti commodi eaque ipsa quo voluptate quae sint sed impedit consequuntur labore laboriosam fugiat possimus, dignissimos eius! Ad quibusdam sint animi, voluptatum, adipisci, quae saepe et iure labore modi necessitatibus! Sed laboriosam quaerat animi dolorem vitae impedit quasi pariatur rerum quis aliquam illo cum ea cumque vero unde sequi, repellat, cupiditate exercitationem consequatur nostrum soluta laborum molestiae. Accusantium eius provident repellendus doloremque, neque, laudantium, fugiat voluptatem saepe nesciunt esse consequatur nihil nam beatae qui molestiae ipsam quas possimus. Autem, quo saepe temporibus veniam molestiae non dolore illum nesciunt voluptates possimus reiciendis in ullam beatae corporis obcaecati repellendus placeat quia sequi iure illo. Asperiores nobis est nulla earum quisquam sed dolorum beatae labore odio vitae totam dolore at provident ut accusantium voluptatem quas, perspiciatis laborum cum unde? Quaerat animi adipisci nostrum ipsum dolor. Qui deleniti unde voluptatem velit harum, eius cupiditate, aspernatur beatae, dolor alias autem obcaecati. Perferendis enim, sint id praesentium suscipit sed iste voluptatem, eaque totam incidunt eum et impedit.</p>
                    </div>
                    <div className="teaminfo">
                        <h2>Name Of Team Member</h2>
                        <ul>
                            <li>soham zadafiya</li>
                            <li>soham zadafiya</li>
                            <li>soham zadafiya</li>
                            <li>soham zadafiya</li>
                        </ul>
                    </div>
                    <div className="projlink">
                        <h3>Project Link:</h3>
                        <form action="https://google.com" target="_blank">
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

