//import logo from './logo.svg';
import {Component} from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem'
import todosData from './todosData.js'

class App extends Component {

  render(){

    const toDosArray = todosData.map(todo => 
      <ToDoItem
        key = {todo.id}
        todo = {todo}
        // text = {todo.text}
        // completed = {todo.completed}
      />)

    return (
      <div className="App-header">
        <div className="to-do-list-bg">
          {toDosArray}
        </div>
      </div>
    );
  }
}

export default App;
