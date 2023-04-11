export type User = {
  id: number;
  name: string;
  age: number;
  //ここに記載すると、personalColorが設定されないとエラーとなってしまう
  //変数の後ろに?を追加する子で、プロパティを省略可能となる
  personalColor?: string;
};
