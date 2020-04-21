import { Component, Input } from '@angular/core';
import { WeatherInfo } from '../../models/weather-info.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
  @Input() weatherInfo: WeatherInfo[];

  constructor() { }
}
