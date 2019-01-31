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
  timeInput: string = "";
  @Input() attendees;

  fridayMil() {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' ' + time;
    let mill = (new Date).getTime();
    let current = mill;
    return (1549058400000 - 3600000) - current;
  }
  countdown = this.countdownFunc(this.fridayMil());

  constructor() {
    console.log('Constructor initialised');
    setInterval(() => {
      this.countdown = this.countdownFunc(this.fridayMil());
    }, 1000);
  }

  toggleModal() {
    this.nameInput = "";
    this.modalVisible = !this.modalVisible;
  }

  checkInSubmit(event: Event) {
    let value = this.nameInput +" "+ this.timeInput;
    this.attendees.push(value)
    console.log("submitting the modal here");
    console.log(this.nameInput);

    this.headcount += 1;
    this.toggleModal();
  }


  countdownFunc(fridayMil) {

    var delim = ":";
    var hours = Math.ceil(fridayMil / (1000 * 60 * 60) % 60);
    var minutes = Math.floor(fridayMil / (1000 * 60) % 60);
    var seconds = Math.floor(fridayMil / 1000 % 60);

    return (hours) + delim + minutes + delim + seconds;

  }

  ngOnInit() {
    setTimeout(() => {
      this.headcount = this.attendees.length;
    },
      100);
  }


}
