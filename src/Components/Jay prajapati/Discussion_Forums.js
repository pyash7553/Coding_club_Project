import React from 'react'
import './Forums.css'
import Filter_bar from './Filter_bar.js'
import forumGenerator from './Discussion_data.js'
import Ask_Question from '../Question_answer/Ask_Question'

export default function Forums() {
  return (
    <>
      <Filter_bar/>
      <Ask_Question/>
      <div id='discussionbody'>
        <div className="discbanner">
          <div id='disc_header'>
            <h1>Discussion Forums</h1>
          </div>
        </div>
        {forumGenerator()}
      </div>
    </>
  )
}
