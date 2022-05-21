import Card, { CardVariant } from './components/Card';
import EventsExample from './components/EventsExample';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './components/UserPage';
import TodoPage from './components/TodoPage';
import { NavLink } from 'react-router-dom';
import UserItemPage from './components/UserItemPage';

const App = () => {

  return (
    <div>
      {/* <Card variant={CardVariant.primary} width='200px' height='200px' onClick={(num) => console.log('hey', num)}>
        <button>Click</button>
      </Card>
      <EventsExample /> */}

      <BrowserRouter>
        <div>
          <NavLink to='/users'>Users</NavLink>
          <NavLink to='/todos'>Todo</NavLink>
        </div>
        <Routes>
          <Route path='/users' element={<UserPage/>}/>
          <Route path='/todos' element={<TodoPage/>}/>
          <Route path='/users/:id' element={<UserItemPage/>}/>
          <Route path='/todos/:id' element={<UserItemPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
