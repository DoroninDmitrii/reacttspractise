import React, {useEffect, useState} from 'react';
import TodoList from './TodoList';
import { ITodo } from '../types/types';
import axios from 'axios';

const TodoPage = () => {
  const [todo, setTodo] = useState<ITodo[]>([])
 
  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodo(response.data)
    } catch(e) {
      alert(e)
    }
  }
  return (
    <div>
      <TodoList todo={todo}/>
    </div>
  );
};

export default TodoPage;
