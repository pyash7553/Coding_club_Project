import React from 'react'
import "./RecentHeading.css"
import { Link } from 'react-router-dom'

function RecentHeading(props) {
  return (
    <div className='recentHeading'>
        <h1>{props.heading}</h1>
        <button className='recentHeadingButton'>
          <Link to={props.link}>
          View More
          </Link>
          </button>
    </div>
  )
}

export default RecentHeading