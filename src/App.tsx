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
const addData = { id: 1, name: "shiro", age: 23, personalColor: "red" };
const addData1 = { id: 2, name: "kuro", age: 26, personalColor: "blue" };
const addData2 = { id: 3, name: "ao", age: 28, personalColor: "yellow" };

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get<User[]>("https://example.com/users").then((res: any) => {
      setUsers(res.data);
    });
  }, []);

  users.push(addData);
  users.push(addData1);
  users.push(addData2);

  return (
    <div>
      {users.map((user) => (
        <ListItem
          id={user.id}
          name={user.name}
          age={user.age}
          personalColor={user.personalColor}
        ></ListItem>
      ))}
    </div>
  );
};
