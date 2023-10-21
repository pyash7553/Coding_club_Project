import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Discussion_block(props) {
    function getTag(tag) {
        return (
            <div className="q_tag">{tag}</div>
        )
    }
    const location = useLocation();
    const userID = sessionStorage.getItem('userID')

    return (
        <div id='discussion_block'>
            <a href={`discussion/question?q_id=${props.q_id}`}>
                <div className='asker' id={props._id}>
                    <a href={`profile?visitID=${props.asker_id}`}><div id='pfp_div'><img src={`data:Image/jpeg;base64,${props.pfp}`} alt="" id='pfpic' /></div></a>
                    <div id='asker_id'><a href={`profile?visitID=${props.asker_id}`}>{props.asker_username}</a></div>
                </div>
                <div id='ques'>
                    {props.question}
                </div>
                <div id="ques_tags">
                    {props.tags.map(getTag)}
                    <div id='q_date'>{props.date}</div>
                </div>
            </a>
        </div>
    )
}
