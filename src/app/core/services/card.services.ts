import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Card } from "../models/card.model";
import { Observable, catchError, throwError, tap, Subject, of, mapTo  } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class CardsServices {

    cards$ = new Subject<Card[]>();

    constructor( private http: HttpClient) { }

    getAllCards(): any {
        this.http.get<Card[]>(`http://localhost:3000/api/cards`).pipe( //addresse url du Backend à remplacer
            tap(cards => this.cards$.next(cards)), //doit correspondre au Backend
            catchError(error => {
                console.log(error);
                console.error(error.error.message);
                return of([]);
            })
        ).subscribe();
    }

    getCardById(city: string): Observable<Card> {
        return this.http.get<Card>(`http://localhost:3000/api/cards/${city}`).pipe( //addresse url du Backend à remplacer, suivi du `/${cardId}`
            catchError(error => throwError(error.error.message))
        );
    }
}