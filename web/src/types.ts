export interface ILoginPayload {
  email: string;
  password: string;
}
export interface ILoginResponse {
  id:string;
  token:string;
}