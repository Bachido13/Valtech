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

  venice!: Card;
  berlin!: Card;
  barcelona!: Card;
  paris!: Card;
  amsterdam!: Card;
  london!: Card;


  constructor(private cardsServices: CardsServices) { }

  ngOnInit(): void {
    this.cards$ = this.cardsServices.cards$;
    this.cardsServices.getAllCards();
    console.log(this.cards$);

    this.venice = new Card(
      "Italy",
      "Venice",
      "Venice, the capital of northern Italy's Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals",
      "../../../../asstes/venise.jpg"
    ) 
  }

}
