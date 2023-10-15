import React from "react";
import './Completed_contest.css';

export default function Completed_contest(props){


    return(
        <div className="completed_contest_main">
            <div className="completed_contest_flex">
            <div className="completed_contest_name"><p>{props.name}</p></div>
            <div className="completed_contest_btn">
                <button><a href={props.result} target="_blanck">Result</a></button>
                <button><a href={props.solution} target="_blanck">Solution</a></button>

                </div>
            </div>
            <div className="completed_date_time">
                <p>Date : {props.startdate}</p>
                <p>Time : {props.time}</p>
            </div>
        </div>
    );
}