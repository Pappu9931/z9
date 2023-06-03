import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public productdetails : any;

  public getProductDetail(product:any){
    console.log(product);
    this.productdetails= product;

  }
  public products=[
    {
    id: 1,
    Name: 'product1',
    Price:'100',
    description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
    imgURL:'assets/images/home/pic.jpg'
    },


    {
      id: 2,
      Name: 'product2',
      Price:'200',
      Description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
      imgURL:'assets/images/home/pic.jpg'
    },

    {
        id: 3,
        Name: 'product3',
        Price:'300',
        Description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
        imgURL:'assets/images/home/pic.jpg'
    },

    {
          id: 4,
          Name: 'product4',
          Price:'400',
          Description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
          imgURL:'assets/images/home/pic.jpg'
    },

    {
      id: 5,
      Name: 'product5',
      Price:'500',
      Description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
      imgURL:'assets/images/home/pic.jpg'
  },

  ]
}