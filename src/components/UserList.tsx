import React, {FC} from 'react';
import {IUser} from '../types/types'
import Useritem from './Useritem' 

interface UserListProps {
  users: IUser[]
}

const UserList: FC<UserListProps> = ({users}) => {

  return (
    <div>
      {users.map(user =>
      <Useritem key={user.id} user={user}/> 
        )}
    </div>
  );
};

export default UserList;
