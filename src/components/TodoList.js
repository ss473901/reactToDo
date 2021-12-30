import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  return(
    <div>
      <h1>Todoリスト</h1>
      <input 
        placeholder="ここにTodoを追加" 
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      
      <button
        onClick={()=>{
          setTodos([...todos, newTodo]);
          setNewTodo("");
        }}
        
      >
        追加
      </button>

      <ul>
         {todos.map((todo, index)=>(
           <li>
             {todo}
            <button
              onClick={()=>
              setTodos(todos.filter((_,index2) => index2 !== index))}
            >
              削除
            </button>
           </li>
         ))}
      </ul>
    </div>
  )
}

export default TodoList;