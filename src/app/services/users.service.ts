import { AllUsersService } from './all-users.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public _allusers: AllUsersService) { }

  userName: any
  userCart: any
  userAddress: any
  

  async addToCartFetchFunc(id: string | undefined, qty: number){
    const res = await fetch(`http://localhost:1003/users/add-to-cart/${id}`,{
      method: 'Put',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({qty}),
      credentials: 'include'
    })
    const data = await res.json()
    if(!data.err){
      sessionStorage.setItem("userCart", JSON.stringify(data))
      this.userCart = data
    }
  }

  async removeFromCartFetchFunc(id: string){
    const res = await fetch(`http://localhost:1003/users/remove-from-cart/${id}`,{
      method: 'Put',
      credentials: 'include'
    })
    const data = await res.json()
    sessionStorage.setItem("userCart", JSON.stringify(data))
    this.userCart = data
  }

  async buyFetchFunc(){
    const res = await fetch('http://localhost:1003/users/buy',{
      method: 'Get',
      credentials:'include'
    })
  }


}