import React from 'react'
import ToDoItem from "./ToDoItem" 


export default function ToDos(props) {
    let myStyle= {
        minHeight : "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style=
        {myStyle}>
            <h3 className="text-center my-3" >Tasks</h3>

            {  props.toDos.length===0? "No Task":
                props.toDos.map((todo) => {
                    return (<><ToDoItem toDo = {todo} key={todo.sno} onDelete={props.onDelete} onEdit={props.onEdit}/>
                    </>)
                })
   
            }
        </div>
    )
}
