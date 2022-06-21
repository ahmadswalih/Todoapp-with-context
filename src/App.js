import React, { useReducer } from "react";

import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { TodoContext } from "./Context/TodoContext";
import TodoReducer from "./Context/reducer";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";
import Logo from "./logo.svg";

const App = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <img src={Logo} className="logoImg" />
        <h1>Todo App with Context API</h1>
        <TodoForm />
        <Todos />
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
