import React from "react";
import './Discussion.css';


export default function Discussion(){

    return(
        <div className="discussion">
            <div className="image">
                <img src="/images/Discussion.jpg" alt="Discussion image"></img>
            </div>
            <div className="Ddiscription">
                <p className="Ddischead">Discussion</p>
                <p className="Ddiscnode">
                    Take a Part In Discussion, Ask Your Question, And Give The Answer Of Othres Question. 
                </p>
                <button className="btndiscussion">Discuss</button>
            </div>
            
        </div>
    );

}