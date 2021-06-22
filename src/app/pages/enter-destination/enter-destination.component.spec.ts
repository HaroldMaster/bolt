import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterDestinationComponent } from './enter-destination.component';

describe('EnterDestinationComponent', () => {
  let component: EnterDestinationComponent;
  let fixture: ComponentFixture<EnterDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
