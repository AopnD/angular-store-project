import { userInterface } from './../../interfaces/user.interface';
import { AllUsersService } from './../../services/all-users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.components.css']
})
export class WelcomePageComponent implements OnInit {




  constructor(public _router: Router, public _allusers: AllUsersService) { }

  ngOnInit(): void {

  }

  goToMain(){
    this._router.navigateByUrl('/my-store-main-page')
  }



}
