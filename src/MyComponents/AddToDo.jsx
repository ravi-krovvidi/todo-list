import React from 'react';
import {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';


export const AddToDo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [dateTime, setDateTime] = useState(new Date())


    const submit = (e) => {
        e.preventDefault();   
        if (!title || !desc) {
            alert("Title and Description are mandatory fields");
        } else {

            props.addToDo(title, desc);
        }
        setTitle("");
        setDesc("");


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
                    <label htmlFor="title" className="form-label">Task Title</label>
                    <input type="text" className="form-control" id="title" placeholder=""
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
            
            <button className="btn btn-success btn-sm">Add</button>
        </form>

    </div>

    )
}
