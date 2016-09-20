import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }        from './app.component';
import { ConverterComponent }     from './converter.component';
import { TimezoneService }         from './service/timezone.service';
import { routing } from './app.routing';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    ConverterComponent
  ],
  providers: [
    TimezoneService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
