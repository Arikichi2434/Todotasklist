export type Department = "営業部" | "開発部" | "人事部";

export type Employee = {
  id: number;
  name: string;
  department: Department;
  skill: string;
  memo: string;
};
