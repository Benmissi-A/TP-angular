import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AngularFireModule} from '@angular/fire';  //ok
import {AngularFirestoreModule} from '@angular/fire/firestore';  //ok
import {FormsModule, ReactiveFormsModule} from '@angular/forms';  //ok

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment'; //ok

import { AccueilComponent } from './accueil/accueil.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';


import * as firebase from 'firebase';
import { LoginComponent } from './authentification/login/login.component';
import { AdminComponent } from './authentification/admin/admin.component';
firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PresentationComponent,
    ContactComponent,
    NavComponent,
    LoginComponent,
    AdminComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
