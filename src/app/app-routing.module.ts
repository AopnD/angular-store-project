import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:``, pathMatch:'full', component:LandingPageComponent},
  {path:`login`, component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'my-store-main-page', component:MainComponent},
  {path:'welcome-page', component:WelcomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
