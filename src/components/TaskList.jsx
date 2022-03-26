import React from "react";
import "./../styles/TaskList.scss";

function TaskList(props) {
  return (
    <section className="taskListContainer">
      <div className="inputTaskContainer">
        <label className="customCheckbox">
          <input onClick={props.onComplete} type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <p>{props.task}</p>
      </div>
      <img
        onClick={props.onDelete}
        src="https://res.cloudinary.com/dwdz4mn27/image/upload/v1646532900/todo-app-main/images/icon-cross_lgphn9.svg"
        alt="cross icon"
      />
    </section>
  );
}

export { TaskList };
