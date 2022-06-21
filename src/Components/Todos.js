import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";

import { TodoContext } from "../Context/TodoContext";
import { REMOVE_TODO } from "../Context/action.type";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ListGroup style={{ marginTop: "30px" }} className="mt-5 mb-2 items">
      {todos.map((todo) => (
        <ListGroupItem style={{ marginBottom: "8px" }} key={todo.id}>
          {todo.todoString}
          <span
            className="float-end"
            onClick={() =>
              dispatch({
                type: REMOVE_TODO,
                payload: todo.id,
              })
            }
          >
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};
export default Todos;
