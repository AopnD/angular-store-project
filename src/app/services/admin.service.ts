import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {



  constructor() { }

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
      return
    }
  }

  async deleteProductFetchFunc(id: string){
    const res = await fetch(`http://localhost:1003/admin/delete-product/${id}`,{
      method: 'Post',
      credentials:'include'
    })
    const data = await res.json()
    if(!data.error){
      return
    }
  }


}
