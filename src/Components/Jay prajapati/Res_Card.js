import React from 'react'

import './Card.css'
import { Link } from 'react-router-dom'

export default function Res_Card(props) {
    return (
        <div className="card" >
            <Link to={ props.sub_link}>
            <div className="card-body">
                <img src={props.resimg} className='lg'/>
                <div id='imgcont'>
                <span id='topic'>{props.topic}</span>
                <div id="details">
                <h5 className="card-title">Notes : {props.n_count} | Videos : {props.vd_count} | Books : {props.b_count} | Papers : {props.qp_count}</h5>
                </div>
                
                </div>
            </div>
            </Link>
        </div>
    )
}
