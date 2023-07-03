import React, { useState } from "react";
import styles from "./App.module.css";
import Table from "react-bootstrap/Table";
import dayjs from "dayjs";
import data from "./data/users.json";
import { UserItem } from "./components/UserItem";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  birthday: string;
  salary: number;
  phone: string;
}
function App() {
  const [users, setUsers] = useState<User[]>(data);
  const [inputFilter, setInputFilter] = useState<string>("");
  const handleChangeOrderBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.value) {
      case "id":
        {
          const newArray = [...users];
          newArray.sort((a, b) => a.id - b.id);
          setUsers(newArray);
        }
        break;
      case "firstName":
        {
          const newArray = [...users];
          newArray.sort((a, b) => a.firstName.localeCompare(b.firstName));
          setUsers(newArray);
        }
        break;
      case "lastName":
        {
          const newArray = [...users];
          newArray.sort((a, b) => a.lastName.localeCompare(b.lastName));
          setUsers(newArray);
        }
        break;
      case "email":
        {
          const newArray = [...users];
          newArray.sort((a, b) => a.email.localeCompare(b.email));
          setUsers(newArray);
        }
        break;
      case "birthday":
        {
          const newArray = [...users];
          newArray.sort(
            (a, b) => dayjs(a.birthday).valueOf() - dayjs(b.birthday).valueOf()
          );
          setUsers(newArray);
        }
        break;
      case "salary":
        {
          const newArray = [...users];
          newArray.sort((a, b) => a.salary - b.salary);
          setUsers(newArray);
        }
        break;
      default:
        setUsers(data);
    }
  };
  const handleInputFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputFilter(event.target.value);
  };
  const renderList = () => {
    const keys: string[] = [
      "firstName",
      "lastName",
      "email",
      "gender",
      "birthday",
      "phone",
    ];
    return users.filter((user: any) =>
      keys.some((key: string) => {
        let str = "";
        key === "birthday"
          ? (str = dayjs(user[key]).format("DD/MM/YYYY"))
          : (str = user[key]);
        return str.toLowerCase().includes(inputFilter.toLowerCase());
      })
    );
  };
  return (
    <div className="App">
      <h1>A simple web app</h1>
      <div className={styles.features}>
        <div className={styles.orderBy}>
          <h2>OrderBy</h2>
          <select onChange={handleChangeOrderBy}>
            <option value="">Select field to sort</option>
            <option value="id">Id</option>
            <option value="firstName">First Name</option>
            <option value="lastName">Last Name</option>
            <option value="email">Email</option>
            <option value="birthday">Birthday</option>
            <option value="salary">Salary</option>
          </select>
        </div>
        <div className={styles.filter}>
          <h2>Filter</h2>
          <input type="text" onChange={handleInputFilter} />
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Birthday</th>
            <th>Salary</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {renderList().map((item) => (
            <UserItem key={item.id} {...item} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
