import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "./style.module.css";

interface Props {
  handleAdd: (title: string) => void;
}
export const AddTodo = ({ handleAdd }: Props) => {
  const [todoContent, setTodoContent] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoContent(event.target.value);
  };
  const handleClick = () => {
    handleAdd(todoContent);
    setTodoContent("");
  };
  return (
    <div className={styles.container}>
      <input type="text" value={todoContent} onChange={handleChange} />
      <Button
        variant="success"
        disabled={!Boolean(todoContent)}
        onClick={handleClick}
      >
        Add item
      </Button>
    </div>
  );
};
