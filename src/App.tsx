import React, { useState } from "react";
import { UserItem } from "./components/UserItem";
import styles from "./App.module.css";
import Table from "react-bootstrap/Table";
import dayjs from "dayjs";
import usersData from "./data/users.json";
import Pagination from "react-bootstrap/Pagination";

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
  const [users, setUsers] = useState<User[]>(usersData);
  const [filterText, setFilterText] = useState<string>("");
  const [sortSelected, setSortSelected] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 10;

  // filteredUsers List
  const keys: string[] = [
    "firstName",
    "lastName",
    "email",
    "gender",
    "birthday",
    "phone",
  ];
  const filteredUsers: User[] = users.filter((user: any) =>
    keys.some((key: string) => {
      let str = "";
      key === "birthday"
        ? (str = dayjs(user[key]).format("DD/MM/YYYY"))
        : (str = user[key]);
      return str.toLowerCase().includes(filterText.toLowerCase());
    })
  );

  // sortedUsers List
  const sortedUsers: User[] = [...filteredUsers];
  switch (sortSelected) {
    case "id":
      sortedUsers.sort((a, b) => a.id - b.id);
      break;
    case "firstName":
      sortedUsers.sort((a, b) => a.firstName.localeCompare(b.firstName));
      break;
    case "lastName":
      sortedUsers.sort((a, b) => a.lastName.localeCompare(b.lastName));
      break;
    case "email":
      sortedUsers.sort((a, b) => a.email.localeCompare(b.email));
      break;
    case "birthday":
      sortedUsers.sort(
        (a, b) => dayjs(a.birthday).valueOf() - dayjs(b.birthday).valueOf()
      );
      break;
    case "salary":
      sortedUsers.sort((a, b) => a.salary - b.salary);
      break;
    default:
      sortedUsers.sort((a, b) => a.id - b.id);
  }

  // paginatedUsers List
  const paginatedUsers: User[] = sortedUsers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // function
  const handleChangeOrderBy = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortSelected(event.target.value);
  };
  const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };
  const handleChangePage = (numberPage: number) => {
    setCurrentPage(numberPage);
  };
  let items = [];
  let totalPage: number = Math.ceil(sortedUsers.length / pageSize);
  console.log(totalPage);

  for (let numberPage = 1; numberPage <= totalPage; numberPage++) {
    items.push(
      <Pagination.Item
        key={numberPage}
        active={numberPage === currentPage}
        onClick={() => handleChangePage(numberPage)}
      >
        {numberPage}
      </Pagination.Item>
    );
  }
  return (
    <div className={styles.App}>
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
          <input type="text" onChange={handleChangeFilter} />
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
          {paginatedUsers.map((item) => (
            <UserItem key={item.id} {...item} />
          ))}
        </tbody>
      </Table>
      <Pagination className={styles.pagination}>{items}</Pagination>
    </div>
  );
}

export default App;
