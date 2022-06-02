import { Component, OnInit } from '@angular/core';
import { ServicecarService } from '../models/servicecar.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(public serviceCar : ServicecarService) { }

  ngOnInit(): void {

    this.serviceCar.getAllCars();
    
  }




}
