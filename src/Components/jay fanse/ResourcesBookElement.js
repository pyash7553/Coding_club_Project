import React from 'react'
import "./ResourcesBookElement.css"

function ResourcesBookElement(props) {

  const base64Img = `data:image/png;base64,${props.thumbnail}`;

  return (
    <div className="BookElement">
        <div className="BookImageDiv">
        <img src={base64Img} alt="" height="300vh" width="100vh"/>
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