import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerifyNumberModule } from '../../pages/verify-number/verify-number.module';
import { ImageSelectComponent } from '../image-select/image-select.component';
import { PhoneInputComponent } from './phone-input.component';

describe('PhoneInputComponent', () => {
  let component: PhoneInputComponent;
  let fixture: ComponentFixture<PhoneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneInputComponent, ImageSelectComponent],
      imports: [ ReactiveFormsModule],
      //providers: [FormBuilder],
      //schemas: [NO_ERRORS_SCHEMA] 
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneInputComponent);
    component = fixture.componentInstance;
    //component.ngOnInit()
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
