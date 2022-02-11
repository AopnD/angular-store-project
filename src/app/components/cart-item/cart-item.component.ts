import { userInterface } from './../../interfaces/user.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']

})
export class CartItemComponent implements OnInit {

  constructor() { }


  @Input()
  productInCart: userInterface | undefined

  ngOnInit(): void {
  }

}
