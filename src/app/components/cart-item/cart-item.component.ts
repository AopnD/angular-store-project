import { UsersService } from './../../services/users.service';
import { userInterface } from './../../interfaces/user.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']

})
export class CartItemComponent implements OnInit {

  constructor(public _users: UsersService) { }
  @Input()
  item: any | undefined

removeFromCartFunc(id: string){
  this._users.removeFromCartFetchFunc(id)
}


  ngOnInit(): void {
  }

}
