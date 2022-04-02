import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-weather-location',
  templateUrl: './weather-location.component.html',
  styleUrls: ['./weather-location.component.css']
})
export class WeatherLocationComponent implements OnInit {
 @Input() weather:any;

bookmarked:any=[];
  constructor() { }

  ngOnInit(): void {
  }
  addBookmarked(){
    this.bookmarked.push( this.weather.location.name )
   
  }

}
