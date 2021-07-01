import {Component} from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem'
import todosData from './todosData.js'

class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    console.log('im changing')
  }

  render(){
    const toDosArray = this.state.todos.map(todo => 
      <ToDoItem
        key = {todo.id}
        todo = {todo}
        handleChange = {this.handleChange}
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
