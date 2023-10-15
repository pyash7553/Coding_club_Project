import React from 'react'
import "./ResourcesBookElement.css"

function ResourcesBookElement(props) {

  return (
    <div className="BookElement">
        <div className="BookImageDiv">
        <img src={props.url} alt=""/>
        </div>
        <div className="BookElementTitle">{props.title}</div>
        <div className="BookElementInfo">
          <div className="BookInfoGradient"></div>
          {props.edition}
        </div>
        <div className="BookElementBy">{props.author}</div>
    </div>
  )
}

export default ResourcesBookElement