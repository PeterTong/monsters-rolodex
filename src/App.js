import React, { Component } from "react";
// import logo from './logo.svg';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

// using class component, we can access this thing called state.
// state is some object
class App extends Component {
  constructor() {
    super();

    this.state = {
			monsters: [],
			searchField: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
	}
	
	handleChange = e => {
// Which means that when javascript first created our app component it also defined all of the methods
// on our components including handle change and it saw that this was an arrow function and because of
// this when this arrow function came into existence to JavaScript it was going to bind any references
// to this inside of it to the context in which it was defined which is our app component 
		this.setState({ searchField: e.target.value });
	}
  render() {
		// make a new array, because don't want to modify the raw data (monsters array)
		// Destructure concept. it pulls the properites off of the object and set them to constant
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter( monster =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
			);

    return (
      <div className="App">
				<h1> Monsters Rolodex </h1>
				{/* e  represent the synthetic event */}
				{/* setState is a Asynchronous function, so the state will be updated  after entering text into search bar next times */}
				{/* onChange is a synthetic event, in any time it will run this function setState once. 
				not calling the render() method again and again since setState will trigger the render() method */}
				{/* https://reactjs.org/docs/events.html */}
				{/* <input type='search' 
							 placeholder='search monsters' 
							 onChange={e => this.setState({ searchField: e.target.value })}>
				 </input> */}
				<SearchBox 
					placeholder='search monsters'
					handleChange={this.handleChange}>

				</SearchBox>
        <CardList monsters={filteredMonsters}>
        
        </CardList>
      </div>
    );
  }
}

// {'inside curly brackets is Javascript expression'}
// when the state is changed, the render() method will be called again

export default App;
