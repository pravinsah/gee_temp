import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { TemperatureService } from './temperature/temperature.service';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule    
  ],
  providers: [TemperatureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
