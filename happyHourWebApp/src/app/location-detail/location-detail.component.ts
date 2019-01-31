import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css']
})
export class LocationDetailComponent implements OnInit {

  constructor(private location: Location) { }

  @Output() goBack = new EventEmitter<boolean>();

  cancel() {
    this.goBack.emit(true);
  }
  
  ngOnInit() {
  }

}
