import React from 'react'
import "./ResourcesNotesElement.css"

function ResourcesNotesElement(props) {
  return (

    <div className="NoteElement">
        <div className="NoteElementTitle">{props.title}</div>
    </div>
  )
}

export default ResourcesNotesElement