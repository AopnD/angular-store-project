import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { UserBillComponent } from './components/user-bill/user-bill.component';
import { BillItemComponent } from './components/bill-item/bill-item.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ProductListComponent,
    ProductCardComponent,
    CartComponent,
    HeaderComponent,
    LandingPageComponent,
    RegisterComponent,
    MainComponent,
    WelcomePageComponent,
    CartItemComponent,
    UserBillComponent,
    BillItemComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
