import React from "react";
import "./../styles/TodoCounter.scss";

function TodoCounter({ completedTodos }) {
  return (
    <div className="infoContainer">
      <p>{completedTodos} items left</p>
      <p className="clearButton">Clear completed</p>
    </div>
  );
}

export { TodoCounter };
