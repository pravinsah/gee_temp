import { Component, OnInit } from '@angular/core';
import { TemperatureService } from './temperature.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})

export class TemperatureComponent implements OnInit {  
  temperatures: any[] = [
    {"temp": "61","date": "Tue, 14 Aug 2018 04:00 AM EDT"}    
  ];
  
  celsius : string;

  constructor(private  apiService:  TemperatureService) { }

  ngOnInit() {
    this.getYahooData();
  }

  public getYahooData(){
    this.apiService.getTemperatureData().subscribe((data:  Array<object>) => {
       let f =  data["query"]["results"]["channel"]["item"]["condition"]["temp"];
       let dt = data["query"]["results"]["channel"]["item"]["condition"]["date"];
       this.temperatures.push({"temp":f,"date":dt});
    });
  }
  
  convertTofahrenheit(temperature){
    if(temperature!="")return (temperature * 1.8) + 32;
  }
  convertTocelsius(temperature){
    if(temperature!="")return (temperature - 32) * .5556;
  }

  onAddTemperature(){
     let dt = new Date();
     if(this.celsius!=""){
      let f = this.convertTofahrenheit(this.celsius);
      this.temperatures.push({"temp":f,"date":dt})
     }
     this.celsius = "";     
  }
  
  getMinTemperature(){
    let min = this.temperatures.reduce((x,y)=>x["temp"]<y["temp"]?x:y)
    return this.convertTocelsius(min["temp"]) 
  }
  getMaxTemperature(){
    let max = this.temperatures.reduce((x,y)=>x["temp"]>y["temp"]?x:y)
    return this.convertTocelsius(max["temp"]) 
  }
  getAverageTemperature(){
    let sum : number = 0;
    this.temperatures.forEach(item => {var a = parseInt(item["temp"]);sum += a;});
    let avg = sum / this.temperatures.length;
    return this.convertTocelsius(avg);
  }
  getMedianTemperature(){
    let arr:any[]=this.temperatures.sort(function(a, b) { return a.temp - b.temp; });
    let index:number = Math.floor(arr.length/2);
    return this.convertTocelsius(arr[index]["temp"]);
  }

}