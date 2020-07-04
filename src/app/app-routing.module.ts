import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import{CardComponent} from './card/card.component';
export const allAppRoutes: Routes = [
  { path: '', component: WeatherComponent },
    // { path: '/card', component: WeatherComponent}

];
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
