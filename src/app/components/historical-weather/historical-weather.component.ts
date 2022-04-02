import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-historical-weather',
  templateUrl: './historical-weather.component.html',
  styleUrls: ['./historical-weather.component.css']
})
export class HistoricalWeatherComponent implements OnInit {
@Input() weather:any; 
@Input() lastFirstDay:any;

  constructor() { }

  ngOnInit(): void {
  }

}
