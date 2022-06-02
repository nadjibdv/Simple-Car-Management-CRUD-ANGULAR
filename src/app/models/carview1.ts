export class Carview1 {

    
       public  car_ImageUrl: string;
       public  car_ID: number;
       public  car_Name: string;
       public  car_Plate: string;
       public  person_ID: number;
       public  person_FName: string;
       public  person_LName: string;
       public  person_Phone: string
      

       constructor(car_ImageUrl: string,car_ID: number,car_Name: string,car_Plate: string,person_ID: number,person_FName: string,person_LName: string,person_Phone: string){
               this.car_ImageUrl = car_ImageUrl;
               this.car_ID = car_ID;
               this.car_Name = car_Name;
               this.car_Plate = car_Plate;

               this.person_ID = person_ID;
               this.person_FName = person_FName;
               this.person_LName = person_LName;
               this.person_Phone = person_Phone;
       }

}
