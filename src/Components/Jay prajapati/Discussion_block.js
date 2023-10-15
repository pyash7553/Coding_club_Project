import React from 'react'
import { Link } from 'react-router-dom'

export default function Discussion_block(props) {
    function getTag(tag) {
        return (
            <div className="q_tag">{tag}</div>
        )
    }
  
    return (
        <>
        <Link  to={props.id}>
        <div id='discussion_block'>
            
            <div id='asker'>
                <a href="#"><div id='pfp_div'><img src={props.pfp} alt="" id='pfpic' /></div></a>
                <div id='asker_id'><a href="#">{props.User_id}</a></div>
            </div>
            <div id='ques'>
                {props.question}
            </div>
            <div id="ques_tags">
                {props.tags.map(getTag)}
                <div id='q_date'>{props.date}</div>
            </div>
            
        </div>
        </Link>
        </>
  )
}
