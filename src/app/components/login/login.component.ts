import { AllUsersService } from './../../services/all-users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _router: Router, public _allusers: AllUsersService) { }

  ngOnInit(): void {
  }

  goToRegister(){
    this._router.navigateByUrl('/register')
  }

  loginfunc(email: string, password:string){
    this._allusers.loginFetchFunc(email, password)
  }


}
