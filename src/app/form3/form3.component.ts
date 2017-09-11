import { Component } from '@angular/core';
import { NG_VALIDATORS } from "@angular/forms";

@Component({
    moduleId: module.id,
    exportAs: 'form3',
    templateUrl: './form3.component.html',
    providers: []
})
export class Form3Component {

    model: Hero = <Hero>{};

    constructor() { }

    formSubmit(){
        alert('Form submitted.');
    }
}

export interface Hero {
    name: string;
}