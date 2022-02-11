import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public _router: Router) { }

  ngOnInit(): void {
  }

  goToLogin() {
    this._router.navigateByUrl('/login')
  }

  goToRegister(){
    this._router.navigateByUrl('/register')
  }

}
