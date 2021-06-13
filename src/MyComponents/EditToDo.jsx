import React from 'react';
import {useState} from 'react';
import { useHistory } from 'react-router';
import {makeStyles} from '@material-ui/core/styles';


export const EditToDo = (props) => {
    

     const history= useHistory();
    const sno = Number(props.match.params.sno)
    const toDo = props.toDos.filter((e) =>{
       return e.sno == sno;
    })
    
    const [title, setTitle] = useState(toDo[0].title)
    const [desc, setDesc] = useState(toDo[0].desc)
    

    const submit = (e) => {
        e.preventDefault();
        
        if(!title || !desc){
            alert("Title and Description are mandatory fields")
        }
        else{
         const todo = {
             sno: sno,
             title: title,
             desc: desc
         }    
        props.edit(todo)
        history.push('/');
        }
      
    }
    const useStyles = makeStyles((theme) => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap'
        }
    }));
    
    const classes = useStyles();

    return (
        <div className="container">
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Title"
                        value={title}
                        onChange={
                            (e) => {
                                setTitle(e.target.value);
                            }
                        }/>
                </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Description</label>
                <input type="text" className="form-control" id="desc" rows="3"
                    value={desc}
                    onChange={
                        (e) => setDesc(e.target.value)
                }></input>
            </div>
            <button className="btn btn-success btn-sm" >Edit</button>
        </form>
    </div>
    )
}
