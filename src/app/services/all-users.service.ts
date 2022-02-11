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
      body: JSON.stringify({ name, lastName, email, userID, password, address}),
      credentials: 'include'
    });
    const data = await res.json()
    if(!data.error){
      this.goToLogin()
    }else{
      alert(data.error)
    }
  }


  async allProductFetchFunc(){
    const res = await fetch('http://localhost:1003/allusers/show-all-products',{
     credentials: 'include' 
    });
    const data = await res.json()
    this.products = data
  }

  async logoutFetchFunc(){
    const res = await fetch('http://localhost:1003/allusers/logout',{
      method: 'Delete',
      credentials:'include'
    })
this.goToLogin()
  }

  goToLogin() {
    this._router.navigateByUrl('/login')
  }

 goToWelcomePage() {
    this._router.navigateByUrl('/welcome-page')
  }
}
