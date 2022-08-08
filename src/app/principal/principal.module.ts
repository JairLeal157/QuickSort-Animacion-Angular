import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HeadComponent } from './head/head.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { TablaComponent } from './tabla/tabla.component';



@NgModule({
  declarations: [
    MainComponent,
    HeadComponent,
    FormComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [
    MainComponent
  ]
})
export class PrincipalModule { }
