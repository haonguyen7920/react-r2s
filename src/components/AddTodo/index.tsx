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
  const handleAdd = () => {
    onAdd(todoContent);
    setTodoContent("");
    inputRef.current?.focus();
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        type="text"
        value={todoContent}
        onChange={handleChange}
      />
      <Button
        variant="success"
        disabled={!Boolean(todoContent)}
        onClick={handleAdd}
      >
        Add item
      </Button>
    </div>
  );
};

export default AddTodo;
