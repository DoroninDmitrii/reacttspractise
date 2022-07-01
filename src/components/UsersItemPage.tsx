import React, {useEffect, useState, FC} from 'react';
import { IUser } from '../types/types';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

// interface UserItemPageParams {
//   id: string;
// }

const UsersItemPage: FC = () => {

  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  const goHome = () => {
    navigate('/users')
  }

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      setUser(response.data)
    } catch(e) {
      alert(e)
    }
  }
  return (
    <div>
      <button onClick={goHome}>Back</button>
      <h1>The page of {user?.name}</h1>
      <div>
        {user?.email}
      </div>
    </div>
  );
};

export default UsersItemPage;
