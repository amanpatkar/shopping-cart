import { Injectable } from '@angular/core';
import { SignedUpUser, loginUser } from './auth.model';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serviceUrl = 'http://localhost:3000'
  constructor(private http:HttpClient) { }

  login(){
   return this.http.get<SignedUpUser>(this.serviceUrl+'/signUpUser')
  }
  createUser(form:SignedUpUser){
    return this.http.post<SignedUpUser>(this.serviceUrl+'/signUpUser',form)
  }
}
