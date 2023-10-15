import React from "react";
import './Ask_Question.css';

function question_close(){
    const closebtn = document.getElementById("question_main");
    // console.log(closebtn);
    closebtn.style.display = "none";
}

export function question_open(){
    const closebtn = document.getElementById("question_main");
    // console.log(closebtn);
    closebtn.style.display = "block";
}

export default function Ask_Question(){
    
    return(
        <form className="question_main" id="question_main">
            <div className="q_close" onClick={question_close}>
                <img src="/images/close_image.webp"></img>
            </div>
            <p className="question">Ask Your Question</p>
            <div className="q_tital">
                <label htmlFor="tital_text">Tital :</label>
                <p></p>
                <textarea name="tital_text" id="tital_text" cols="" rows=""></textarea>
            </div>
            <div className="q_tegs">
                <label htmlFor="tegs_text">Tegs :</label>
                <p></p>
                <textarea name="tegs_text" id="tegs_text" cols="" rows=""></textarea>
            </div>
            <div className="q_desc">
                <label htmlFor="Description_text">Description :</label>
                <p></p>
                <textarea name="Description_text" id="Description_text" cols="" rows="2"></textarea>
            </div>
            <div className="q_code">
                <label htmlFor="code_text">Code :</label>
                <p></p>
                <textarea name="code_text" id="code_text" cols="" rows="2"></textarea>
            </div>

            <input type="submit" value={"Submit"} className="q_submit"/>

        </form>
    ); 
}
