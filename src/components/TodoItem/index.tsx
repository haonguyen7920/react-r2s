import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./style.module.css";

interface Props {
  id: number;
  title: string;
  isCompleted: boolean;
  onDelete: (id: number) => void;
  onSave: (id: number, newTitle: string) => void;
  onCheck: (id: number) => void;
}
export const TodoItem = ({
  id,
  title,
  isCompleted,
  onDelete,
  onSave,
  onCheck,
}: Props) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [todoContent, setTodoContent] = useState<string>(title);
  const handleClickDeleteOrCancel = () => {
    if (isEditing) {
      setIsEditing(false);
      setTodoContent(title);
    } else onDelete(id);
  };
  const handleClickEditOrSave = () => {
    if (isEditing) {
      onSave(id, todoContent);
    }
    setIsEditing(!isEditing);
  };
  const handleChangeTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoContent(event.target.value);
  };
  const handleClickCheckbox = () => {
    onCheck(id);
  };
  return (
    <div className={styles.container}>
      <Form.Check id={String(id)} className={styles["form-check"]}>
        <Form.Check.Input
          checked={isCompleted}
          onChange={handleClickCheckbox}
        />
        {isEditing ? (
          <Form.Control
            className={styles["form-control"]}
            type="text"
            value={todoContent}
            onChange={handleChangeTodo}
          />
        ) : (
          <Form.Check.Label
            style={{ textDecoration: isCompleted ? "line-through" : "none" }}
          >
            {title}
          </Form.Check.Label>
        )}
      </Form.Check>
      <Button variant="info" size="sm" onClick={handleClickEditOrSave}>
        {isEditing ? "Save" : "Edit"}
      </Button>
      <Button variant="danger" size="sm" onClick={handleClickDeleteOrCancel}>
        {isEditing ? "Cancel" : "Delete"}
      </Button>
    </div>
  );
};
