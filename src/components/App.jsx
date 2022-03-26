import React from "react";
import { TodoCounter } from "./TodoCounter.jsx";
import { TaskList } from "./TaskList";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { Notasks } from "./Notasks";
// const testTask = [];

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);

  //We filter the remain tasks
  const completedTodos = todos.filter((todo) => !todo.completed).length;

  //Modify the status of the task
  const completeTodos = (text) => {
    const getTaskIndex = todos.findIndex((task) => task.task == text);
    const newTodos = [...todos];
    if (newTodos[getTaskIndex].completed) {
      newTodos[getTaskIndex].completed = false;
    } else {
      newTodos[getTaskIndex].completed = true;
    }
    saveTodos(newTodos);
  };

  //Delete the taks
  const deleteTodos = (text) => {
    const getTaskIndex = todos.findIndex((task) => task.task == text);
    const newTodos = [...todos];
    newTodos.splice(getTaskIndex, 1);
    saveTodos(newTodos);
  };

  //Add tasks
  const reciveTask = (event) => {
    if (event.code == "Enter" && event.target.value !== "") {
      const getInput = document.getElementById("input");
      const newTodos = [...todos];
      const dontRepeat = todos.findIndex(
        (todo) => todo.task == event.target.value
      );
      if (dontRepeat === -1) {
        newTodos.push({
          task: event.target.value,
          completed: false,
          key: Math.random() * 2.5,
        });
        saveTodos(newTodos);
      }
      getInput.value = "";
    }
  };

  // Clear completed task
  const clearCompletedTask = () => {
    const newTodo = todos.filter((task) => task.completed == false);
    const newState = [...newTodo];
    saveTodos(newState);
  };

  return (
    <main>
      <section className="firstContainer">
        <h1>TODO</h1>

        <div className="inputContainer">
          <input
            id="input"
            className="textInput"
            type="text"
            placeholder="Create a new todo..."
            onKeyDown={reciveTask}
          />
        </div>
      </section>

      <section className="secondContainer">
        <div className="taskContainer">
          {todos.map((task) => (
            <TaskList
              className="taskList"
              task={task.task}
              completed={task.completed}
              key={task.key}
              onComplete={() => completeTodos(task.task)}
              onDelete={() => deleteTodos(task.task)}
            />
          ))}
          {todos.length != 0 ? (
            <TodoCounter
              className="todoCounter"
              completedTodos={completedTodos}
              clearTodos={clearCompletedTask}
            />
          ) : (
            <Notasks />
          )}
        </div>
        {/* <div className="filter">
          <h1>All</h1>
          <h1>Active</h1>
          <h1>Completed</h1>
        </div> */}
      </section>
    </main>
  );
}

export default App;
