import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { HomeModule, HomeComponent } from "./home/index";
import { Form1Component } from "./form1/form1.component";
import { Form2Component } from "./form2/form2.component";
import { Form3Component } from "./form3/form3.component";
import { Form4Component } from "./form4/form4.component";
import { ForbiddenValidatorDirective } from "./shared/forbidden-name.directive";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'form1', component: Form1Component, data: { title: 'Form 1' } },
  { path: 'form2', component: Form2Component, data: { title: 'Form 2' } },
  { path: 'form3', component: Form3Component, data: { title: 'Form 3' } },
  { path: 'form4', component: Form4Component, data: { title: 'Form 4' } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule, FormsModule, CommonModule,
    HomeModule
  ],
  declarations: [
    AppComponent,
    ForbiddenValidatorDirective,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component
  ],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
