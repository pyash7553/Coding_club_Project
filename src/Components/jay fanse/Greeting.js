import React, {useState} from "react";
import "./Greeting.css";
// import icon from "/public/images/bell.webp";
// import icon2 from "/public/images/AI.png";

function Greeting(){
    
    const [isNotiClick,setNotiClick] = useState(false);
   
    const NotiStyle = {
        width : "90vh",
        height : "45vh"
    }

    const notiIcon = {
        img : "images/AI.png"
    }
    
    function expand(){
        setNotiClick(!isNotiClick);
    }

    return (
        <div className="greetmain">
            <h1 className="greet">Hey <span className="greetName">Jay</span>,</h1>
            <div className="Notify" id="noti" 
            style= {isNotiClick ?  NotiStyle : null} >
            
                <img className="NotifyImg" src="images/bell.webp" alt=""  onClick={expand}/>
            </div>
        </div>
    )
}

export default Greeting;