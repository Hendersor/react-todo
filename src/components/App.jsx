import React from "react";
import { TodoCounter } from "./TodoCounter.jsx";
import { TaskList } from "./TaskList";
const testTask = [
  {
    task: "Limpiar",
    completed: false,
    key: Math.random() * 2.5,
  },
  {
    task: "Hacer tarea",
    completed: false,
    key: Math.random() * 2.5,
  },
  {
    task: "Comprar las cosas pendientes",
    completed: false,
    key: Math.random() * 2.5,
  },
];

function App() {
  const [todos, setTodos] = React.useState(testTask);
  //We filter the remain tasks
  const completedTodos = todos.filter((todo) => !todo.completed).length;

  //Modify the status of the task
  const completeTodos = (text) => {
    const getTaskIndex = todos.findIndex((task) => task.task == text);
    const newTodos = [...todos];
    newTodos[getTaskIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const getTaskIndex = todos.findIndex((task) => task.task == text);
    const newTodos = [...todos];
    newTodos.splice(getTaskIndex, 1);
    setTodos(newTodos);
    console.log(newTodos);
    console.log(todos);
  };

  return (
    <main>
      <section className="firstContainer">
        <h1>TODO</h1>

        <div className="inputContainer">
          <input className="checkbox" type="checkbox" />
          <input
            className="textInput"
            type="text"
            placeholder="Create a new todo..."
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
          <TodoCounter
            className="todoCounter"
            completedTodos={completedTodos}
          />
        </div>
        <div className="filter">
          <h1>All</h1>
          <h1>Active</h1>
          <h1>Completed</h1>
        </div>
      </section>
    </main>
  );
}

export default App;
