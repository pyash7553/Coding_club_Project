import React from "react";
import './Give_answer.css';

export function reply_close(){
    const closebtn = document.getElementById("reply_main");
    // console.log(closebtn);
    closebtn.style.display = "none";
}

export function reply_open(){
    const closebtn = document.getElementById("reply_main");
    // console.log(closebtn);
    closebtn.style.display = "block";
}

function Give_answer() {

    

    return ( 
        <form action="/" className="reply_main" id="reply_main">
            <div className="r_close" onClick={reply_close}>
                <img src="/images/close_image.webp"></img>
            </div>
            <p className="reply">Give Your Answer</p>
            <div className="r_reply">
                <label htmlFor="reply_text">Reply :</label>
                <p></p>
                <textarea name="reply_text" id="reply_text" cols="" rows="2"></textarea>
            </div>
            <div className="r_code">
                <label htmlFor="code_text">Code :</label>
                <p></p>
                <textarea name="code_text" id="code_text" cols="" rows="2"></textarea>
            </div>

            <input type="submit" value={"Submit"} className="r_submit"/>

        </form>
     );
}

export default Give_answer;