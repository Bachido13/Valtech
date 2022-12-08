import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';



@NgModule({
  declarations: [
    CardComponent,
    HomeComponent,
    CardDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
