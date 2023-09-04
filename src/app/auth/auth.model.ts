export interface loginUser  {
 [x: string]: any
 email:string | null,
 password:string | null
}

export interface SignedUpUser  {
    email:string | null,
    phone:number | null,
    password:string | null,
    c_password:string | null
   }