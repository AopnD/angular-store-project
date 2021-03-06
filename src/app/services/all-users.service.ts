import { orderInterface } from './../interfaces/order.interdace';
import { productInterface } from './../interfaces/product.interface';
import { userInterface } from './../interfaces/user.interface';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AllUsersService {

  constructor(public _router: Router) { }

  user: userInterface | undefined
  products: productInterface[] = []
  userRole: any
orders: orderInterface[] =[]


  async loginFetchFunc(email: string, password: string) {
    const res = await fetch('http://localhost:1003/allusers/login', {
      method: 'Post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include'
    });
    const data = await res.json()
    if (!data.err) {
      this.user = data
      this.saveUserDataInLocal()
      this.goToWelcomePage()
    } else {
      alert(data.msg);
    }
  }


  async registerFetchFunc(name: string, lastName: string, email: string, userID: number, password: string, address: { city: string, street: string }) {
    const res = await fetch('http://localhost:1003/allusers/register', {
      method: 'Post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ name, lastName, email, userID, password, address }),
      credentials: 'include'
    });
    const data = await res.json()
    if (!data.error) {
      this.goToLogin()
    } else {
      alert(data.error)
    }
  }


  async allProductFetchFunc() {
    const res = await fetch('http://localhost:1003/allusers/show-all-products', {
      credentials: 'include'
    });
    const data = await res.json()
    this.products = data
  }

  async logoutFetchFunc() {
    const res = await fetch('http://localhost:1003/allusers/logout', {
      method: 'Delete',
      credentials: 'include'
    })
    sessionStorage.clear()
    this.goToLogin()
  }

  async findProductByCategoryFetchFunc(category: string) {
    const res = await fetch('http://localhost:1003/allusers/find-product-by-category', {
      method: 'Post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ category }),
      credentials: 'include'
    })
    const data = await res.json()
    this.products = data
  }

  async findProductBySearchFetchFunc(productName: string) {
    const res = await fetch('http://localhost:1003/allusers/find-product-by-name', {
      method: 'Post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ productName }),
      credentials: 'include'
    })
    const data = await res.json()
    this.products = data
  }

  async getAllOrdersFetchFunc(){
    const res = await fetch('http://localhost:1003/allusers/order-amount',{
      method:'Get',
      credentials:'include'
    });
    const data = await res.json()
    this.orders = data
  }
  


  goToLogin() {
    this._router.navigateByUrl('/login')
  }

  goToWelcomePage() {
    this._router.navigateByUrl('/welcome-page')
  }

  saveUserDataInLocal() {
    sessionStorage.setItem("userName", JSON.stringify(this.user?.name))
    const userNewCart = this.user?.cart
    sessionStorage.setItem("userCart", JSON.stringify(userNewCart))
    sessionStorage.setItem("Role", JSON.stringify(this.user?.role))
    sessionStorage.setItem("userAddress", JSON.stringify(this.user?.address))
    sessionStorage.setItem("email", JSON.stringify(this.user?.email))
  }
}
