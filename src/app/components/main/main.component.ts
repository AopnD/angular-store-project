import { Router } from '@angular/router';
import { AllUsersService } from './../../services/all-users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls:['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public _allusers: AllUsersService, public _router:Router) { }

  toogleCartDiv: boolean = false

toogleCartDivFunc(){
  this.toogleCartDiv = !this.toogleCartDiv
}

checkRoleFunc(){
  this._allusers.userRole = sessionStorage.getItem("Role")
  this._allusers.userRole = JSON.parse(this._allusers.userRole)
}


userAuthentication(){
  if(this._allusers.userRole){
    return
  }else{
    this._router.navigateByUrl('/login')
  }
}

  ngOnInit(): void {
this.checkRoleFunc()
this.userAuthentication()
  }

}
