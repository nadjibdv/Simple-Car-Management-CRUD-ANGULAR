import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicepersonService } from '../models/serviceperson.service';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.css']
})
export class PersonDeleteComponent implements OnInit {
  
  public idPerson : string = ""
  constructor(private servicePerson1 :ServicepersonService ,public router : Router , public route :ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(p => {  
      this.idPerson = p.get("id")
   })
  }

  deletPerson(){
    this.servicePerson1.deletePerson(this.idPerson)
  }



}
