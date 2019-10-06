import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// using class component, we can access this thing called state.
// state is some object 
class App extends Component {
	constructor() {
		super();

		this.state = {
			string: 'Hello Peter Tong'
		}
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>{this.state.string}</p>
					<button onClick={ () => this.setState({ string:'Hello Wing' })}>Change Text</button>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}


export default App;
