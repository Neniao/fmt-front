import React from 'react'
import './Searchresult.css'


export default class Searchbox extends React.Component {
	
	render(){
		return (
			<div class="searchbox">
	
				<div class = "innerbox">
					<div class = "searchoption">
						<div class = "displayoption">
							<input type="button" value="Display"/>
						</div>
					</div>
					<div class = "searchinput">
						<input type="text" placeholder="Enter name.." />
						<input type="button" value="Search"/>
					</div>	
				</div>
			</div>
		);
	   
	}
}

