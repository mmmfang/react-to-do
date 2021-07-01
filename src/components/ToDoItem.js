import React from 'react' 

function ToDoItem(props) {
    return(
        <div className="to-do-item">
            <input 
                type="checkbox" 
                onChange={()=>props.handleChange(props.todo.id)} 
                checked={props.todo.completed}/>
            <p style={props.todo.completed ? {color: "grey",textDecoration:"line-through"} : null}>{props.todo.text}</p>
        </div>)
}

export default ToDoItem