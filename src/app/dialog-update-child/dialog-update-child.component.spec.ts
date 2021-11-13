import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateChildComponent } from './dialog-update-child.component';

describe('DialogUpdateChildComponent', () => {
  let component: DialogUpdateChildComponent;
  let fixture: ComponentFixture<DialogUpdateChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
