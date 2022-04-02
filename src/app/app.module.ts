import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherDataPreviewComponent } from './components/weather-data-preview/weather-data-preview.component';

import { WeatherLocationComponent } from './components/weather-location/weather-location.component';
import { BookmarkedLocationsComponent } from './components/bookmarked-locations/bookmarked-locations.component';
import { HistoricalWeatherComponent } from './components/historical-weather/historical-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherDataPreviewComponent,
  
    WeatherLocationComponent,
    BookmarkedLocationsComponent,
    HistoricalWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
