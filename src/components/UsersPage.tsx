import React, {useEffect, useState, FC} from 'react';
import axios from 'axios';
import UserList from './UserList';
import { IUser } from '../types/types';

const UsersPage: FC = () => {

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch(e) {
      alert(e)
    }
  }

  return (
    <div>
      <UserList users={users}/>
    </div>
  );
};

export default UsersPage;
