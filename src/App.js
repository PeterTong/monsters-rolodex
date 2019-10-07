import React, { Component } from "react";
// import logo from './logo.svg';
import { CardList } from "./components/card-list/card-list.component";

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
  render() {
    return (
      <div className="App">
				{/* e  represent the synthetic event */}
				{/* setState is a Asynchronous function, so the state will be updated  after entering text into search bar next times */}
				<input type='search' 
							 placeholder='search monsters' 
							 onChange={e => this.setState({ searchField: e.target.value })}>
				 </input>
        <CardList monsters={this.state.monsters}>
        
        </CardList>
      </div>
    );
  }
}

// {'inside curly brackets is Javascript expression'}
// when the state is changed, the render() method will be called again

export default App;
