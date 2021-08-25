import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoreComponent } from './more/more.component';
import { BeautyComponent } from './more/beauty/beauty.component';
import { FashionComponent } from './more/fashion/fashion.component';
import { FoodComponent } from './more/food/food.component';
import { ElectronicsComponent } from './more/electronics/electronics.component';
import { GroceriesComponent } from './more/groceries/groceries.component';
import { ClothingComponent } from './more/clothing/clothing.component';
import { ShopnowComponent } from './shopnow/shopnow.component';
import { SigninComponent } from './signin/signin.component';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'shopnow',component:ShopnowComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'home',component:HomeComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'login',component:LoginComponent},
  {path:'signin',component:SigninComponent},
  {path:'more',component:MoreComponent,children:[
    {path:'beauty',component:BeautyComponent},
    {path:'fashion',component:FashionComponent},
    {path:'clothing',component:ClothingComponent},
    {path:'food',component:FoodComponent},
    {path:'groceries',component:GroceriesComponent},
    {path:'electronics',component:ElectronicsComponent},
  ]},
  {path:'viewcart',component:ViewcartComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
