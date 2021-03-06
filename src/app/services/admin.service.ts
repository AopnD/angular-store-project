import { AllUsersService } from './all-users.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {



  constructor(public _allusers:AllUsersService) { }

  async addProductFetchFunc(name:string, category: string, price: number, pictureUrl: string){
    const res = await fetch('http://localhost:1003/admin/add-product',{
      method: 'Post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({name, category, price, pictureUrl}),
      credentials: 'include'
    })
    const data = await res.json()
    if(!data.error){
   this._allusers.allProductFetchFunc()
    }
  }

  async deleteProductFetchFunc(id: string | undefined){
    const res = await fetch(`http://localhost:1003/admin/delete-product/${id}`,{
      method: 'Put',
      credentials:'include'
    })
    const data = await res.json()
    if(!data.error){
      this._allusers.allProductFetchFunc()
    }
  }


  async editProductFetchFunc( id:string, name:string, category:string, price:number, pictureUrl:string){
    const res = await fetch(`http://localhost:1003/admin/edit-product/${id}`,{
      method:'Post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({name, category, price, pictureUrl}),
      credentials: 'include'
    })
    const data = await res.json()
    if(!data.error){
      this._allusers.allProductFetchFunc()
    }
  }


}
