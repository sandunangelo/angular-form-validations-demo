import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    exportAs: 'form1',
    templateUrl: './form1.component.html'
})
export class Form1Component {

    genderTypes: string[] = ['Male', 'Female'];
    model: Hero = <Hero>{};

    constructor() { }

    formSubmit() {
        alert('Form submitted.');
    }
}

export interface Hero {
    name: string;
    age: number;
    gender: string;
}