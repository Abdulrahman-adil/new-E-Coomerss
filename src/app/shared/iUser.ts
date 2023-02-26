export interface iUser{
  name:string,
  username:string,
  email:string
}

export class User{
  constructor(
    public username:string,
    public email:string,
    public password:string,
    public confirmPassword:string,
    public social:string,
  ){}
}
