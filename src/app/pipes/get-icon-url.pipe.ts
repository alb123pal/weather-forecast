import { Pipe, PipeTransform } from '@angular/core';
import { WeatherInfo } from '../models/weather-info.model';

@Pipe({
  name: 'getIconUrl'
})
export class GetIconUrlPipe implements PipeTransform {

  transform(weatherInfo: WeatherInfo): string {
    const icon = weatherInfo.weather[0].icon;

    return `url(http://openweathermap.org/img/wn/${icon}@2x.png)`;
  }
}
