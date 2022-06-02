import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../models/person';
import { ServicepersonService } from '../models/serviceperson.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.css']
})
export class PersonEditComponent implements OnInit {

  person_ID = new FormControl('')
  person_FName = new FormControl('')
  person_LName = new FormControl('')
  person_Phone = new FormControl('')  

  
  constructor(private servicePerson1 :ServicepersonService  ,public router : Router , public route :ActivatedRoute) { }

 
   updtaePerson(){
         let p = new Person(this.person_ID.value , this.person_FName.value , this.person_LName.value ,this.person_Phone.value);
        
         this.servicePerson1.editPerson(this.person_ID.value , p);

   }

  ngOnInit(): void {
    
      this.route.paramMap.subscribe(async p => {
        
        const personn = this.servicePerson1.getPerson(p.get('id'))
         
        if (personn != null){
          this.person_ID.setValue((await personn).person_ID)
          this.person_FName.setValue((await personn).person_FName)
          this.person_LName.setValue((await personn).person_LName)
          this.person_Phone.setValue((await personn).person_Phone)


        }else{
           this.router.navigate(["person"])
        }
      })

  }



}
