import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import type { User } from "./types/user";
import axios from "axios";

// type User = {
//   id: number;
//   name: string;
//   age: number;
//   personalColor: string;
// };

//テストデータ
const addData = { id: 1, name: "shiro", age: 23, personalColor: "red" };
const addData1 = { id: 2, name: "kuro", age: 26, personalColor: "blue" };
const addData2 = { id: 3, name: "ao", age: 28, personalColor: "yellow" };
const addData3 = { id: 4, name: "aka", age: 30, hobbies: ["game", "football"] };

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
  users.push(addData3);

  return (
    <div>
      {users.map((user) => (
        <ListItem
          id={user.id}
          name={user.name}
          age={user.age}
          personalColor={user.personalColor}
          hobbies={user.hobbies}
        ></ListItem>
      ))}
    </div>
  );
};
