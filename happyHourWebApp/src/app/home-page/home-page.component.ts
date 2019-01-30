import { Component, OnInit } from '@angular/core';
import { increaseElementDepthCount } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  
  constructor() {
    console.log('Constructor initialised');
   

  }
 


  ngOnInit() {
  }

}
