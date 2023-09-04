import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { SignUpComponent } from 'src/app/auth/sign-up/sign-up.component';
import { ItemListsComponent } from './cart/item-lists/item-lists.component';

const routes: Routes = [
  {path:'' , component:LoginComponent , pathMatch:'full'},
  {path:'login' , component:LoginComponent},
  {path:'sign-up' , component:SignUpComponent},
  {path:'product-list' , component:ItemListsComponent},
  {path:'**' , component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
