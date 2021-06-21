import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ImageSelectComponent } from './image-select.component';

describe('ImageSelectComponent: As user I want to see the countries displayed or hidden when click', () => {
  let component: ImageSelectComponent;
  let fixture: ComponentFixture<ImageSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('It should display a country list', () => {
    //given
    const button = fixture.debugElement.query(
      By.css('[data-test=test-select-button]')
    );
    // const spy = jest.spyOn(component, 'openDropdown');
    //when
    button.nativeElement.click();
    //expect
    //expect(spy).toHaveBeenCalled();
    expect(component.isHiddenDropdown).toBe(false);
  });
  it('It should hide a country list when click in the same selection button', () => {
    //given
    const button = fixture.debugElement.query(
      By.css('[data-test=test-select-button]')
    );
    // const spy = jest.spyOn(component, 'openDropdown');
    //when
    button.nativeElement.click();
    button.nativeElement.click();
    //expect
    //expect(spy).toHaveBeenCalled();
    expect(component.isHiddenDropdown).toBe(true);
  });
  it('It should hidden the country when select an option', () => {
    //given
    component.isHiddenDropdown = false;
    component.countries = [
      {
        name: 'Ecuador',
        img: 'https://www.countryflags.io/ec/shiny/32.png',
        code: '+593',
      },
      {
        name: 'Colombia',
        img: 'https://www.countryflags.io/co/shiny/32.png',
        code: '+522',
      },
      {
        name: 'Perú',
        img: 'https://www.countryflags.io/pe/shiny/32.png',
        code: '+213',
      },
    ];
    fixture.detectChanges();
    const buttonOption = fixture.debugElement.query(
      By.css('[data-test=test-option-button]')
    );
    //when
    buttonOption.nativeElement.click();
    //expect
    expect(component.isHiddenDropdown).toBe(true);
  });
  it('It should have registerOnChange', ()=>{
    //given
    const fn = ()=>{};
    //when
    component.registerOnChange(fn);
    //expect
    expect(component.onChanged).toBe(fn);

  });
  it('It should have registerOnTouched', ()=>{
    //given
    const fn = ()=>{};
    //when
    component.registerOnTouched(fn);
    //expect
    expect(component.onTouched).toBe(fn);

  });
  it('It should display nothing when no countries', ()=>{
    //given
    component.countries = [];
    const countryCode = ''
    //when
    component.writeValue(countryCode);
    //expect
    expect(JSON.stringify(component.selectedCountry)).toBe('{"name":"","code":"","img":""}');

  });
});
