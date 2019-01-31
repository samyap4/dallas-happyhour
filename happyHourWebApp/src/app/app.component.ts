import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'happyHourWebApp';

  home = true;
  list = false;
  detail = false;
  peopleList = ["Sam","Trevor"];
  commentList = ["This place rocks!"];


  navigatePage(value: number) {
    switch (value) {
      case 0:
        this.home = true;
        this.list = false;
        this.detail = false;
        break;
      case 1:
        this.home = false;
        this.list = true;
        this.detail = false;
        break;
      case 2:
        this.home = false;
        this.list = false;
        this.detail = true;
        break;
    }
  }
}
