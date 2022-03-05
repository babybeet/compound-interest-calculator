import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxFormFieldComponent } from './search-box-form-field.component';

describe('SearchBoxFormFieldComponent', () => {
  let component: SearchBoxFormFieldComponent;
  let fixture: ComponentFixture<SearchBoxFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBoxFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
