import { useEffect, useState } from 'react'
import React from 'react'
import RecentHeading from './RecentHeading'
import RecentUpdatesPanel from './RecentUpdatesPanel'
import ArticlesNewsMore from './ArticlesNewsMore';
import ArticlesNewsLoginPage from './ArticleNewsLoginPage';

function NewUpdates(props) {

  const [news,setNews]=useState([]);

  useEffect(() => {
    props.title=="News" ? 

    fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=876ed1ab1a2545c18ffdb151c871e344")
      .then(response => response.json())
      .then(
          (quote) => {
            // console.log(quote);
            setNews(quote.articles);
            console.log(quote.articles);
      })
      :
      fetch("https://newsapi.org/v2/everything?q=apple&from=2023-10-19&to=2023-10-19&sortBy=popularity&apiKey=876ed1ab1a2545c18ffdb151c871e344")
      .then(response => response.json())
      .then(
          (quote) => {
            // console.log(quote);
            setNews(quote.articles);
            console.log(quote.articles);
      })
  }, [props.title])

  return (
    <div>
        <RecentHeading heading={`Checkout Latest ${props.title}`} 
        link={`/article&news/?userID=${props.userID}`}
        isArticleSelected={props.isArticleSelected}
        />
        
        {/* <RecentUpdatesPanel/> */}
        {news.length!=0 ? 
        <ArticlesNewsLoginPage news={news}/>
        :null}
    </div>
  )
}

export default NewUpdates