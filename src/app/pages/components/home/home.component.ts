import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/core/models/card.model';
import { CardsServices } from 'src/app/core/services/card.services';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards$!: Observable<Card[]>;
  errorMsg!: string;


  constructor(private cardsServices: CardsServices) { }

  ngOnInit(): void {
    this.cards$ = this.cardsServices.cards$;
    this.cardsServices.getAllCards();
    console.log(this.cards$);
  }

}
