import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],



  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('.3s')
      ]),
      transition('closed => open', [
        animate('.3s')
      ]),
    ]),

    trigger('fade', [
      state('a', style({
        backgroundColor: 'red',
        height: 0,
        opacity: 0,
        PointerEvent: 'none'
      })),
      state('b', style({
        backgroundColor: 'blue',
        height: 'auto',
        opacity: 1,
        PointerEvent: 'auto'
      })),
      transition('a => b', [
        animate('.3s')
      ]),
      transition('b => a', [
        animate('.3s')
      ]),
    ])
  ],



})
export class ContactComponent implements OnInit {

  minlenth = 3;
  isLoading = true;

  contactForm: any = FormGroup;
  constructor(private fb: FormBuilder, private ngxService: NgxUiLoaderService) {

  }

  get f() {
    return this.contactForm.controls;
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'name': new FormControl(null,
        [Validators.required,
        Validators.minLength(4),]
      ),
      'email': new FormControl(null, Validators.required),
      'phone': new FormControl(
        null,
        [Validators.required,
        Validators.pattern('(?:(?:\\+|00)88|01)?\\d{11}')
        ]),
      'message': new FormControl(null, [Validators.required, Validators.minLength(10)])
    });

    setTimeout(() => {
      this.isLoading = false;
    }, 1000)
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  get message() {
    return this.contactForm.get('message');
  }

  submitContactForm() {
    console.table(this.contactForm.value);
    this.contactForm.reset();
  }

  // --------------------------------
  // Angular Animation
  // --------------------------------


  isOpen = true;
  toggle() {
    this.isOpen = !this.isOpen;
  }

  ab = true;
  openPlease() {
    this.ab = !this.ab;
  }
}
