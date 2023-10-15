import React from 'react'
import './Question.css'
import Upvote from './upvote.js';
import comment_icon from './comment_icon.js';

//for answer of question
import Give_answer from '../Question_answer/Give_answer';
import { reply_close,reply_open } from '../Question_answer/Give_answer';


export default function Question(props) {
    let x = "This         is a \nString";
    return (
        <>  
            <Give_answer/>
            <div className='q_class'>
                <div id='asker'>
                    <a href="#"><div id='pfp_div'><img src={props.pfp} alt="" id='pfpic' /></div></a>
                    <div id='asker_id'><a href="#">{props.User_id}</a></div>
                </div>
                <h2 id='Que_statement'>
                    {props.question}
                </h2>
                <div id="des_div">
                    {props.description}
                </div>

                <div className='snippet'>

                    <pre>
                        <code>
                            {props.code}
                        </code>
                    </pre>
                </div>
                <div id='feed_bar' className='d-flex'>
                    <div id='upvote_div'>
                        {/* <button>&</button> */}
                        <Upvote></Upvote>
                        {props.up_count}
                    </div>
                    <div id='comment_div'>
                        <button id='com_button' onClick={reply_open}>{comment_icon()} Comment</button>
                    </div>
                    <div id='date_div'>
                        {props.date}
                    </div>
                </div>
            </div>
            <div id='reply_head'>
                Replies:
            </div>
        </>
    )
}
