import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormControl } from 'react-bootstrap';

 function ToDoList (props){
    const todo = props.todo;
    const todositems = todo.map(todos => {
        return<div key= {todos.key}>
            
            <p>
                <FormControl type ='text' size ='sm' value = {todos.text} id = {todos.key}
                onChange ={(event)=>props.editToDo(event.target.value, todos.key)}>
                    
                </FormControl>
                <Button size='sm' variant = 'primary' onClick = {()=> props.deleteTodo(todos.key)}>Delete</Button>
            </p>
        </div>
    })

    return(
        <div>
            {todositems}
        </div>
    )
        
            
}
export default ToDoList;