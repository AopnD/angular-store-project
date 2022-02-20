import { Router } from '@angular/router';
import { AllUsersService } from './../../services/all-users.service';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-bill',
  templateUrl: './user-bill.component.html',
  styleUrls: ['./user-bill.component.css']
})
export class UserBillComponent implements OnInit {

  constructor(public _users: UsersService, public _allusers:AllUsersService, public _router: Router) { }

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

  
  userAuthentication(){
    if(this._allusers.userRole){
      return
    }else{
      this._router.navigateByUrl('/login')
    }
  }


  ngOnInit(): void {
    this.getUserInfo()
    this.userAuthentication()
  }

}
