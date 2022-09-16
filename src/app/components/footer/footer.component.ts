import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  subscribrForm: any = FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.subscribrForm = new FormGroup({
      'email': new FormControl(null,Validators.required),
    });
  }

  get email() {
    return this.subscribrForm.get('email');
  }

  submitContactForm() {
    console.log(this.subscribrForm.value);
    this.subscribrForm.reset();
  }

}
