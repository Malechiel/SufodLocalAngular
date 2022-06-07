import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EShopComponent } from './component/e-shop/e-shop.component';
import { ActusComponent } from './component/actus/actus.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { EditPersonneComponent } from './component/edit-personne/edit-personne.component';
import { RouterModule } from '@angular/router';
import { routes } from './route';
import { HomeComponent } from './component/home/home.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorInterceptor } from './interceptor/auth-interceptor.interceptor';
//import { ListCompteComponent } from './admin/list-compte/list-compte.component';
//import { EditCompteComponent } from './admin/edit-compte/edit-compte.component';

@NgModule({
  declarations: [
    AppComponent,
    EShopComponent,
    ActusComponent,
    SigninComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    InscriptionComponent,
    LoginComponent,
    EditPersonneComponent,
    //    ListCompteComponent,
    //    EditCompteComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
