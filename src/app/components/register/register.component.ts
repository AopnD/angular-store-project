import { AllUsersService } from './../../services/all-users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: string = ""


  constructor(public _router: Router, public _allusers: AllUsersService) { }

  registerPartOne: boolean = false

  registerArr: string[] = []

  ngOnInit(): void {
  }



  registerFunc(name: string, lastName: string, email: string, userID: number, password: string, passwordConfirm: string, address: { city: string, street: string }) {
    this._allusers.registerFetchFunc(name, lastName, email, userID, password, address)
  }

  moveToPartTwo(email: string, password: string, passwordConfirm: string) {
    if (password != passwordConfirm) {
      this.error = "password doesnt match"
    }
    else {
      if (email && password && passwordConfirm != "") {
        this.registerArr.push(email, password, passwordConfirm)
      }
      if (this.registerArr.length == 3) {
        this.registerPartOne = !this.registerPartOne
      }
    }
  }

  goToLogin() {
    this._router.navigateByUrl('/login')
  }

}
