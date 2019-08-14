import React, { Component } from 'react';
import Auth from "../utils/Auth";
import MainLayout from "../Layout/MainLayout";
const auth = new Auth();

export default class Logout extends Component {
	state = {
		error: null
	}

	componentDidMount(){
		auth.logout()
			.then(()=> {
				this.props.history.push("/");
			})
			.catch((error)=> {
				this.setState({error: error.message});
			})
	}

	render() {
		return (
		    <MainLayout>
				<div>
					{this.state.error? 
						<h1>{this.state.error}</h1>
						:
						<h1>Logout in process</h1>
					}
				</div>
            </MainLayout>
		)
	}
}