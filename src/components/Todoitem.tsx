import React from 'react';
import {ITodo} from '../types/types'

interface TodoItemProps {
  todo: ITodo;
}

const Todoitem = ({todo} : TodoItemProps) => {
  return (
    <div>
      <input type='checked' checked={todo.completed}/>
      {todo.id}. {todo.title}
    </div>
  );
};

export default Todoitem;
