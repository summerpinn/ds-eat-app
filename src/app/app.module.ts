import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TimeAgoPipe } from 'time-ago-pipe';

import { ShopListComponent } from './shop-list/shop-list.component';
import { ShopCreateComponent } from './shop-create/shop-create.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { ShopClassUniquePipe } from './pipes/shop-class-unique.pipe';

import { DevCmdComponent } from './dev/dev-cmd/dev-cmd.component';
import { VisitTimeAgoPipe } from './pipes/visit-time-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopListComponent,
    ShopCreateComponent,
    LoginComponent, 
    TimeAgoPipe, 
    ShopClassUniquePipe, 
    DevCmdComponent, VisitTimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, 
    ReactiveFormsModule, 
    FormsModule, 
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
