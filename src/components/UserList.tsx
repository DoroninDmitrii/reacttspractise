import React, {FC} from 'react';
import { IUser } from '../types/types';
import Useritems from './Useritems';

interface UserListProps {
  users: IUser[]
}

const UserList: FC<UserListProps> = ({users}) => {

  return (
    <div>
      {users.map(user =>
          <Useritems user={user}/> 
        )}
      
    </div>
  );
};

export default UserList;
