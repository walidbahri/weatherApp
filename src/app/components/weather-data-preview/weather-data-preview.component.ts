import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-data-preview',
  templateUrl: './weather-data-preview.component.html',
  styleUrls: ['./weather-data-preview.component.css']
})
export class WeatherDataPreviewComponent implements OnInit {
@Input() weather:any;
@Input() search:any;
  constructor() { }

  ngOnInit(): void {
    
  }

}
