import React, { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [listTodo,setListTodo]=useState([]);   //array for storing the list of tasks

  const storeText =(e)=>{
      //here we'll get the input text from the child component;
      if (e !== "") {
        // Add the new task to the beginning of the list
        setListTodo([e, ...listTodo]);
      }
  }

  const deleteItem=(index)=>{
    //deletes the 1 occurance of the item from the list
    let newListTodo = [...listTodo];
    newListTodo.splice(index,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className='container'>
      <h2>To Do</h2>
        <TodoInput storeText={storeText}/>
        <hr/>

        {/* //runing a loop over list items  */}
        {listTodo.map((listItem,i)=>{
          return (
            <TodoList key={i} index={i} item={listItem} del={deleteItem}/>
          )
        })}
    </div>
  );
}

export default App;
