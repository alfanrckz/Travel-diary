export interface IRegister{
    email: string
    password: string
    fullname: string
    phone:string
}

export type AuthMiddlewareData = {
    id: string;
  };

  export interface IJourney{
    nama: string
    image:string
    description:string
    userId:number
  }