import React, { useEffect, useState } from 'react'
import './Home_page_before_login.css';
import { Link } from 'react-router-dom';

function Home_page_before_login() {

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
      fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(
            (quote) => {
            setQuote(quote.content);
            setAuthor(quote.author);
        })
    }, [])
    
    const changeQuoteHandler = () => {
        fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(
            (quote) => {
            setQuote(quote.content);
            setAuthor(quote.author);
        })
    }

  return (
    <>
        <div style={{display: 'flex'}}>
            <div className='welcomeContainer'>
                <h2 className="welcomeToCode">Welcome to <br/><span> Code-Minions.. </span> </h2>
                <h4 className="oneLiner">Start your coding journey with codeMinions by joining us...</h4>
                <Link to={'signin'}> <input type="button" value="Get Started" className="get_start" /> </Link>          
            </div>
            {/* <div className='newDesign'>
                <ul className='designUL'>
                    <li className='newLi'>
                        <a href="#" onclick="kevin()">
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span class="fab fa-css3-alt"> K </span>
                        </a>
                    </li>

                    <li className='newLi'>
                        <a href="#" onclick="kevin()">
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span class="fab fa-css3-alt"> K </span>
                        </a>
                    </li>

                    <li className='newLi'>
                        <a href="#" onclick="kevin()">
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span class="fab fa-css3-alt"> K </span>
                        </a>
                    </li>

                    <li className='newLi'>
                        <a href="#" onclick="kevin()">
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span class="fab fa-css3-alt"> K </span>
                        </a>
                    </li>

                    <li className='newLi'>
                        <a href="#" onclick="kevin()">
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span class="fab fa-css3-alt"> K </span>
                        </a>
                    </li>

                    <li className='newLi'>
                        <a href="#" onclick="kevin()">
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span className='designSpan'></span>
                            <span class="fab fa-css3-alt"> K </span>
                        </a>
                    </li>
                    
                </ul>
            </div> */}
        </div>
        <div className='quoteContainer'>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <h3 className='quoteTitle'>Quote</h3>
                <input type="button" value="New Quote" className="new_quote_btn"  onClick={changeQuoteHandler} />
            </div>
            <hr/>
            <div style={{display: 'block'}}>
            <div id='openQuote'/>
                <p className='quoteContent'>{quote}</p>
            <div id='closeQuote' />
            <div className='authorName'> <span> ~ {author} </span> </div>
            </div>
        </div>
    </>
  )
}

export default Home_page_before_login