import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Form4Component } from './form4.component';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    declarations: [Form4Component],
    exports: [Form4Component],
    providers: []
})
export class Form4Module { }