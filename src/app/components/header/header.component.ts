import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navbarFixed: boolean = false;
  tata: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 100) {
      this.navbarFixed = true
    }
    else {
      this.navbarFixed = false;
    }
  }

  hide(){
    this.tata = true;

  }

  a = document.querySelectorAll("nav-link");

  hideNavBar () {
    let element: HTMLElement = document.getElementsByClassName( 'navbar-toggler' )[ 0 ] as HTMLElement;
    if ( element.getAttribute( 'aria-expanded' ) == 'true' ) {
        element.click();
    }

  }

}
