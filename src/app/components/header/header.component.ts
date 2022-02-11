import { AllUsersService } from './../../services/all-users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _allusers: AllUsersService) { }

  ngOnInit(): void {
  }

  logoutFunc(){
    this._allusers.logoutFetchFunc()
  }

}
