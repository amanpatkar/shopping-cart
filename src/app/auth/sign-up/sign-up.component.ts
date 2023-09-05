import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { SignedUpUser } from '../auth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  constructor(private auth:AuthService,private router:Router){}
  ngOnInit(): void {
    
  }
  getSignUp(form:NgForm){
  console.log(form.value)
  this.auth.createUser(form.value).subscribe((response:SignedUpUser) =>{
    this.router.navigate(['/dashboard'])
   })
  }
}
