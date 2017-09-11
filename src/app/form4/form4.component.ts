import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    exportAs: 'form4',
    templateUrl: './form4.component.html'
})
export class Form4Component implements OnInit {

    model: Hero = <Hero>{};

    isModelValidFlag: boolean = false;
    hasErrorMessage: boolean = false;
    errorMessage: string = '';

    constructor() { }

    ngOnInit() {
        this.model.name = '';
    }

    isModelValid() {
        let isValid = true;
        this.isModelValidFlag = false;
        this.hasErrorMessage = false;
        this.errorMessage = "";

        let element = <HTMLFormElement>document.getElementById('name');
        element.classList.remove('ng-invalid');

        if (this.model.name.length == 0) {
            isValid = false;
            this.hasErrorMessage = true;
            this.errorMessage = "Name is required.";
            element.classList.add('ng-invalid');
        }
        else if (this.model.name.length < 2) {
            isValid = false;
            this.hasErrorMessage = true;
            this.errorMessage = "Name must be at least 2 characters long.";
            element.classList.add('ng-invalid');
        }
        else if (this.model.name.toLowerCase().trim() == 'sandun') {
            isValid = false;
            this.hasErrorMessage = true;
            this.errorMessage = "Name can not be Sandun.";
            element.classList.add('ng-invalid');
        }

        this.isModelValidFlag = isValid;
        return isValid;
    }

    nameChanged(event) {
        this.isModelValid();
    }

    formSubmit() {
        if (this.isModelValid()) {
            alert('Form submitted.');
        }
    }

}

export interface Hero {
    name: string;
}