import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Form1Component } from './form1.component';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    declarations: [Form1Component],
    exports: [Form1Component],
    providers: []
})
export class Form1Module { }