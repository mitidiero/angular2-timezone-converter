import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Timezone } from './model/timezone';
import { TimezoneService } from './service/timezone.service';

@Component({
  selector: 'timezone-converter',
  templateUrl: 'app/template/converter.component.html',
  styleUrls:  ['app/css/converter.component.css'],
  providers: [TimezoneService]
})

export class ConverterComponent implements OnInit {

  timezones: Timezone[];
  fromTimezone: number;
  toTimezone: number;

  convertedTime: string;
  timeToConvert: number;

  constructor(
    private router: Router,
    private timezoneService: TimezoneService) { }

  getTimezones(): void {
    this.timezoneService
      .getTimezones()
      .then(timezones => this.timezones = timezones);
  }

  ngOnInit(): void {
    this.getTimezones();
  }

  onChange(): void {
    this.convertedTime = this.timezoneService.convertTimezone(this.timeToConvert, this.fromTimezone, this.toTimezone);
  }
}
