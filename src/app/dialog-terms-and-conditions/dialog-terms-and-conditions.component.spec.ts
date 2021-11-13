import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTermsAndConditionsComponent } from './dialog-terms-and-conditions.component';

describe('DialogTermsAndConditionsComponent', () => {
  let component: DialogTermsAndConditionsComponent;
  let fixture: ComponentFixture<DialogTermsAndConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTermsAndConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTermsAndConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
