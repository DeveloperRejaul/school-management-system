export interface ILoginPayload {
  email: string;
  password: string;
}
export interface ILoginResponse {
  id:string;
  token:string;
}

export type UserRes = {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
  role: string; // could be union type like "0" | "1" if roles are fixed
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  schools: string[]; // currently an array of IDs or objects?
  token: string;
};

export type SchoolTypes = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  title: string;
  subTitle: string;
  slogan: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
};
