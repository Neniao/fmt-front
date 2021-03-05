import React from 'react'
import Thead from './Thead.js'
import Tbody from './Tbody.js'
import Tfoot from './Tfoot.js'
import {resultset,getResultset} from './Resultset.js'

function DataNotAvailable(){
	return (
		<div class = "data-not-available">
			<img src = "./img/datanotavailable.png" />
			<p>Try search another options..</p>
		</div>
	)
}

class Searchresult extends React.Component {
	
	constructor(){
		super();
		this.state = {"dataavailable": false};
	}
	
	render(){
		
		if (this.state.dataavailable)
		return (
			<div class = "table-wrap">
				<div class = "table">
					<Thead colNames = {resultset["colNames"]} colNum = {["colNum"]}/>
					<Tbody colNames = {resultset["colNames"]}  colNum = {resultset["colNum"]} rowNum = {resultset["rowNum"]}/>
					<Tfoot />
				</div>
			</div>
	   );
	   
	   return <DataNotAvailable />
	}
}

export default Searchresult;
