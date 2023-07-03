import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import styles from "./style.module.css";

interface Props {
  id: number;
  title: string;
  isCompleted: boolean;
  handleDelete: (id: number) => void;
  handleSave: (id: number, newTitle: string) => void;
}
export const TodoItem = ({
  id,
  title,
  isCompleted,
  handleDelete,
  handleSave,
}: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [todoContent, setTodoContent] = useState<string>(title);
  const handleClickDeleteOrCancel = () => {
    if (isEditing) {
      setIsEditing(false);
      setTodoContent(title);
    } else handleDelete(id);
  };
  const handleClickEditOrSave = () => {
    if (isEditing) {
      handleSave(id, todoContent);
    }
    setIsEditing(!isEditing);
  };
  const handleChangeTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoContent(event.target.value);
  };
  return (
    <div className={styles.container}>
      {isEditing ? (
        <input type="text" value={todoContent} onChange={handleChangeTodo} />
      ) : (
        <h3>{title}</h3>
      )}
      <Button variant="info" size="sm" onClick={handleClickEditOrSave}>
        {isEditing ? "Save" : "Edit"}
      </Button>
      <Button variant="danger" size="sm" onClick={handleClickDeleteOrCancel}>
        {isEditing ? "Cancel" : "Delete"}
      </Button>
    </div>
  );
};
