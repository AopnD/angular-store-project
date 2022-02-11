import { AllUsersService } from './../../services/all-users.service';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public _users: UsersService, public _allusers: AllUsersService) { }

  ngOnInit(): void {

  }

}
