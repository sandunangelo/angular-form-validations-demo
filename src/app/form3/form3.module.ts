import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Form3Component } from './form3.component';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    declarations: [Form3Component],
    exports: [Form3Component],
    providers: []
})
export class Form3Module { }