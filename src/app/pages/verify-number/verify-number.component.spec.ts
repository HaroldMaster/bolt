import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageSelectComponent } from '../../components/image-select/image-select.component';
import { PhoneInputComponent } from '../../components/phone-input/phone-input.component';
import { CountryCodeService } from '../../services/country-code.service';
import { VerifyNumberComponent } from './verify-number.component';

describe('VerifyNumberComponent', () => {
  let component: VerifyNumberComponent;
  let fixture: ComponentFixture<VerifyNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyNumberComponent, PhoneInputComponent, ImageSelectComponent ],
      imports: [ReactiveFormsModule],
      //providers:[CountryCodeService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
