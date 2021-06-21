import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CodeCountry } from '../../models/code-countries.model';

@Component({
  selector: 'app-image-select',
  templateUrl: './image-select.component.html',
  styleUrls: ['./image-select.component.scss'],
  providers: [     
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => ImageSelectComponent),
      multi: true,
      
    }   
  ]
})
export class ImageSelectComponent implements OnInit, ControlValueAccessor {
  @Input()
  countries !: Array<CodeCountry>;

  isHiddenDropdown = true;
  selectedCountry: CodeCountry = {code: '', img: '', name: ''};

  constructor() {}

  onChanged: any = () => {};
  onTouched: any = () => {};

  writeValue(countryCode: string): void {
    if(this.countries){
      const selectedCountry = this.countries.find(country => country.code === countryCode);
      this.selectedCountry = selectedCountry ? selectedCountry : {name: '', code: '', img: ''};
    }
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
     this.onTouched = fn
  }

  ngOnInit(): void {}
 
  openDropdown(): void {
    this.isHiddenDropdown = false;
  }

  closeDropdown(): void {
    this.isHiddenDropdown = true;
  }

  selectCountry(country: CodeCountry) {
    this.writeValue(country.code);
    this.onChanged(country.code);
    this.closeDropdown();
  }
}
