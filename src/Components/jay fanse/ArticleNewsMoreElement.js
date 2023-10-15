import React from 'react'
import "./ArticleNewsMoreElement.css"
// import icon from "../images/ArticleBanner.jpg"

function ArticleNewsMoreElement(props) {
  return (
    <div className="ArticleNewsMoreElement">
        <div className="ArticleMoreImageDiv">
        <img src={props.url} alt=""/>
        </div>
        <div className="ArticleNewsMoreElementTitle">{props.title}</div>
        <div className="ArticleNewsMoreElementInfo">
          <div className="MoreInfoGradient"></div>
          {props.info}
        </div>
        <div className="ArticleNewsMoreElementBy">{props.by}</div>
    </div>
  )
}

export default ArticleNewsMoreElement