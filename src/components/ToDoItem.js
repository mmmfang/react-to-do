import React from 'react' 

function ToDoItem(props) {
    return(
        <div className="to-do-item">
            <input type="checkbox" onChange={props.handleChange()} checked={props.todo.completed}/>
            <p>{props.todo.text}</p>
        </div>
    )
}

export default ToDoItem