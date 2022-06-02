import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonComponent } from './person/person.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonDeleteComponent } from './person-delete/person-delete.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { CarComponent } from './car/car.component';
import { CarAddComponent } from './car-add/car-add.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarDeleteComponent } from './car-delete/car-delete.component';
import { NavbarcarComponent } from './navbarcar/navbarcar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { MatDialogModule } from '@angular/material/dialog'; 

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonAddComponent,
    PersonDeleteComponent,
    PersonEditComponent,
    CarComponent,
    CarAddComponent,
    CarEditComponent,
    CarDeleteComponent,
    NavbarcarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule  ,
     MatDialogModule,
     FormsModule, ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
