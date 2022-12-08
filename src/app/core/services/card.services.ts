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
        this.http.get<Card[]>(process.env.BACKEND_URL).pipe(
            tap(cards => this.cards$.next(cards)),
            catchError(error => {
                console.log(error);
                console.error(error.error.message);
                return of([]);
            })
        ).subscribe();
    }

    getCardById(cardId: string): Observable<Card> {
        return this.http.get<Card>(process.env.BACKEND_URL `/${cardId}`).pipe(
            catchError(error => throwError(error.error.message))
        );
    }
}