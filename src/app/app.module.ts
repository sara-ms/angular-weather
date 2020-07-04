import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {allAppRoutes} from './app-routing.module';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import {CustomDatePipe} from './weather/weather.component';
import {WethearService} from './../app/service/wethear.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import{ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CardComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule, 
    HttpClientModule

  ],
  providers: [WethearService],
  bootstrap: [AppComponent]
})
export class AppModule { }
