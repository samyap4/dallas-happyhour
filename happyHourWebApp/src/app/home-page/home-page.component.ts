import { Component, OnInit, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { increaseElementDepthCount } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  headcount = 0;
  modalVisible: boolean = false;
  nameInput: string = "";
  @Input() attendees;

  constructor() {
    console.log('Constructor initialised');

  }

  toggleModal() {
    this.modalVisible = !this.modalVisible;
  }

  checkInSubmit(event: Event) {
    this.attendees.push(this.nameInput)
    console.log("submitting the modal here");
    console.log(this.nameInput);

    this.headcount += 1;
    this.toggleModal();
  }

  ngOnInit() {
    setTimeout(() => {
      this.headcount = this.attendees.length;
    },
      100);
  }


}
