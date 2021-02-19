import React from 'react'
import Searchresult from './Searchresult';
import Title from './Title';
import Searchbox from './Searchbox';
import './Searchresult.css'

export default function Pagecontainer(){
	
	return (
		<body id = "reactbody">
			<Title />
			<Searchbox />
			<Searchresult />
		</body>
	);
}

