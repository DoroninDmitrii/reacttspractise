import React, {FC} from 'react';
import { IUser } from '../types/types';

interface UserItemProps {
  user: IUser
}

const Useritem: FC<UserItemProps> = ({user}) => {
  return (
    <div style={{padding: 15, border: '1px solid gray'}}>
    {user.id}. {user.name} lives int the city {user.address.city}
  </div>
  );
};

export default Useritem;
