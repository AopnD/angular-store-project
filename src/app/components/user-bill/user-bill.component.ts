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

  constructor(public _users: UsersService, public _allusers: AllUsersService, public _router: Router) { }

  creditCardArr: any
  creditCardError: string | undefined
  userEmail: any
  orderInfo = {
    email: "",
    city: "",
    street: "",
    date: "",
    creditCard: +"",
  }

  cartToReceipt:[] = []


  isFreeDate = false
  dateError = ""

  openReceipt: boolean = false
  showReceiptBtn: boolean = false



  getUserInfo() {
    this._users.userName = sessionStorage.getItem("userName")
    this._users.userCart = sessionStorage.getItem("userCart")
    this.userEmail = sessionStorage.getItem("email")

    this._users.userName = JSON.parse(this._users.userName)
    this._users.userCart = JSON.parse(this._users.userCart)
    this.orderInfo.email = JSON.parse(this.userEmail)
  }


  searchInBill(searchValue: string) {

  }



  async buyFunc() {
    this.creditCardCheck(this.orderInfo.creditCard)
    if(this.creditCardError == "Please Check Credit Card Info"){
      return
    }else{
      this.isFreeDate = await this._users.checkOrderDateFunc(this.orderInfo.date)
      if (this.isFreeDate == false) {
        this.dateError = "Date if Fully Booked"
        return
      } else {
        this.dateError = ""
        this.cartToReceipt = this._users.userCart
        this._users.saveNewOrderFetchFunc(this.orderInfo.email, this.orderInfo.date, this.orderInfo.city, this.orderInfo.street, this._users.userCart)
        this._users.buyFetchFunc()
        sessionStorage.removeItem("userCart")
        this.showReceiptBtn = !this.showReceiptBtn
      }
    }

  }




  creditCardCheck(creditCardNum: number) {
    this.creditCardArr = Array.from(String(creditCardNum), this.creditCardMapFunc)
    if (this.creditCardArr.length == 12) {
      this.creditCardError = ""
    } else {
      this.creditCardError = "Please Check Credit Card Info"
    }
  }


  async checkDateFunc() {
    this.isFreeDate = await this._users.checkOrderDateFunc(this.orderInfo.date)

    if (this.isFreeDate == false) {
      this.dateError = "Date if Fully Booked"
      return
    } else {
      this.dateError = ""
      return
    }
  }

  showReceiptFunc(){
    this.openReceipt = !this.openReceipt
  }





  checkRoleFunc() {
    this._allusers.userRole = sessionStorage.getItem("Role")
    this._allusers.userRole = JSON.parse(this._allusers.userRole)
  }

  userAuthentication() {
    if (this._allusers.userRole) {
      return
    } else {
      this._router.navigateByUrl('/login')
      console.log(this._allusers.userRole)
    }
  }

  getUserAddress() {
    this._users.userAddress = sessionStorage.getItem("userAddress")
    this._users.userAddress = JSON.parse(this._users.userAddress)
    this.orderInfo.city = this._users.userAddress.city
    this.orderInfo.street = this._users.userAddress.street
  }

  creditCardMapFunc(num: any) {
    Number(num)
  }

  ngOnInit(): void {
    this.getUserInfo()
    this.checkRoleFunc()
    this.userAuthentication()
  }

}
