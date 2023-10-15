import React, {useState} from "react";
import ArticleNewsLatestDiv from './ArticleNewsLatestDiv';
import ArticleNewsTopBanner from './ArticleNewsTopBanner';
import "./ArticlesNewsHomePage.css"
import Navbar_after_login from "../kaushal/Navbar_after_login";

function ArticlesNewsHomePage() {
  
    const [isArticleSelected, setArticleSelected] = useState(true);

    function onToggle(isArticle) {
    setArticleSelected(isArticle);
  }

  return (
    <>
    <Navbar_after_login/>
    <div className="background-color-ArticlesNews">
      
      <ArticleNewsTopBanner onChange={onToggle} />
      <ArticleNewsLatestDiv isArticleSelected={isArticleSelected} />
    </div>
    </>
  );
}

export default ArticlesNewsHomePage;
