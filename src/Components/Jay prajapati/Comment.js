import React from 'react'
import './Comment.css'
import Upvote from './upvote.js'

export default function Comment(props) {
    return (
        <div className='c_class'>
            <div id='commenter'>
                <a href={`../profile?visitID=${props.commenter_id}`}><div id='pfp_div'><img src={`data:Image/jpeg;base64,${props.pfp}`} alt="" id='pfpic' /></div></a>
                <div id='commenter_id'><a href={`../profile?visitID=${props.commenter_id}`}>{props.commenter}</a></div>
            </div>
            <div id="com_div">
                {props.comment}
            </div>
            <div className='snippet'>
                <pre>
                        {props.code}
                </pre>
            </div>
            <div id='feed_bar' className='d-flex'>
                <div id='upvote_div'>
                    <Upvote value={props.value} Id={props._id} type='r' count={props.up_count} user={props.userID}/>
                    {/* {props.up_count} */}
                </div>
                
                <div id='date_div'>
                    {props.date}
                </div>
            </div>
        </div>
    )
}
