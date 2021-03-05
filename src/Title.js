import React from 'react'
import ReactDOM from 'react-dom'

function AccountMenu(){
	return (
		<div class="account-menu">
			<button class="account-menu-button">Account</button>
			<div class="account-menu-options">
				<a href="#">Profile</a>
				<a href="#">Setting</a>
				<a href="#">Log out</a>
			</div>
		</div>
	)
}

function Login(){
	return (
			<div class = "login">
				Login
				
			</div>
	)
}

export default class Title extends React.Component {
	
	render(){
		return (
			<header class = "title">
				<div class = "top-line-wrap">
					<a href = "https://www.findmyteam.com/">
						<img src = "./img/fmtico.png" /> 
					</a>
					<AccountBlock />
				</div>
				<p>Search on FindMyTeam</p>
			</header>
		);
	   
	}
}

export class AccountBlock extends React.Component {
	
	constructor(){
		super()
		this.state = {login: false}
	}
	
	render(){
		return (
			<div class = "account-block">
				{this.state.login? <AccountMenu /> : <Login /> }
			</div>
		);
	   
	}
}

