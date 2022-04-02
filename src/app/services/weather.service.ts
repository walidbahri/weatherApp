import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 weatherUrl:string="https://api.weatherstack.com/historical"
accessKey="10c3e95ec7aab9e5ecc348662cb5b691"
  constructor(private httpClient: HttpClient) {  }
 
 
  getCityWeatherByName(city:string,lastFirstDay:any) {
    return this.httpClient.get(`${this.weatherUrl}?access_key=${this.accessKey}&query=${city}&historical_date=${lastFirstDay}`);
  }
}
