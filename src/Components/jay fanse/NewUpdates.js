import React from 'react'
import RecentHeading from './RecentHeading'
import RecentUpdatesPanel from './RecentUpdatesPanel'

function NewUpdates() {
  return (
    <div>
        <RecentHeading heading="Checkout Latest Articles & Blogs"/>
        <RecentUpdatesPanel/>
    </div>
  )
}

export default NewUpdates