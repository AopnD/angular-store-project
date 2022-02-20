import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-bill',
  templateUrl: './user-bill.component.html',
  styleUrls: ['./user-bill.component.css']
})
export class UserBillComponent implements OnInit {

  constructor(public _users: UsersService) { }

  getUserInfo() {
    this._users.userName = sessionStorage.getItem("userName")
    this._users.userCart = sessionStorage.getItem("userCart")
    this._users.userName = JSON.parse(this._users.userName)
    this._users.userCart = JSON.parse(this._users.userCart)
  }

  buyFunc(){
this._users.buyFetchFunc()
sessionStorage.removeItem("userCart")
  }

  ngOnInit(): void {
    this.getUserInfo()
  }

}
