import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherSpeechService } from '../../services/weather-speech.service';
import { INITIAL_MESSAGE } from './constants';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-presenter-weather',
  templateUrl: './presenter-weather.component.html',
  styleUrls: ['./presenter-weather.component.scss']
})
export class PresenterWeatherComponent implements OnInit, OnDestroy {
  isShowBubble = false;
  presenterSpeechText: string;

  destroySubscriptions$ = new Subject();

  constructor(private _weatherSpeechSvc: WeatherSpeechService) { }

  ngOnInit(): void {

    this._weatherSpeechSvc.speechContent$.pipe(
      takeUntil(this.destroySubscriptions$)
    ).subscribe((text: string) => {
      this.presenterSpeechText = text;
      this.isShowBubble = true;
    });

    this._weatherSpeechSvc.saySpeech(INITIAL_MESSAGE);

  }

  closeBubble(): void {
    this.isShowBubble = false;
  }

  ngOnDestroy() {
    this.destroySubscriptions$.next(true);
  }
}
