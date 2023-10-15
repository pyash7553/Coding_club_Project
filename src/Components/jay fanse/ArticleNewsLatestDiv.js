import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import ArticleNewsLatestElement from './ArticleNewsLatestElement';
import "./ArticleNewsLatestDiv.css"
import ArticlesNewsMore from './ArticlesNewsMore';
import ArticleContentInfo from './ArticleContentInfo';
import NewsContentInfo from './NewsContentInfo';
// import downArrow from "../images/down_arrow.png"
// import upArrow from "../images/up_arrow.png"

// const options = {
//   method: 'GET',
//   url: 'https://article-extractor-and-summarizer.p.rapidapi.com/extract',
//   params: {
//     url: 'https://time.com/6266679/musk-ai-open-letter/'
//   },
//   headers: {
//     'X-RapidAPI-Key': '7e3dd74e1fmshabbd84e907741dcp1a97e9jsn42bb8fcd15fd',
//     'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
//   }
// };

function ArticleNewsLatestDiv(props) {

  var ArticlesApiInfo=[];

//   useEffect( () => {
//     axios.request(options).then(function(response){
//       console.log(response);
//       // ArticlesApiInfo = response.data;
//       // console.log(ArticlesApiInfo);
//     }).catch(function(err){
//       console.log(err);
//     });
// },[]);


  var type = props.isArticleSelected ? "Articles" : "News";

  
  const [Panel1,Panel2] = 
  props.isArticleSelected ? 
  [
    // ArticlesApiInfo,
    // ArticlesApiInfo
    ArticleContentInfo[ArticleContentInfo.length-1],
    ArticleContentInfo[ArticleContentInfo.length-2]
  ] : 
  [
    NewsContentInfo[NewsContentInfo.length-1],
    NewsContentInfo[NewsContentInfo.length-2]
  ];

  const [more,setMore] = useState(false);
  const [imgSrc,setImgSrc] = useState("down");
  function showMore(){
    
    setMore(!more);
    setImgSrc(more ? "down" : "up");

    if(more)
    {
      document.getElementById("showImg").src="/images/down_arrow.png";
    }
    else{
      document.getElementById("showImg").src="/images/up_arrow.png";
    }
  }
  
  
  return (
    <div className='ArticleNewsLatestDiv'>
        <div className='LatestHeading'>Latest {type}</div>
        <ArticleNewsLatestElement 
          title = {Panel1.title}
          info = {Panel1.info}
          by = {Panel1.by}
          url = {Panel1.url}
        />
        <ArticleNewsLatestElement 
        title = {Panel2.title}
        info = {Panel2.info}
        by = {Panel2.by}
        url = {Panel2.url}
        right="true"/>
        <div className='LatestHeading'>More {type}</div>
        <ArticlesNewsMore more={more} isArticleSelected={props.isArticleSelected}/>
        <div className='showMoreDiv'>
        <button className='showMoreBtn' id="showBtn" onClick={showMore}>
          <img src="/images/down_arrow.png" alt="" id="showImg"/>
        </button>
        </div>
    </div>
  )
}

export default ArticleNewsLatestDiv