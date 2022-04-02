import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  weather: any;
  bookmarked: any = [];
  search = '';
  date = new Date();
  lastFirstDay: any;

  constructor(private WeatherService: WeatherService,
    public datepipe: DatePipe) { }

  ngOnInit(): void {
    let dte = new Date();
    dte.setDate(dte.getDate() - 1);

    this.lastFirstDay = this.datepipe.transform(dte.toString(), "yyyy-MM-dd");






  }

  getWeather(search: string, lastFirstDay: any) {

    this.WeatherService.getCityWeatherByName(search, lastFirstDay).subscribe((data) => {
      this.weather = data
     



    })

  }


}
