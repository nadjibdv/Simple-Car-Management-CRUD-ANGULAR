export class Car {

    public car_ID: number;
    public car_Name: string;
    public car_Plate: string;
    public car_ImageUrl: string;
    public person_ID: number;


    constructor(car_ID: number ,car_Name: string ,car_Plate: string ,car_ImageUrl: string,person_ID: number){
               this.car_ID = car_ID;
               this.car_Name = car_Name;
               this.car_Plate = car_Plate;
               this.car_ImageUrl = car_ImageUrl;
               this.person_ID=person_ID;
    }

}
