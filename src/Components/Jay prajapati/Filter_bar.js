import React from 'react'
import './Filter_bar.css'

export default function Filter_bar() {

	const tagsArr = ['DSA', 'C', 'c#', 'C++'];

	function tagChecksgenerator() {
		function checkTag(tagname) {
			return (
				<div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
					<input type="checkbox" className="btn-check" id={"btncheck_"+tagname} />
					<label className="btn btn-outline-success tagbutton" for={"btncheck_"+tagname}>{tagname}</label>
				</div>

			)
		}

		return (tagsArr.map(checkTag))
	}

	return (
		<div className='filter navbar'>
			<button className="borderbutton">Add Yours</button>
			<div className="select1">
				<p>
					<button id="art" className="borderbutton" type="button" data-bs-toggle="collapse"
						data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
						Filter by Tags
					</button>
				</p>
			</div>
			<div className="collapse" id="collapseExample1">
				<div className="tagsdiv">
					<div className="sub">Tags :</div>
					{tagChecksgenerator()}
				</div>
			</div>



		</div>
	)
}
