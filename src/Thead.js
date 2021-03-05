import React from 'react'
import Resultset from './Resultset.js'

export default class Thead extends React.Component {
	
	render(){
		
		let createcols = [];
		
		for (let i = 0; i < this.props.colNum; i++){
			createcols.push(<td class = "tcell">{this.props.colNames[i]}</td>)
		}
		return (
		  <div class="thead">
			{createcols}
		  </div>
		
	   );
	}
}
