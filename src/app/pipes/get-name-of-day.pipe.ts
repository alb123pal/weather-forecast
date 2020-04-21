import { Pipe, PipeTransform } from '@angular/core';
import { NAME_OF_DAY } from './constants';

@Pipe({
  name: 'getNameOfDay'
})
export class GetNameOfDayPipe implements PipeTransform {

  transform(dateTime: string): string {
    return NAME_OF_DAY[new Date(dateTime).getDay()];
  }

}
