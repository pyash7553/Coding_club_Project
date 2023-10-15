import React from 'react'
import './Discussion_Forums.css'
import forumGenerator from './Discussion_data.js'
import Navbar_after_login from '../kaushal/Navbar_after_login'

export default function Discussion_Forums() {
  return (
    <>
    <Navbar_after_login/>
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
