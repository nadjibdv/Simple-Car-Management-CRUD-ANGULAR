import { Component, OnInit } from '@angular/core';

import { Person } from '../models/person';
import { ServicepersonService } from '../models/serviceperson.service';
import { PersonAddComponent } from '../person-add/person-add.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; 
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(public servicePerson: ServicepersonService ,public router : Router , public route :ActivatedRoute) { }
   

  
  ngOnInit(): void {
        this.servicePerson.getAllPerson();
        
  }


 

  

}
