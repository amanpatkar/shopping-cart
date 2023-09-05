import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
export interface Root {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit,OnDestroy{

  constructor(private cartService:CartService) {}


  productList:Root[] = [];
  ngOnInit(): void {
    this.cartService.getAllProductList().subscribe((response:any) =>{
    this.productList = response;
    console.log(this.productList);
    })
  }
  ngOnDestroy(): void {
    
  }

}
