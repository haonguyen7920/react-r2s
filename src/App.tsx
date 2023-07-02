import React, { useState } from "react";
import "./App.css";
import Table from "react-bootstrap/Table";
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
  return (
    <div className="App">
      <h1>A simple web app</h1>
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
          {users.map((user) => (
            <UserItem key={user.id} {...user} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
