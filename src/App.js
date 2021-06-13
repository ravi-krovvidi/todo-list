import './App.css';
import Header from "./MyComponents/Header";
import ToDos from "./MyComponents/ToDos";
import React, {useState, useEffect} from 'react';
import Footer from './MyComponents/Footer';
import {AddToDo} from './MyComponents/AddToDo';
import {BrowserRouter as Router, Switch, Route, useHistory, Redirect} from "react-router-dom";
import {About} from './MyComponents/About';
import {createBrowserHistory} from 'history'
import {EditToDo} from './MyComponents/EditToDo'

function App() {
  const history= useHistory();

    let intialToDo;
    if (localStorage.getItem("todos") == null) {
        intialToDo = [];
    } else {
        intialToDo = JSON.parse(localStorage.getItem("todos"));
    }
    
    const [toDos, setToDos] = useState(intialToDo);

    const onDelete = (todo) => {
        console.log("I am in todo ", todo);
        setToDos(toDos.filter((e) => {
            return e.sno !== todo.sno;
        }))
    }

    const onEdit = (todo) =>{
      history.push(`edit/${todo.sno}`);
      
    }

    const edit =(todo) =>{
     let newToDos= toDos.filter((e) => {
        return e.sno !== todo.sno;
    });
      setToDos([...newToDos, todo]);
    }

    const addToDo = (title, desc) => {
        console.log("I am in addToDo for ", title, desc)
        let sno;
        if (toDos.length === 0) {
            sno = 0;
        } else {
            sno = toDos[toDos.length - 1].sno + 1;
        }
        const myToDo = {
            sno: sno,
            title: title,
            desc: desc
        }
        setToDos([
            ...toDos,
            myToDo
        ]);
        console.log(myToDo);
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(toDos))
    }, [toDos]);


    return (<Router history={createBrowserHistory()}>

        <Header title="To-Dos List"
            searchBar={false}/>

        <Switch>
            <Route exact path="/"
                render={
                    () => {
                        return (<>
                            <AddToDo addToDo={addToDo}/>
                            <ToDos toDos={toDos}
                                onDelete
                                ={onDelete} onEdit={onEdit}/>
                           {/* <EditToDo onEdit={onEdit} toDos={toDos}/>    */}
                        </>)}
            }></Route>
        <Route exact path="/about">
            <About/>
        </Route>
        <Route exact path="/edit/:sno" render={
          (routeProps) =>{
              return <EditToDo {...routeProps} toDos={toDos} edit={edit}/>
          }
        }>
            
        </Route>
    </Switch>
    <Footer/>
</Router>);
}

export default App;
