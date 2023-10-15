import React from "react";
import './Running_contest.css';

export default function Running_contest(props){
    return(
        <div className="running_contest_main">
            <div className="contest_flex">
            <div className="runnig_contest_name"><p>{props.name}</p></div>
            <div className="contest_start_btn">
            <button><a href={props.start} target="_blank">Start</a></button></div>
            </div>
            <div className="running_date_time">
                <p>Date : {props.startdate}</p>
                <p>Time : {props.time}</p>
            </div>
        </div>
    );
}