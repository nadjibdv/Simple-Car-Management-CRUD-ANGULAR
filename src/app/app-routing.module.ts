import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarAddComponent } from './car-add/car-add.component';
import { CarDeleteComponent } from './car-delete/car-delete.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarComponent } from './car/car.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonDeleteComponent } from './person-delete/person-delete.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {
    path:"person" ,
    component: PersonComponent},
  {
    path:"cars" ,
    component: CarComponent},
    {
      path:"person/add",
     component:PersonAddComponent
    },
    {
      path:"person/edit/:id",
      component:PersonEditComponent
   },
   {
     path:"person/delete/:id",
     component:PersonDeleteComponent
  },{
    path:"cars/add",
    component :CarAddComponent
  },{
    path:"cars/edit/:id",
    component :CarEditComponent
  },{
    path:"cars/delete/:id",
    component :CarDeleteComponent

  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
