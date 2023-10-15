import React from 'react'
import "./ArticlesNewsMore.css"
import ArticleNewsMoreElement from './ArticleNewsMoreElement'
import ArticleContentInfo from './ArticleContentInfo'
import NewsContentInfo from './NewsContentInfo';

function ArticlesNewsMore(props) {

  var toModifyArray = props.isArticleSelected ? [...ArticleContentInfo] : [...NewsContentInfo];
  const ContentInfoReverse = toModifyArray.reverse();
  var MoreContentInfo = ContentInfoReverse.slice(2,5);

  if(props.more === true)
  {
    MoreContentInfo = ContentInfoReverse.slice(2,);
  }

  function AddContent(ContentItem){
    
    return <ArticleNewsMoreElement 
    title = {ContentItem.title}
    info = {ContentItem.info}
    by = {ContentItem.by}
    url={ContentItem.url}
    />
  }

  return (
    <div className='ArticleNewsMore'>
        {MoreContentInfo.map(AddContent)}

    </div>
  )
}

export default ArticlesNewsMore