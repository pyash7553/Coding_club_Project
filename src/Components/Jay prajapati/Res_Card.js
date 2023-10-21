import React, {useEffect,useState, useContext} from 'react'
import './Card.css'
import { Link, useNavigate } from 'react-router-dom'
import ResourcesContent from '../jay fanse/ResourcesContent';
import { DataContext } from './DataContext';


export default function Res_Card(props) {

    const navigate = useNavigate();

    let books=[];
    let notes=[];
    let videos=[];
    const { setFilteredData } = useContext(DataContext);
    
    function ViewContent(){
        console.log(props.topic);
        
        fetch("/resources/rescontent/")
        .then(
            response => response.json()

        ).then(
            data => {
                console.log(data);
                const filtered = data.filter(subElement => subElement.subject === props.topic);
                setFilteredData(filtered);

                navigate(props.sub_link, {state:{resources : filtered}})
                
            }
        )
        
    }    

    return (
        <div className="card" onClick={ViewContent}>
            
            <div className="card-body">
                <img src={`data:Image/jpeg;base64,${props.resimg}`} className='lg'/>
                <div id='imgcont'>
                <span id='topic'>{props.topic}</span>
                <div id="details">
                <h5 className="card-title">Notes : {props.n_count} | Videos : {props.vd_count} | Books : {props.b_count} | Papers : {props.qp_count}</h5>
                </div>
                
                </div>
            </div>
        </div>
    )
}

