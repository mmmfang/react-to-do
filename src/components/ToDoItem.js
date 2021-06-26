import React from 'react' 

function ToDoItem(props) {
    console.log(props)
    return(
        <div className="to-do-item">
            <input type="checkbox" onChange={console.log('changed')} checked={props.todo.completed}/>
            <p>{props.todo.text}</p>
        </div>
    )
}

export default ToDoItem