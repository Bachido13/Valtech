import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/core/models/card.model';
import { CardsServices } from 'src/app/core/services/card.services';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  card!: Card;
  card$!: Observable<Card>;
  showDescription!: boolean; 



  constructor(private cardsServices: CardsServices,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.showDescription = false;


  }

  onViewCard(city: string) {
    this.router.navigateByUrl(`card/${this.card.city}`)
  }

}
