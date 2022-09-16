import { Component, HostListener, OnInit } from '@angular/core';
// import * as counterUp from 'counterup2';
// const counterUp = require('counterup2');

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  
  projectCount: number = 0;
  clientsCount: number = 0;
  awardCount: number = 0;
  coffeeCount: number = 0;

  constructor() { }

  ngOnInit(): void {
    //   const el = document.querySelector('.counter')
    // counterUp(el, {
    //   duration: 1000,
    //   delay: 16,
    // })
  }

  projectCountStop: any = setInterval(() => {
    this.projectCount++;
    if (this.projectCount == 105) {
      clearInterval(this.projectCountStop);
    }
  }, 100)

  clientsCountStop: any = setInterval(() => {
    this.clientsCount++;
    if (this.clientsCount == 25) {
      clearInterval(this.clientsCountStop);
    }
  }, 300)

  awardCountStop: any = setInterval(() => {
    this.awardCount++;
    if (this.awardCount == 12) {
      clearInterval(this.awardCountStop);
    }
  }, 300)

  coffeeCountStop: any = setInterval(() => {
    this.coffeeCount++;
    if (this.coffeeCount == 250) {
      clearInterval(this.coffeeCountStop);
    }
  }, 100)
}
