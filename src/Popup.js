import React from 'react';

export class LoginForm extends React.Component{
	constructor{
		super()
		this.setState({
			email:null,
			password:null
		});
	}
	
	pswhandle(evt){
		this.setState({
			psw:evt.target.value
		})
	}
	
	emailhandle(evt){
		this.setState({
			email:evt.target.value
		})
	}
	render(){
		return (
			<div class="login-form" >
				<h1>Login</h1>

				<label for="email"><b>Email</b></label>
				<input type="text" placeholder="Enter Email" name="email" required onchange = {this.emailhandle}>

				<label for="psw"><b>Password</b></label>
				<input type="password" placeholder="Enter Password" name="psw" required onchange = {this.pswhandle}>

				<button type="submit" class="btn">Login</button>
				<button type="submit" class="btn cancel" onclick="closeForm()">Close</button>
			</div>
		)
	}
}