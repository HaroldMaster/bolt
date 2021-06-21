import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CodeCountry } from '../../models/code-countries.model';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
})
export class PhoneInputComponent implements OnInit {
  @Input()
  countries!: Array<CodeCountry>;
  @Output()
  isAuth : EventEmitter<boolean> = new EventEmitter();

  form: FormGroup = this.fb.group({
    phone: [null, [Validators.required, Validators.minLength(10)]],
    code: ['+593'],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  canContinue() {
    this.isAuth.emit(true);
  }
}
