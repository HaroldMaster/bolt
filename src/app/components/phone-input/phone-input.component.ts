import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CodeCountry } from '../../models/code-countries.model';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss']
})
export class PhoneInputComponent implements OnInit {
  @Input()
  countries !: Array<CodeCountry>

  form: FormGroup = this.fb.group({
    phone: [null],
    code: ['+593']
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  printData() {
    console.log('form', this.form.value);
  }

}
