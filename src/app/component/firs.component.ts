import { Component } from '@angular/core';
@Component({
    // tslint:disable-next-line: component-selector
    selector: 'hello-world',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css']
})

// tslint:disable-next-line: component-class-suffix
export class HelloWorld {
    title = 'Bienvenido a angular';
    users = [   'Erick',
                'Jorge',
                'Slenght',
                'Germit',
                'bruce'
            ];
    activated: boolean = false;

    // tslint:disable-next-line: no-inferrable-types
    name: string = 'Fernando Alarcon';
  
    adress: {
        street:string;
        city:string;
    };

    hobbies: string[];
    age: number;
    
    womens: string[] = [
        'Melissa',
        'Keren',
        'Andrea',
        'Nesly',
        'Dayana'
    ];

    constructor(){
        this.age = 28;
        this.adress = {
            street : '221B Baker Street',
            city: 'London',
        // tslint:disable-next-line: no-trailing-whitespace
        }; 

        this.hobbies = ['swimin', 'read', 'write'];
    }
}
