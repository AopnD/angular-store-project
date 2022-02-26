import { AdminService } from './../../services/admin.service';
import { productInterface } from './../../interfaces/product.interface';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls:['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  constructor(public _admin:AdminService) { }
@Input()
  product: productInterface | undefined

editProductFunc(id:any, name:string, category:string, price:number, pictureUrl:string){
  this._admin.editProductFetchFunc(id, name, category, price, pictureUrl)
}

  ngOnInit(): void {
  }

}
