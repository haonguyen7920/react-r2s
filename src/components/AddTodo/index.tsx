import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import styles from "./style.module.css";

interface Props {
  onAdd: (title: string) => void;
}
const AddTodo = ({ onAdd }: Props) => {
  const [todoContent, setTodoContent] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoContent(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAdd(todoContent);
    setTodoContent("");
    inputRef.current?.focus();
  };
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        type="text"
        placeholder="Enter todo..."
        ref={inputRef}
        value={todoContent}
        onChange={handleChange}
      />
      <Button variant="success" disabled={!Boolean(todoContent)} type="submit">
        Add item
      </Button>
    </form>
  );
};

export default AddTodo;
