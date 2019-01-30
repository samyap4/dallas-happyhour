import { Component, OnInit } from '@angular/core';
import { increaseElementDepthCount } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  headcount: number;
  modalVisible: boolean = false;
  
  constructor() {
    console.log('Constructor initialised');
    this.headcount = 0;
  }

  toggleModal() {
    this.modalVisible = !this.modalVisible;
  }

  checkInSubmit() {
    console.log("submitting the modal here");
    this.headcount+=1;
    this.toggleModal();
  }

  ngOnInit() {
  }


}
