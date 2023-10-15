import React from "react";
import './News.css';


export default function News(){

    return(
        <div className="news">
            <div className="image">
                <img src="/images/News.jpg" alt="News image"></img>
            </div>
            <div className="newsdiscription">
                <p className="newsdischead">Know The Letest News</p>
                <p className="newsdiscnode">
                    Get The Letest News Of Technology And Computer Science Field
                </p>
                <button className="btnnews">News</button>
            </div>
            
        </div>
    );

}