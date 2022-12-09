import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CardDetailsComponent } from "./components/card-details/card-details.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: ':city', component: CardDetailsComponent},
    { path: '', pathMatch: 'full', redirectTo: 'home'},
]

@NgModule({

    imports: [
        RouterModule.forChild(routes)
    ],

    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule {}