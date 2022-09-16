import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private ngxService: NgxUiLoaderService) { }

  isLoading = true;

  ngOnInit(): void {
    setTimeout(()=>{
      this.isLoading = false;
    },100)
  }

}
