import React from "react";
import AddTodo from "./components/AddTodo";
import { TodoItem } from "./components/TodoItem";
import styles from "./App.module.css";
import { useSelector } from "react-redux";

interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}
function App() {
  const { todos } = useSelector((state: any) => state.todoReducer);
  let dataJson = JSON.stringify(todos);
  localStorage.setItem("TodoList", dataJson);
  return (
    <div className={styles.container}>
      <h3>Todo App</h3>
      <section>
        <AddTodo />
      </section>
      <section>
        {todos.map((todo: Todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </section>
    </div>
  );
}

export default App;
