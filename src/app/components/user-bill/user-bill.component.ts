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

  creditCardArr: any


  getUserInfo() {
    this._users.userName = sessionStorage.getItem("userName")
    this._users.userCart = sessionStorage.getItem("userCart")
    this._users.userName = JSON.parse(this._users.userName)
    this._users.userCart = JSON.parse(this._users.userCart)
  }


searchInBill(searchValue: string){
  
}

  buyFunc(creditCardNum:number){
this.creditCardArr = Array.from(String(creditCardNum), this.creditCardMapFunc)
if(this.creditCardArr.length == 12 ){
console.log("yay")
}else{
  console.log("BOO")
}
// this._users.buyFetchFunc()
// sessionStorage.removeItem("userCart")
  }

  checkRoleFunc(){
    this._allusers.userRole = sessionStorage.getItem("Role")
    this._allusers.userRole = JSON.parse(this._allusers.userRole)
  }
  
  userAuthentication(){
    if(this._allusers.userRole){
      return
    }else{
      this._router.navigateByUrl('/login')
      console.log(this._allusers.userRole)
    }
  }

  getUserAddress(){
    this._users.userAddress = sessionStorage.getItem("userAddress")
    this._users.userAddress = JSON.parse(this._users.userAddress)
  }

  creditCardMapFunc(num:any){
    Number(num)
  }

  ngOnInit(): void {
    this.getUserInfo()
    this.checkRoleFunc()
    this.userAuthentication()
  }

}
