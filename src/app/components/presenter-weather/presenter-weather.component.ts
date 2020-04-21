import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherSpeechService } from '../../services/weather-speech.service';
import { INITIAL_MESSAGE } from './constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-presenter-weather',
  templateUrl: './presenter-weather.component.html',
  styleUrls: ['./presenter-weather.component.scss']
})
export class PresenterWeatherComponent implements OnInit, OnDestroy {
  isShowBubble = false;
  presenterSpeechText: string;

  subscription: Subscription;

  constructor(private _weatherSpeechSvc: WeatherSpeechService) { }

  ngOnInit(): void {

    this.subscription = this._weatherSpeechSvc.speechContent$.subscribe((text: string) => {
      this.presenterSpeechText = text;
      this.isShowBubble = true;
    });

    this._weatherSpeechSvc.saySpeech(INITIAL_MESSAGE);

  }

  closeBubble(): void {
    this.isShowBubble = false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
