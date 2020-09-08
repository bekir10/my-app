 import React, {Component} from 'react'; //allow us to write html code in js file
import './App.css';

import {CardList} from "./componets/card-list/card-list.component";

import {SearchBox} from "./componets/search-box/search-box.component";

//component is property on react
class App extends Component {
  constructor(){
    super();//calls constructor method on component class

    this.state={
     // string:"hello bekir" //render instead paragraph
     monsters: [],
     searchField:""
    };
  }
//when react renders components on page for the first time, it calls code inside
  componentDidMount(){ //life cycle methods that functional components doesnt have, only class component
    fetch('https://jsonplaceholder.typicode.com/users')//api request to thi url
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) =>{
    this.setState({searchField:e.target.value})
  }

  //render method comes built in react component
  render(){
    const { monsters, searchField} =this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
         <SearchBox 
         
         placeholder="search monster" 
         handleChange = {this.handleChange}> 
  
         </SearchBox>


        <CardList monsters={filteredMonsters}>{/*props*/ }
        
        </CardList>
      

           
      
     
    </div>
    )
  }
}

export default App;
