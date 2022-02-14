import { Router } from '@angular/router';
import { AllUsersService } from './../../services/all-users.service';
import { UsersService } from './../../services/users.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  @Output() toogleCartEvent = new EventEmitter();

  constructor(public _users: UsersService, public _allusers: AllUsersService, public _router: Router) {
  }



  getUserInfo() {
    this._users.userName = sessionStorage.getItem("userName")
    this._users.userCart = sessionStorage.getItem("userCart")
    this._users.userName = JSON.parse(this._users.userName)
    this._users.userCart = JSON.parse(this._users.userCart)
  }

  goToBill(){
    this._router.navigateByUrl('/user-transaction')
  }

  ngOnInit(): void {
    this.getUserInfo()
  }

  hideCart(){
    this.toogleCartEvent.emit();
      }

}
