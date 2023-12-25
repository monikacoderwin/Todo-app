import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route exact path='/' Component={Signup}/>
    <Route path='/signin' Component={Signin}/>
   <Route path='/home' Component={Todo}/>
      
      </Routes>
      </BrowserRouter>
  );
}

export default App;
