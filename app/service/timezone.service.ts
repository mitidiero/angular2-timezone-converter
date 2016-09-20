import { Injectable } from '@angular/core';
import { Timezone } from './../model/timezone';
import { TIMEZONES } from './../mock/mock-timezones';

@Injectable()
export class TimezoneService {
  getTimezones(): Promise<Timezone[]> {
    return Promise.resolve(TIMEZONES);
  };

  getTimezone(id: string): Promise<Timezone> {
    return this.getTimezones()
      .then(timezones => timezones.find(timezone => timezone.id === id));
  };

  convertTimezone(hour: number, fromTimezoneOffset: number, toTimezoneOffset: number): any {
    let time = -1;

    if (hour && fromTimezoneOffset && toTimezoneOffset) {
      time = (hour + Math.abs(fromTimezoneOffset - toTimezoneOffset));

      if (time >= 24 && fromTimezoneOffset < toTimezoneOffset) {
        return time-24 + " (next day)";
      } else if (time >= 24 && fromTimezoneOffset > toTimezoneOffset) {
        return time-24 + " (day before)";
      } else if (time < 24) {
        return time + " (current day)";
      }
    }

    return time;
  };
}
