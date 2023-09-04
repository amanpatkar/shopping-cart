import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { loginUser } from '../auth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router){}
  ngOnInit(): void {
    
  }
  getLogin(form:NgForm){
   
   this.auth.login().subscribe((response:any) =>{
    response.forEach((element:any) => {
      if(element.email === form.value.email && element.password === form.value.password){
       this.router.navigate(['product-list'])
    }
    });

   })

  }
}
