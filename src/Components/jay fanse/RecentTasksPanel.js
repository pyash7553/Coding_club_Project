import React from 'react'
import RecentTasksCards from './RecentTasksCards'
import "./RecentTasksPanel.css"
import RecentTasksCardsInfo from './RecentTasksInfo'

function RecentTasksPanel(props) {

  function addCards(cardItem){
    return (
      <RecentTasksCards 
      heading = {cardItem.heading}
      subheading = {cardItem.subheading}
      button = {cardItem.button}
      icon = {cardItem.icon}/>
    )
  }

  return (
    <div className='recentPanel'>
          {RecentTasksCardsInfo.map(addCards)}

    </div>
  )
}

export default RecentTasksPanel