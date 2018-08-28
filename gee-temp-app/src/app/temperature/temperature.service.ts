import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TemperatureService{
    yahooApiUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22montreal%2C%20qc%22)&format=json';
    //&callback=JSON_CALLBACK';
    constructor(private http: HttpClient) {}
    getTemperatureData() {
        return this.http.get(this.yahooApiUrl);
    }
}