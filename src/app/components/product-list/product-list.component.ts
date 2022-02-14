import { AllUsersService } from './../../services/all-users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(public _allusers: AllUsersService) { }


  productArr = this._allusers.products

  ngOnInit(): void {
    this._allusers.allProductFetchFunc()
  }

}
