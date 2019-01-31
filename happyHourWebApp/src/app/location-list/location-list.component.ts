import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  constructor() { }

  showDetail: boolean = false;
  @Input() reviews;

  viewDetail() {
    this.showDetail = !this.showDetail;
  }

  ngOnInit() {
  }

}
