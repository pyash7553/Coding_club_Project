import React from 'react'
import ResourcesNotesElement from "./ResourcesNotesElement"
import ResourcesNotesInfo from "./ResourcesNotesInfo"
import "./ResourcesNotesDisplay.css"

function ResourcesNotesDisplay() {
  
    function addNotes(NoteElement){
        return <ResourcesNotesElement 
        title = {NoteElement.title}
        link = {NoteElement.link}
        />
    }
  
    return (

    <div className='ResourcesNotesDisplay'>
        {ResourcesNotesInfo.map(addNotes)}
    </div>
  )
}

export default ResourcesNotesDisplay