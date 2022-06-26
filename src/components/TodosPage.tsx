import React, {useEffect, useState, FC} from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import { ITodo } from '../types/types';

const TodosPage: FC = () => {

  const [todo, setTodo] = useState<ITodo[]>([])

  useEffect(() => {
    fetchTodo();
  }, []);

  async function fetchTodo() {
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

export default TodosPage;
