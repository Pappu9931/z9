import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public constructor(){
    this.fun1();
  }

  public fun1(){
    alert('fun1');
  }

  public fun2(){
    alert('fun2');
  }
}
