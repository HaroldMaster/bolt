import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSelectComponent } from './image-select.component';

describe('ImageSelectComponent', () => {
  let component: ImageSelectComponent;
  let fixture: ComponentFixture<ImageSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('It should show a country List when click button', () => {
    //when
    component.openDropdown();
    //expect
    expect(component.isHiddenDropdown).toBe(false);
  });
  it('It should hidden a country List when select', () => {
    //given
    component.isHiddenDropdown=false;
    //when
    component.closeDropdown();
    //expect
    expect(component.isHiddenDropdown).toBe(true);
  });
});
