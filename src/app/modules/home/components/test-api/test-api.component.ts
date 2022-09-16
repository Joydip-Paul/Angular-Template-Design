import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '400px',
        opacity: 1,
      })),
      state('closed', style({
        width: '0',
        opacity: 0,
      })),

      state('ml', style({
        marginLeft: '400px',
      })),
      state('ml2', style({
        marginLeft: '0',
      })),
      transition('open => closed', [
        animate('.3s')
      ]),
      transition('closed => open', [
        animate('.3s')
      ]),

      transition('ml => ml2', [
        animate('.3s')
      ]),
      transition('ml2 => ml', [
        animate('.3s')
      ]),
    ]),
  ]

})
export class TestApiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }

}
