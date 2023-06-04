import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public productdetails : any;
  public products: any;

  public getProductDetail(product:any){
    console.log(product);
    this.productdetails= product;

  }
 

  constructor( public apiservice: ApiService){
    this.apiservice.getProducts().subscribe((productResponse) => {
    console.log(productResponse);
    this.products = productResponse.data;
      });}
}