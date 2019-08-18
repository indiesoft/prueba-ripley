import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { LoginComponent } from './views/login/login.component';
import { ProductComponent } from './views/product/product.component';
import { AuthService } from './services/AuthService';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './views/register/register.component';
import { ProductService } from './services/ProductService';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/AuthGuardService';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, // for database
    AppRoutingModule
  ],
  providers: [AuthService, ProductService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
