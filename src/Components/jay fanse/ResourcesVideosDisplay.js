import React from 'react'
import "./ResourcesVideosDisplay.css"
import ResourcesVideosElement from './ResourcesVideosElement'
import ResourcesVideoInfo from './ResourcesVideoInfo'

function ResourcesVideosDisplay() {

    function addVideo(videoElement){
        return <ResourcesVideosElement 
        thumbnail = {videoElement.thumbnail}
        title = {videoElement.title}
        channel = {videoElement.channel}
        source = {videoElement.source}
        />
    }

  return (
      <div className='ResourcesVideosDisplay'>
        {ResourcesVideoInfo.map(addVideo)}
    </div>
  )
}

export default ResourcesVideosDisplay