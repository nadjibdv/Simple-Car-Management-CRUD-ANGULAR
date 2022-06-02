import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../models/car';
import { ServicecarService } from '../models/servicecar.service';
import { ServicepersonService } from '../models/serviceperson.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  car_ImageUrl = new FormControl('')   

  car_ID = new FormControl('')
  car_Name = new FormControl('')
  car_Plate = new FormControl('')
  person_ID = new FormControl('')   
  
  person_IDold :string = ""
  car_ImageUrlold :string = ""
  
  constructor(public servicePerson1 :ServicepersonService  ,public serviceCar1 :ServicecarService  ,public router : Router , public route :ActivatedRoute) { }

  ngOnInit(): void {
    this.serviceCar1.getPersonA()

    this.route.paramMap.subscribe(async p => {
        

       const upCar = await this.serviceCar1.getCar(p.get('id'))
       await console.log(upCar.car_ID)

       
      this.car_ID.setValue( upCar.car_ID)
      
      this.car_Name.setValue(upCar.car_Name)
      this.car_Plate.setValue(upCar.car_Plate)
      this.car_ImageUrlold = upCar.car_ImageUrl
      //this.car_ImageUrl.setValue((await upCar).car_ImageUrl)
      this.person_IDold = upCar.person_ID
      //this.person_ID.setValue((await upCar).person_ID)
     

      
      
    })

  }



  async onClickEdit(){

    var car_ImageUrlFin : string;
    var filename :string = this.car_ImageUrl.value.replace(/^.*[\\\/]/, '')
    
    if (filename.length == 0){
      car_ImageUrlFin = this.car_ImageUrlold
    }else{
      car_ImageUrlFin = filename
    }
    
     var newCar = new Car(Number(this.car_ID.value) ,this.car_Name.value,this.car_Plate.value,car_ImageUrlFin,Number(this.person_ID.value))
    
     this.serviceCar1.editCar( this.car_ID.value , newCar).then( r=>{
      if(filename.length > 0){
         this.serviceCar1.upload(this.car_ID.value);
       }
     }).then(r=>{
         this.router.navigate(['cars']);
     })
     
   

    
  }
}
