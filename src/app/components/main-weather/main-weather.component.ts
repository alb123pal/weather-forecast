import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { OpenWeatherApiService } from '../../services/open-weather-api.service';
import { WeatherSpeechService } from '../../services/weather-speech.service';
import { ERROR_MESSAGE, PRESSURE_MESSAGE } from '../presenter-weather/constants';
import { WeatherInfo } from '../../models/weather-info.model';

@Component({
  selector: 'app-main-weather',
  templateUrl: './main-weather.component.html',
  styleUrls: ['./main-weather.component.scss']
})
export class MainWeatherComponent{

  weatherForm: FormGroup;
  weatherInfoList: WeatherInfo[] = [];
  showLoader: boolean;

  constructor(
    private _fb: FormBuilder,
    private _openWeatherApi: OpenWeatherApiService,
    private _weatherSpeechSvc: WeatherSpeechService
  ) {
    this.weatherForm = this._fb.group({
      city: ''
    });
  }

  submitForm(): void {
    this.showLoader = true;
    const cityName = this.weatherForm.controls.city.value;

    this._openWeatherApi.getWhetherByCity(cityName).subscribe((data: WeatherInfo[]) => {
      this.showLoader = false;
      this.weatherInfoList = data;
      this.calculateAveragePressure();
    },
      () => {
        this.showLoader = false;
        this._weatherSpeechSvc.saySpeech(ERROR_MESSAGE);
      });
  }

  calculateAveragePressure(): void {
    let pressureSum = 0;
    this.weatherInfoList.forEach( (weatherForecast: WeatherInfo) => {
      pressureSum += weatherForecast.main.pressure;
    });

    this._weatherSpeechSvc.saySpeech(PRESSURE_MESSAGE + pressureSum / this.weatherInfoList.length);
  }
}
