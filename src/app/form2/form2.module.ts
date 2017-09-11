import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Form2Component } from './form2.component';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    declarations: [Form2Component],
    exports: [Form2Component],
    providers: []
})
export class Form2Module { }