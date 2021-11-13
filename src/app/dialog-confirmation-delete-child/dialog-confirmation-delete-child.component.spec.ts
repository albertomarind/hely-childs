import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmationDeleteChildComponent } from './dialog-confirmation-delete-child.component';

describe('DialogConfirmationDeleteChildComponent', () => {
  let component: DialogConfirmationDeleteChildComponent;
  let fixture: ComponentFixture<DialogConfirmationDeleteChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConfirmationDeleteChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConfirmationDeleteChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
