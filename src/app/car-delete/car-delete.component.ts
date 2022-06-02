import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicecarService } from '../models/servicecar.service';
import { ServicepersonService } from '../models/serviceperson.service';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css']
})
export class CarDeleteComponent implements OnInit {

  idCar:string =""

  constructor(public servicePerson1 :ServicepersonService  ,public serviceCar1 :ServicecarService  ,public router : Router , public route :ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(p => {  
      this.idCar = p.get("id")
   })
  }


   onClickDelete(){

     this.serviceCar1.deleteCar(this.idCar).then(rs =>{
           this.router.navigate(['cars']);
     });
 

  }



}
