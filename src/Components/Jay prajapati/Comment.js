import React from 'react'
import './Comment.css'
import Upvote from './upvote.js'

export default function Comment(props) {
    return (
        <div className='c_class'>
            <div id='commenter'>
                <a href="#"><div id='pfp_div'><img src={props.pfp} alt="" id='pfpic' /></div></a>
                <div id='commenter_id'><a href="#">{props.User_id}</a></div>
            </div>
            <div id="com_div">
                {props.comment}
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
                    <Upvote/>
                    {props.up_count}
                </div>
                
                <div id='date_div'>
                    {props.date}
                </div>
            </div>
        </div>
    )
}
