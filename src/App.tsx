import React, { useState } from "react";
import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { TodoItem } from "./components/TodoItem";

interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
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
  return (
    <div>
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
          />
        ))}
      </section>
    </div>
  );
}

export default App;
