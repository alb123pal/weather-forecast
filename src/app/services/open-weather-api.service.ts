import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, pluck } from 'rxjs/operators';
import { WeatherInfoResponse, WeatherInfo } from '../models/weather-info.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OpenWeatherApiService {

  constructor(private _httpClient: HttpClient) { }

  getWhetherByCity(cityName: string, days = 40): Observable<WeatherInfo[]> {
    const url = `${environment.weatherApiUrl}/?q=${cityName}&cnt=${days}&units=metric&appid=${environment.apiKey}`;

    return this._httpClient.get<WeatherInfoResponse>(url).pipe(
      pluck('list'),
      map((weathersInfo: WeatherInfo[] ) => {
        return weathersInfo.filter((weatherInfo: WeatherInfo, index: number) => index % 8 === 0);
      })
    );
  }
}
