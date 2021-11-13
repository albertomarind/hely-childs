import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmationSaveChildComponent } from './dialog-confirmation-save-child.component';

describe('DialogConfirmationSaveChildComponent', () => {
  let component: DialogConfirmationSaveChildComponent;
  let fixture: ComponentFixture<DialogConfirmationSaveChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogConfirmationSaveChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConfirmationSaveChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
