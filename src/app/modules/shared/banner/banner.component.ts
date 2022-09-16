import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  bannerTitle = "Contact"
  path1 = ""
  path1Name = "Home"
  constructor() { }

  ngOnInit(): void {
  }

}
