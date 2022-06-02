import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../models/person';
import { ServicepersonService } from '../models/serviceperson.service';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {


  person_ID = new FormControl('')
  person_FName = new FormControl('')
  person_LName = new FormControl('')
  person_Phone = new FormControl('')   


  constructor(private servicePerson1 :ServicepersonService ,public router : Router , public route :ActivatedRoute) { }

  ngOnInit(): void {
  }


  addPerson(){
      const newPersonA = new Person(0 ,this.person_FName.value , this.person_LName.value ,this.person_Phone.value );

      this.servicePerson1.addPerson(newPersonA);

    
  }
 
}
