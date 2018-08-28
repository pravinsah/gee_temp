import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Temperature';
  logoImagePath: string;  

  constructor() {
    this.logoImagePath = "assets/images/global_eagle_white.svg";//"assets/images/global_eagle_white.svg";
   }

  ngOnInit() {
  }

}
