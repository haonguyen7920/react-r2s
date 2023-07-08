import React, { useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { TodoItem } from "./components/TodoItem";
import styles from "./App.module.css";

interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}
const dastaJson = localStorage.getItem("TodoList");
const storageTodos = JSON.parse(dastaJson ?? "[]");
function App() {
  const [todos, setTodos] = useState<Todo[]>(storageTodos);
  let dataJson = JSON.stringify(todos);
  localStorage.setItem("TodoList", dataJson);
  const handleAddTodo = (title: string) => {
    const newTodoItem = {
      id: todos.length + 1,
      title: title,
      isCompleted: false,
    };
    setTodos((prev) => [...prev, newTodoItem]);
  };
  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const handleSaveTodo = (id: number, newTitle: string) => {
    const newArray = [...todos];
    const index = newArray.findIndex((todo) => todo.id === id);
    newArray[index] = { ...newArray[index], title: newTitle };
    setTodos(newArray);
  };
  const handleCheckCompleted = (id: number) => {
    const newArray = [...todos];
    const index = newArray.findIndex((todo) => todo.id === id);
    const { isCompleted } = newArray[index];
    newArray[index] = { ...newArray[index], isCompleted: !isCompleted };
    setTodos(newArray);
  };
  return (
    <div className={styles.container}>
      <h3>Todo App</h3>
      <section>
        <AddTodo handleAdd={handleAddTodo} />
      </section>
      <section>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            handleDelete={handleDeleteTodo}
            handleSave={handleSaveTodo}
            handleCheck={handleCheckCompleted}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
