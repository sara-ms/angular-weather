import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WethearService } from "../service/wethear.service";
declare var google: any;
//import {} from 'googlemaps';
//import { google } from '@google/maps';
//import { LatLng } from "googlemaps"

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, AfterViewInit {



  weatherSearchForm: FormGroup;
  today = new Date();
  weatherData: any;
  
  constructor(private formBuilder: FormBuilder, private api: WethearService) { }

  ngOnInit() {
    this.weatherSearchForm = this.formBuilder.group({
      location: [""]
    });
  }

  ngAfterViewInit(): void {
    //this.mapInitializer();
  }

  sendToAPIXU(formValues) {
    console.log(formValues);
    this.api.getWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }


}
