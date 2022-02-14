import { MainComponent } from './../main/main.component';
import { AllUsersService } from './../../services/all-users.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() toogleCartEvent = new EventEmitter();

 constructor(public _allusers: AllUsersService, public _main: MainComponent) { }

  chooseCategoryFunc(category:string){
    this._allusers.findProductByCategoryFetchFunc(category)
  }

  searchByNameFunc(productName: string){
    this._allusers.findProductBySearchFetchFunc(productName)
  }



  ngOnInit(): void {
  }


  showCart(){
    this.toogleCartEvent.emit();
      }


}
