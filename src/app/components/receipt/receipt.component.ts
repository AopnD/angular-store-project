import { Router } from '@angular/router';
import { AllUsersService } from './../../services/all-users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  constructor(public _allusers:AllUsersService, public _router:Router) { }














  ngOnInit(): void {
  }

}
