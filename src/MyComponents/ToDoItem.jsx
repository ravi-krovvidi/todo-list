import React from 'react';
import { useHistory } from 'react-router';


export default function ToDoItem(props) {
    
const history = useHistory();
    return (
  
        <div style={{border:"1px solid", padding:"8px 16px", borderRadius: "4px", marginBottom:"32px"} }>
           <div style={{display: "flex", justifyContent: "space-between"}}>
               <div> <h4> {
                props.toDo.title
            }</h4>
            <p> {
                props.toDo.desc
            }</p>
            </div>
            </div>
            <button className="btn btn-sm btn-danger" style={{marginRight:"8px"}} onClick= {() =>{ props.onDelete(props.toDo)}}>Delete</button>
            <button className="btn btn-sm btn-secondary" onClick= {() =>{ history.push(`edit/${props.toDo.sno}`)}}>Edit</button>
        </div>
    )
}
