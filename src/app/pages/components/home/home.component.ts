import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/core/models/card.model';
import { CardsServices } from 'src/app/core/services/card.services';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards$!: Observable<Card[]>;
  errorMsg!: string;
  showDescription!: boolean;
  card!: Card;

  venice!: Card;
  berlin!: Card;
  barcelona!: Card;
  paris!: Card;
  amsterdam!: Card;
  london!: Card;


  constructor(private cardsServices: CardsServices,
              private router: Router) { }

  ngOnInit(): void {
    this.cards$ = this.cardsServices.cards$;
    this.cardsServices.getAllCards();
    console.log(this.cards$);
    this.showDescription = false;

    this.venice = new Card(
      "Italy",
      "Venice",
      "Venice, the capital of northern Italy's Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals",
      "https://media.parkimeter.com/images/blog/high/trouver-parking-venise-mestre-4c4f38c9588606c10a96aa5fb4e538bf.jpg"
    ) 

    this.berlin = new Card(
      "Germany",
      "Berlin",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloribus corporis architecto voluptas corrupti, exercitationem iste nobis cupiditate distinctio, consequatur molestias aperiam consectetur rem deserunt ea repellat repellendus at maxime.",
      "https://media0.faz.net/ppmedia/aktuell/feuilleton/1685276732/1.688162/default/die-zahl-der-bauprojekte-ist.jpg"
    )

    this.barcelona = new Card(
      "Spain",
      "Barcelona",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloribus corporis architecto voluptas corrupti, exercitationem iste nobis cupiditate distinctio, consequatur molestias aperiam consectetur rem deserunt ea repellat repellendus at maxime.",
      "https://media.istockphoto.com/photos/sagrada-familia-barcelona-picture-id483683588"
    )

    this.paris = new Card(
      "France",
      "Paris",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloribus corporis architecto voluptas corrupti, exercitationem iste nobis cupiditate distinctio, consequatur molestias aperiam consectetur rem deserunt ea repellat repellendus at maxime.",
      "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900"
    )

    this.amsterdam = new Card(
      "Netherlands",
      "Amsterdam",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloribus corporis architecto voluptas corrupti, exercitationem iste nobis cupiditate distinctio, consequatur molestias aperiam consectetur rem deserunt ea repellat repellendus at maxime.",
      "https://dreamworldtravel.co.uk/blog/wp-content/uploads/2017/02/shutterstock_151256423.jpg"
    )

    this.london = new Card(
      "United Kingdom",
      "London",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloribus corporis architecto voluptas corrupti, exercitationem iste nobis cupiditate distinctio, consequatur molestias aperiam consectetur rem deserunt ea repellat repellendus at maxime.",
      "https://static2.tripoto.com/media/transfer/img/OgData/1507748307_london_fotor.jpg"
    )


  }

  onViewCard(city: string) {
    this.router.navigateByUrl(`card/${this.card.city}`)
  }


}
