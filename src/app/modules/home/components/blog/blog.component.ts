import { Component, OnInit } from '@angular/core';
declare let AOS: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    AOS.init(
    );
  }

}
