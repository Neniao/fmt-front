
// export default class Resultset{
	// static resultset = {};
	// static resp = {};
	
	// static async getResultset(){
		// Resultset.resp = await fetch('http://69.164.199.15:5000/contacts',{mode:'cors',headers:{}}).then(response => response.json())
		// Resultset.resultset = Resultset.resp;
	// }
// }

function getResultset(){
	
	let resp = fetch('http://69.164.199.15:5000/contacts',
					 {
					   mode:'cors',
					   headers:{}
					 }).then(response => response.json());
	return resp
}

var resultset = getResultset();
export {resultset, getResultset};