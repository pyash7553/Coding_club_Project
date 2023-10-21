import React, { useState } from 'react'
import "./ResourcesBooksDisplay.css"
import ResourcesBookElement from './ResourcesBookElement'
import ResourcesBookInfo from './ResourcesBookInfo'

function ResourcesBooksDisplay(props) {

  const booksLen = props.books.length;
  const bgStyle = {
    backgroundImage : "none",
    height : "fit-content"
  }

    function addBooks(BookElement){
        return <ResourcesBookElement 
        thumbnail = {BookElement.thumbnail}
        title = {BookElement.title}
        edition = {BookElement.edition}
        author = {BookElement.author}
        />
    }

  return (
    <div className='ResourcesBooksDisplay' style={booksLen!=0 ? bgStyle : null}>
        {props.books.map(addBooks)}
    </div>
  )
}

export default ResourcesBooksDisplay