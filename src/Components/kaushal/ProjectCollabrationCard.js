import React from 'react';
import { useState } from 'react';
import "./ProjectCollabrationCard.css";

function ProjectCollabrationCard() {

  const [expand, setExpand] = useState('ture');
  const [isDiplay, setIsDiplay] = useState('true');

  return (
        <div className='project_c_card'>
            <div className='avtar'></div>
            <div className='innercontent'>
                <div className='project_coll_header' style={{}}>
                  <div className='project_coll_Leader'> <strong> Kaushal Danani </strong> </div>
                  <input type="button" value="Contact" className="project_collab_btn" />
                </div> <hr style={{margin: '0vh 0vh 2vh -2.5vw', height:'0.25vh', border: 'none', backgroundColor: 'black'}}/>

                <div className='project_coll_Title'> <strong> Project Title : </strong> 
                  <p className='project_col_title_content'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illum esse, adipisci libero nulla quam fugiat ullam ipsam dolorem in rerum dolore id cupiditate. Ipsum recusandae omnis nisi, dolores vitae veniam beatae libero repudiandae rerum quisquam inventore nobis maiores. Non exercitationem veritatis placeat nisi eaque quia vel sequi quas optio. </p> 
                </div>

                <div className='project_coll_tags'> <strong> Project Tags : </strong>
                  <div style={{display: 'inline'}}>  </div>
                </div>

                <div className={expand ? 'project_coll_description' : 'project_coll_description project_more_btn_show'}> <strong> Project Description : </strong> 
                  <p className='project_coll_description_content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit rerum minima delectus! Laborum molestiae fugit reprehenderit at. Excepturi expedita exercitationem ab eligendi? Laudantium explicabo, odio ad rerum vero magnam accusantium quasi quo illum labore perferendis necessitatibus expedita earum quis? Molestiae quasi voluptate incidunt dignissimos ipsum quisquam ducimus asperiores in illo exercitationem odio perspiciatis sunt soluta, rerum laborum reprehenderit dolorum nulla fugit dolor magni dicta. Numquam quos mollitia voluptatibus. Temporibus.</p>
                </div>
                <button className='project_coll_more_btn' onClick={() => setExpand(!expand)}> {expand ? 'More' : 'Less'} </button> <br/>
            </div>
        </div>
  )
}

export default ProjectCollabrationCard