import React from 'react'

export default class Thead extends React.Component {
	render(){
		
		let createcols = [];
		
		for (let i = 0; i < this.props.colNum; i++){
			createcols.push(<th class = "th">{this.props.colNames[i]}</th>)
		}
		return (
		  <div class="thead">
			{createcols}
		  </div>
		
	   );
	}
}
