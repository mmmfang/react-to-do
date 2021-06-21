//import logo from './logo.svg';
import './App.css';
import ToDoItem from './components/ToDoItem'

function App() {
  return (
    <div className="App-header">
      <div className="to-do-list-bg">
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </div>
    </div>
  );
}

export default App;
