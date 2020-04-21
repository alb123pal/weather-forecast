export interface WeatherInfoResponse {
  list: [];
}

export interface WeatherInfo {
  dt_txt: string;
  main: {
    temp_min: number;
    temp_max: number;
    pressure: number;
  };
  weather: WeatheDetails[];
}

export interface WeatheDetails {
  icon: string;
}
