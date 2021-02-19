import React from 'react'
import './Searchresult.css'
import Thead from './Thead.js'
class Searchresult extends React.Component {
	
	render(){
		let cols_name = ["Band","Year","No. of Albums","Most famous song"];
		let cols_num = 4;
		return (
			<div class = "table-wrap">
				<div class = "table">
					<Thead colNames = {cols_name} colNum = {cols_num}/>
						  <div class = "tbody">
							<div class = "tr">
							  <th scope="row">Buzzcocks</th>
							  <td>1976</td>
							  <td>9</td>
							  <td>Ever fallen in love (with someone you shouldn't've)</td>
							</div>
							<tr>
							  <th scope="row">The Clash</th>
							  <td>1976</td>
							  <td>6</td>
							  <td>London Calling</td>
							</tr>

							  ... some rows removed for brevity

							<tr>
							  <th scope="row">The Stranglers</th>
							  <td>1974</td>
							  <td>17</td>
							  <td>No More Heroes</td>
							</tr>
						  </div>
						  <tfoot>
							<tr>
							  <th scope="row" colspan="2">Total albums</th>
							  <td colspan="2">77</td>
							</tr>
						  </tfoot>
				</div>
			</div>
	   );
	}
}

export default Searchresult;
