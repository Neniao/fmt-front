import React from 'react'
import './Searchresult.css'
import fmtico from './img/fmtico.png'

export default class Title extends React.Component {
	
	render(){
		return (
			<header class = "title">
				<a href = "https://www.findmyteam.com/">
					<img src = {fmtico} /> 
				</a>
				<p>Search on FindMyTeam</p>
			</header>
		);
	   
	}
}

