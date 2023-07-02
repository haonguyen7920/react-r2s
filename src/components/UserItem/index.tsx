import React from "react";
import dayjs from "dayjs";
interface Props {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  birthday: string;
  salary: number;
  phone: string;
}
export const UserItem = ({
  id,
  firstName,
  lastName,
  email,
  gender,
  birthday,
  salary,
  phone,
}: Props) => {
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{gender}</td>
      <td>{dayjs(birthday).format("DD/MM/YYYY")}</td>
      <td>{salary}</td>
      <td>(+84){phone.split("-")}</td>
    </tr>
  );
};
