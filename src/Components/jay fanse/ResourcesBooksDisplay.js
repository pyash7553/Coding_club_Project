import React from 'react'
import "./ResourcesBooksDisplay.css"
import ResourcesBookElement from './ResourcesBookElement'
import ResourcesBookInfo from './ResourcesBookInfo'

function ResourcesBooksDisplay() {

    function addBooks(BookElement){
        return <ResourcesBookElement 
        url = {BookElement.url}
        title = {BookElement.title}
        edition = {BookElement.edition}
        author = {BookElement.author}
        />
    }

  return (
    <div className='ResourcesBooksDisplay'>
        {ResourcesBookInfo.map(addBooks)}
    </div>
  )
}

export default ResourcesBooksDisplay