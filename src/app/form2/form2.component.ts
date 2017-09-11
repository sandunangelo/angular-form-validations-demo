import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    moduleId: module.id,
    exportAs: 'form2',
    templateUrl: './form2.component.html'
})
export class Form2Component implements OnInit {

    model: Hero = <Hero>{};
    modelForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.modelForm = new FormGroup({
            'name': new FormControl(this.model.name, [Validators.required, Validators.minLength(4)]),
            'age': new FormControl(this.model.age, [Validators.required, Validators.min(12)])
        });
    }

    get name() { return this.modelForm.get('name'); }
    get age() { return this.modelForm.get('age'); }

    formSubmit() {
        alert('Form submitted.');
    }
}

export interface Hero {
    name: string;
    age: number;
}