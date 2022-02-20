import { AdminService } from './../../services/admin.service';
import { AllUsersService } from './../../services/all-users.service';
import { UsersService } from './../../services/users.service';
import { productInterface } from './../../interfaces/product.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(public _users: UsersService, public _allusers: AllUsersService, public _admin:AdminService) { }

toogleDiv: boolean = false


  @Input()
  product: productInterface | undefined
  
  addToCartFunc(id: string | undefined, qty:number){
    if(qty <= 0){
      return alert("ERROR! Please Pick A Valide Number")
    }
    this._users.addToCartFetchFunc(id, qty)
  }

ToogleAmountChoosingDiv(){
this.toogleDiv=!this.toogleDiv
}

deleteProduct(id: string | undefined){
this._admin.deleteProductFetchFunc(id)
}

  ngOnInit(): void {
  }

}
