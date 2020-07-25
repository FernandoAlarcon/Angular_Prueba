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
    activated = true;
}
