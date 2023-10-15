import React from 'react'
import "./RecentHeading.css"

function RecentHeading(props) {
  return (
    <div className='recentHeading'>
        <h1>{props.heading}</h1>
        <button className='recentHeadingButton'>View More</button>
    </div>
  )
}

export default RecentHeading