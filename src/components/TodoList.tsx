import React, {FC} from 'react';
import { ITodo } from '../types/types';
import Todoitems from './Todoitem';

interface TodoListProps {
  todo: ITodo[]
}

const TodoList: FC<TodoListProps> = ({todo}) => {

  return (
    <div>
      {todo.map(todo => 
        <Todoitems key={todo.id} todo={todo}/>
        )}
    </div>
  );
};

export default TodoList;
