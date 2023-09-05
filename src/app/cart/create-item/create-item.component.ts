import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CartService } from '../cart.service';
import { cartItem } from '../cart.model';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit, OnDestroy{
  constructor(private cartService:CartService) {}

  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    
  }
  toggle = false;
  files = ''
  addNewItem(form:NgForm){

   console.log(form.value)
   if(form.invalid){
    return
   }
   this.toggle = true;
   this.cartService.addToList(form.value).subscribe((response:cartItem) =>{
    this.toggle = false;
   })
  
  }
  imagePreview = '';
  getSelectedImage(event:any){
   console.log(event.target.value)
   const file = (event.target).files[0];
   file?.name;
   const reader = new FileReader();
   reader.onload = () =>{
     this.imagePreview = String(reader.result);
   }
   reader.readAsDataURL(file)
  }
}
