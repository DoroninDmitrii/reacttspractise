import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import { Link } from "react-router-dom";
import UsersItemPage from "./components/UsersItemPage";

const App = () => {

  return (
    <BrowserRouter>
    <div>
      <nav>
        <Link to='/users'>Users</Link>
        <Link to='/todos'>Todos</Link>
      </nav>
    </div>
      <Routes>
        <Route path='/users' element={<UsersPage/>}/>
        <Route path='/todos' element={<TodosPage/>}/>
        <Route path='/users/:id' element={<UsersItemPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
