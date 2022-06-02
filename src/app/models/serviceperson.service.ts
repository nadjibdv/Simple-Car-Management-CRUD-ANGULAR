import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Person } from './person';
import { Router } from '@angular/router';
import { async } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class ServicepersonService {
    
  url:string ="https://localhost:44377/api/";
  public people:Person[];
  public personn:Person;
  constructor(public httpP:HttpClient,public router : Router) { 

  }



      getAllPerson(){
           this.httpP.get(this.url + "person").toPromise().then( res=> {
                 this.people = res as Person[];
                 
          })
     }
   

     async getPerson(id:string){
        return await this.httpP.get<Person>(this.url + "person/" + id).toPromise().then( res=> {
                 return res })
     }
     



     addPerson(newPerson:Person){
         const headers = {'content-type': 'application/json'}
 
         const body = JSON.stringify(newPerson);

         this.httpP.post(this.url + "person" ,body ,{'headers' : headers}).toPromise().then(
           r => {
            this.router.navigate(['person']);
           }
         );


     }


     addNewCar(newPerson:Car){
      const headers = {'content-type': 'application/json'}

      const body = JSON.stringify(newPerson);

      this.httpP.post(this.url + "car" ,body ,{'headers' : headers}).toPromise().then(
        r => {
         this.router.navigate(['cars']);
        }
      );


  }

     editPerson(id:string, updatePerson:Person){
      const headers = {'content-type': 'application/json'}
 
      const body = JSON.stringify(updatePerson);

      this.httpP.put(this.url + "person/"+ id ,body ,{'headers' : headers}).toPromise().then(
        r =>{
          this.router.navigate(['person']);
        }
      );

     

    }
 
    deletePerson(id:string){
  
      this.httpP.delete(this.url + "person/"+ id ).toPromise().then(r=>{
        this.router.navigate(['person']);
      });
      
      
    }

  
 }


