import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherSpeechService {
  private presenterSpeech = new Subject<string>();

  speechContent$ = this.presenterSpeech.asObservable();

  constructor() {}

  saySpeech(text: string): void {
    this.presenterSpeech.next(text);
  }
}
