import React from "react";
import './Weekly_contest.css';

export default function Weekly_contest(props){

    return(
        <div className="weekly_main">
            <img src="/images/bulbimage.png" alt="bulb image" className="bulb_image_weekly_contest"></img>
            <div className="contest_type"><p>{props.type}</p></div>
            <div className="contest_name"><p>{props.name}</p></div>
            <div className="contest_date"><p>Date : {props.startdate}</p></div>
            <div className="contest_time"><p>Time : {props.time}</p></div>
        </div>
    );
}