import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/core/models/card.model';
import { CardsServices } from 'src/app/core/services/card.services';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, EMPTY, map, Observable, switchMap, take, tap } from 'rxjs';


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  card!: Card;
  card$!: Observable<Card>;
  errorMsg!: string;

  constructor(private cardsServices: CardsServices,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.card$ = this.route.params.pipe(
      map(params => params['city']),
      switchMap(city => this.cardsServices.getCardById(city)),
      tap(card => {
        console.log(card);
        this.card = card;
      })
    )
  }

  onBack() {
    this.router.navigate(['card/home']);
  }

}
