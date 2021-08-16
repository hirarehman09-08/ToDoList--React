import React ,{Component} from 'react';
import ToDoList from './todolist';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

//styling 


class ToDoInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos:[],
            currentTodo:{
                text:'',
                key :''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.deleteTodo =this.deleteTodo.bind(this);
        this.editToDo = this.editToDo.bind(this);
    }
    handleChange =(event)=>{
        this.setState({
        currentTodo:{
            text: event.target.value,
            key:Date.now()
        }    
        });
    }
    addTodo=(event)=> {
        event.preventDefault();
        const newTodo = this.state.currentTodo;
        console.log(newTodo);
        if(newTodo.text!=="")
        {
            const newTodos = [...this.state.todos, newTodo ];
            this.setState({
                todos:newTodos,
                currentTodo:{
                    text:'',
                    key:''
                }
            })

        }
      }
      deleteTodo = (key)=>{
          const filteredTodo = this.state.todos.filter(
              todos => todos.key !== key
          );
          this.setState({
              todos : filteredTodo
          })
      }
      editToDo = (text, key) => {
          const todoEdit = this.state.todos;
          todoEdit.map(todos =>{
              if(todos.key === key)
              {
                  todos.text = text;
              }
          })
          this.setState({
              todos:todoEdit
          })
      }

    render ()
    {
        return(
            <div className ='container'>
            <Form  style={{display: 'flex', justifyContent: 'center' }}>
        
                <Form.Group className="mb-3" controlId="formBasicEmail" align='centre'>
                <Form.Label>Add New To Do </Form.Label>
                <Form.Control type="text" name="name" value = {this.state.currentTodo.text} onChange ={this.handleChange} />
                <Button onClick={this.addTodo} variant='primary'>Add New Task</Button> 
                <ToDoList  todo = {this.state.todos} deleteTodo = {this.deleteTodo} editToDo ={this.editToDo}></ToDoList>
                </Form.Group>
            </Form>
            
            </div>  
        
            )
    }
}
export default ToDoInput;