import './App.css';
import Todo from './todos';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Router from './router';
import Login from './login';
import View from './view';


function App() {
  return (
    <>
      {/* <Todo /> */}

      <Routes>
        <Route path="/" element={<Router />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/todo" element={<Todo />} />
        <Route exact path="/view" element={<View />} />
      </Routes>


    </>
  );
}

export default App;
