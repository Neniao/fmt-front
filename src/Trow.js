import React from 'react'
import {resultset} from './Resultset.js'

export default class Trow extends React.Component {
	
	render(){
		let createcells = [];
		for (let i = 0;i < resultset["colNum"];i++){
			let colName = resultset["colName"][i]; 	
			createcells.push(<td class = "tcell">{this.props.contact[colName]}</td>);
		}
		return (
			<div class="trow">
				{createcells}
			</div>
		);
	   
	}
}

