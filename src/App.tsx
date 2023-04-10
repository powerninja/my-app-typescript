import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";

type User = {
  id: number;
  name: string;
  age: number;
  personalColor: string;
};

//テストデータ
const addData = { id: 123, name: "shiro", age: 23, personalColor: "bule" };

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>("https://example.com/users").then((res: any) => {
      setUsers(res.data);
    });
  }, []);

  users.push(addData);

  return (
    <div>
      {users.map((user) => (
        <ListItem id={user.id} name={user.name} age={user.age}></ListItem>
      ))}
    </div>
  );
};
