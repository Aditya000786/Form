import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from './car.interface';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CarService {
    vin?;
    year?;
    brand?;
    color?;
    price?;
    saleDate?;
    
    constructor(private http: Http) {}
    cars:[
        {vin:string},
        {},
        {}
    ]
    getCarsSmall() {
        return this.http.get('assets/showcase/data/cars-small.json')
                    .toPromise()
                    .then(res => <Car[]> res.json().data)
                    .then(data => { return data; });
    }

    getCarsMedium() {
        return this.http.get('assets/showcase/data/cars-medium.json')
                    .toPromise()
                    .then(res => <Car[]> res.json().data)
                    .then(data => { return data; });
    }

    getCarsLarge() {
        return this.http.get('assets/showcase/data/cars-large.json')
                    .toPromise()
                    .then(res => <Car[]> res.json().data)
                    .then(data => { return data; });
    }
}
