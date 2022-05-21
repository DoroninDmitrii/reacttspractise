import React, {FC} from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../types/types';
import Useritems from './Useritems';

interface UserListProps {
  users: IUser[]
}

const UserList: FC<UserListProps> = ({users}) => {

  const navigate = useNavigate()

  return (
    <div>
      {users.map(user =>
          <Useritems onClick={() => navigate('/users/' + user.id)} key={user.id} user={user}/> 
        )}
      
    </div>
  );
};

export default UserList;
