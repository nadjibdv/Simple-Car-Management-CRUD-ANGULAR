import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest } from '@angular/common/http';
import { Carview1 } from './carview1';
import { Car } from './car';
import { Router } from '@angular/router';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class ServicecarService {

  constructor(private httpP:HttpClient ,public router : Router) { }
  url : string ="https://localhost:44377/api/";
  carsall : Carview1[];
  
  
  public personA :Person[]

  getAllCars(): void{
    this.httpP.get("https://localhost:44377/api/car").toPromise().then(
        res => {
            this.carsall = res as Carview1[]

            console.log("---------- CAR -----------")
            console.log(res);
        }

    )
  }
  

  getUrlImage(filename:string){
     return this.url.replace("api/","")  + "images/" + filename
  }


  async getCar(id:string) {
        return await this.httpP.get<Carview1>(this.url + "car/" + id ).toPromise().then(res=>{
               return res[0]
        });
   }






addCar(newCar:Car){
   const headers = {'content-type': 'application/json'}

   const body = JSON.stringify(newCar);

   return this.httpP.post(this.url + "car" ,body ,{'headers' : headers}).toPromise().then( r => {

   })

}

editCar(id:string, updatePerson:Car){
     const headers = {'content-type': 'application/json'}

     const body = JSON.stringify(updatePerson);

    return this.httpP.put(this.url + "car/"+ id ,body ,{'headers' : headers}).toPromise();



}

deleteCar(id:string){

   return this.httpP.delete(this.url + "car/"+ id ).toPromise();

}


public async getPersonA(){
  return  await this.httpP.get(this.url + "person").toPromise().then( res=> {
    this.personA = res as Person[] })
}







working = false;
uploadFile: File | null;
uploadFileLabel: string | undefined = 'Choose an image to upload';
uploadProgress: number;
uploadUrl: string;



// ==> handleFileInput
public handleFileInput(files: FileList) {
  if (files.length > 0) {
    this.uploadFile = files.item(0);
    this.uploadFileLabel = this.uploadFile?.name;
  }
}

 public  upload(id:string) {
  if (!this.uploadFile) {
    alert('Choose a file to upload first');
    return;
  }


  
  const formData = new FormData();
  formData.append(this.uploadFile.name, this.uploadFile);
  formData.append('car_id', id);

  const url = this.url + "car/UplodFile";
  const uploadReq = new HttpRequest('POST', url, formData, {
    reportProgress: true,
  });

  this.uploadUrl = '';
  this.uploadProgress = 0;
  this.working = true;

 
 
   return this.httpP.request(uploadReq).subscribe((event: any) => {
    if (event.type === HttpEventType.UploadProgress) {
      this.uploadProgress = Math.round((100 * event.loaded) / event.total);
    } else if (event.type === HttpEventType.Response) {
      this.uploadUrl = event.body.url;


    }
  }, (error: any) => {
    console.error(error);
  }).add(() => {
    this.working = false;
  });
}





}
