import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-contact',
  templateUrl: './test-contact.component.html',
  styleUrls: ['./test-contact.component.scss']
})
export class TestContactComponent implements OnInit {
  exform: any = FormGroup;



  
  success = '';
  registerForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(4),
    ]),
    lastName: new FormControl('', [Validators.required]),
    family_members: new FormControl('', [
      Validators.required,
      Validators.min(2),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  submitted = false;

  constructor() { }

  ngOnInit(): void {
    this.exform = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),
      'message': new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
  }
  clicksub() {
    console.log(this.exform.value);
    this.exform.reset();
  }
  get name() {
    return this.exform.get('name');
  }
  get email() {
    return this.exform.get('email');
  }
  get phone() {
    return this.exform.get('phone');
  }
  get message() {
    return this.exform.get('message');
  }


  people: any[] = [
    {
      "name": "Aouglas  Pace",
      "age": 35,
      "country": 'UK'
    },
    {
      "name": "Bcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Cay  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Dguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Eook  Tyson",
      "age": 32,
      "country": 'USA'
    }
  ];

}
