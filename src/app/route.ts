import { InscriptionComponent } from './component/inscription/inscription.component';
import { HomeComponent } from './component/home/home.component';
import { Routes } from '@angular/router';
import { ActusComponent } from './component/actus/actus.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { EShopComponent } from './component/e-shop/e-shop.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { AnonymousService } from './services/anonymous.service';
import { LoginComponent } from './component/login/login.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'actus', component: ActusComponent },
  { path: 'eshop', component: EShopComponent },
  {
    path: 'inscription',
    component: InscriptionComponent,
    canActivate: [AnonymousService],
  },
  { path: 'login', component: LoginComponent, canActivate: [AnonymousService] },
  { path: 'navbar', component: NavbarComponent, outlet: 'navbar' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'navbar', component: NavbarComponent, outlet: 'navbar' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
