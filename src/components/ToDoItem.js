import React from 'react' 

function ToDoItem(props) {
    console.log(props)
    return(
        <div className="to-do-item">
            <input type="checkbox" />
            <p>{props.text}</p>
        </div>
    )
}

export default ToDoItem