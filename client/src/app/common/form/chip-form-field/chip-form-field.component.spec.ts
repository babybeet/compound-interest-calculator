import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipFormFieldComponent } from './chip-form-field.component';

describe('ChipFormFieldComponent', () => {
  let component: ChipFormFieldComponent;
  let fixture: ComponentFixture<ChipFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
