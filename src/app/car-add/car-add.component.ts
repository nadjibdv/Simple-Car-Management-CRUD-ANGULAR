import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../models/car';
import { ServicecarService } from '../models/servicecar.service';
import { ServicepersonService } from '../models/serviceperson.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  public car_ImageUrl = new FormControl('')   

  public car_ID = new FormControl('')
  public car_Name = new FormControl('')
  public  car_Plate = new FormControl('')
  public person_ID = new FormControl('')   
  
  
  constructor(public servicePerson1 :ServicepersonService  ,public serviceCar1 :ServicecarService  ,public router : Router , public route :ActivatedRoute) { }

  ngOnInit(): void {

    this.serviceCar1.getPersonA()

  }
  

  async onClickAdd(){
    var filename :string = this.car_ImageUrl.value.replace(/^.*[\\\/]/, '')
    var newCar = new Car(0 ,this.car_Name.value,this.car_Plate.value,filename,Number(this.person_ID.value))
    

      this.serviceCar1.addCar(newCar).then(
        r =>{
           this.serviceCar1.upload("0");
        }
      ).then(r=>{
        this.router.navigate(['cars']);
      })
   
     
    
    //alert(filename.length)
  }

}
