import { userInterface } from './../interfaces/user.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }


  async addToCartFetchFunc(id: string | undefined, qty: number){
    const res = await fetch(`http://localhost:1003/users/add-to-cart/${id}`,{
      method: 'Put',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({qty}),
      credentials: 'include'
    });
  }



}
