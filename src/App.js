import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// using class component, we can access this thing called state.
// state is some object 
class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [
				{
					name: 'Frankenstein',
					id: 'asc1'
				},
				{
					name: 'Dracula',
					id: 'asr2'
				},
				{
					name: 'Zombie',
					id: 'as1w'
				}
			]
		}
	}
	render() {
		return (
			<div className="App">
				{this.state.monsters.map( monster => (
					<h1 key={monster.id}> { monster.name } </h1>
				))}
			</div>
		);
	}
}

// {'inside curly brackets is Javascript expression'}
// when the state is changed, the render() method will be called again

export default App;
