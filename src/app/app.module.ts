import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainWeatherComponent } from './components/main-weather/main-weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { GetNameOfDayPipe } from './pipes/get-name-of-day.pipe';
import { GetIconUrlPipe } from './pipes/get-icon-url.pipe';
import { PresenterWeatherComponent } from './components/presenter-weather/presenter-weather.component';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    MainWeatherComponent,
    HeaderComponent,
    WeatherCardComponent,
    GetNameOfDayPipe,
    GetIconUrlPipe,
    PresenterWeatherComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
