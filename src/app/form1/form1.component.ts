import { Component, OnInit,ViewChild } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormArray} from '@angular/forms';
import {Customer} from './interface/customer.interface';

import {Car} from './car.interface';
import {CarService} from './car.service';
import {SelectItem} from './selectitem';
import {DataTable} from 'primeng/primeng';
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component  {


  public myForm: FormGroup;

    // constructor(private _fb: FormBuilder) { }

//          $(document).ready(function(){
//       var i=1;
//      $("#add_row").click(function(){
//       $('#addr'+i).html("<td>"+ (i+1) +"</td><td><input name='name"+i+"' type='text' placeholder='Name' class='form-control input-md'  /> </td><td><input  name='mail"+i+"' type='text' placeholder='Mail'  class='form-control input-md'></td><td><input  name='mobile"+i+"' type='text' placeholder='Mobile'  class='form-control input-md'></td>");

//       $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
//       i++; 
//   });
//      $("#delete_row").click(function(){
//     	 if(i>1){
// 		 $("#addr"+(i-1)).html('');
// 		 i--;
// 		 }
// 	 });

// });

    // ngOnInit() {
    //     this.myForm = this._fb.group({
    //         name: ['', [Validators.required, Validators.minLength(5)]],
    //         addresses: this._fb.array([
    //             this.initAddress(),
    //         ])
    //     });
    // }

    // initAddress() {
    //     return this._fb.group({
    //         street: ['', Validators.required],
    //         postcode: ['']
    //     });
    // }

    // addAddress() {
    //     const control = <FormArray>this.myForm.controls['addresses'];
    //     control.push(this.initAddress());
    // }

    // removeAddress(i: number) {
    //     const control = <FormArray>this.myForm.controls['addresses'];
    //     control.removeAt(i);
    // }

    // save(model: Customer) {
    //     // call API to save
    //     // ...
    //     console.log(model);
    // }

    cars: Car[]=[{
        vin:'vfd654',year:'2002',brand:'Audi',color:'red',price:'56456',saleDate:''
    },
{
        vin:'vfvevd654',year:'2402',brand:'BMW',color:'grey',price:'6456',saleDate:''
    },
];
    
    brands: SelectItem[];

    constructor(private carService: CarService) { }


    ngOnInit() {
        // this.carService.getCarsSmall().then(cars => this.cars = cars);
        
        this.brands = [
            {label: 'Choose', value: null},
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Ford', value: 'Ford'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];
    }
}
