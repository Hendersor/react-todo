import React from "react";
import "./../styles/TodoCounter.scss";

function TodoCounter(props) {
  return (
    <div className="infoContainer">
      <p>{props.completedTodos} items left</p>
      <p onClick={props.clearTodos} className="clearButton">
        Clear completed
      </p>
    </div>
  );
}

export { TodoCounter };
