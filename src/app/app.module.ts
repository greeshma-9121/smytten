import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopnowComponent } from './shopnow/shopnow.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { FooterComponent } from './footer/footer.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { MoreComponent } from './more/more.component';
import { ClothingComponent } from './more/clothing/clothing.component';
import { FashionComponent } from './more/fashion/fashion.component';
import { GroceriesComponent } from './more/groceries/groceries.component';
import { BeautyComponent } from './more/beauty/beauty.component';
import { FoodComponent } from './more/food/food.component';
import { ElectronicsComponent } from './more/electronics/electronics.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopnowComponent,
    AboutusComponent,
    HomeComponent,
    ContactusComponent,
    LoginComponent,
    SigninComponent,
    FooterComponent,
    ViewcartComponent,
    MoreComponent,
    ClothingComponent,
    FashionComponent,
    GroceriesComponent,
    BeautyComponent,
    FoodComponent,
    ElectronicsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
