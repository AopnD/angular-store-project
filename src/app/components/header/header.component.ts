import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { AllUsersService } from './../../services/all-users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _allusers: AllUsersService, public _users:UsersService, public _router:Router) { }

  
  getUserInfo() {
    this._users.userName = sessionStorage.getItem("userName")
    this._users.userName = JSON.parse(this._users.userName)
    if(this._allusers?.user){
      this._allusers.user.name = this._users.userName
    }
  }

  logoutFunc(){
    this._allusers.logoutFetchFunc()
  }

  goToMain(){
this._router.navigateByUrl('/my-store-main-page')
  }


  ngOnInit(): void {
    this.getUserInfo()
  }

 

}
