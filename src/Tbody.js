import React from 'react'
import Trow from './Trow.js'
import {resultset} from './Resultset.js'

export default class Tbody extends React.Component {
	
	render(){
		let createrows = [];
		
		for (let i = 0; i < resultset['rowNum']; i++){
			createrows.push(<Trow class = "trow" contact = {resultset['contacts'][i]} />)
		}
		return (
			<div class="tbody">
				{createrows}
			</div>
		);
	   
	}
}

