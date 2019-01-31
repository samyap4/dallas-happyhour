import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { refreshDescendantViews } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {

  modalVisible: boolean = false;
  reviewInput: string = "";
  

  constructor(private location: Location) { }

  @Output() goBack = new EventEmitter<boolean>();
  @Input() reviews;

  cancel() {
    this.goBack.emit(true);
  }

  toggleModal() {
    this.reviewInput = "";
    this.modalVisible = !this.modalVisible;
  }

  reviewSubmit(event: Event) {
    this.reviews.push(this.reviewInput);
    this.toggleModal();
  }

  
  ngOnInit() {
  }

}
