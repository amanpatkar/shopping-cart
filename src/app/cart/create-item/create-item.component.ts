import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit, OnDestroy{
  constructor() {}

  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    
  }

  addNewItem(form:NgForm){
   console.log(form.value)
  }
  imagePreview = ''
  getSelectedImage(event:any){
   console.log(event.target.value)
   const file = (event.target).files[0];
   file?.name;
   const reader = new FileReader();
   reader.onload = () =>{
     this.imagePreview = String(reader.result);
   }
   reader.readAsDataURL(file);
  }
}
