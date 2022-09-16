import { Component, OnInit } from '@angular/core';
declare let AOS: any;

@Component({
  selector: 'app-our-app',
  templateUrl: './our-app.component.html',
  styleUrls: ['./our-app.component.scss']
})
export class OurAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init(
      );
  }

}
