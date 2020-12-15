import React, { useEffect } from "react";
import { useGlobalContext } from "../utils/GlobalContext";

const ViewTodos = () => {
  const [state, dispatch] = useGlobalContext();
  console.log({ state })

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch("/api/todos");
        const data = await response.json();
        console.log({ data });

        dispatch({ type: "setTodos", payload: data });
      } catch (err) {
        console.log({ err });
      }
    }
  }, []);

  return (
    <div className="Todos">
      <h3 className="Todos-header">Current Todos</h3>
      <ul className="Todos-list">
        {state.todos.map((todo) => (
          <li key={todo._id} className="Todos-listItem">
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewTodos;
