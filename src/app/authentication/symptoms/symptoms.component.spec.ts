import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomsComponent } from './symptoms.component';

describe('SymptomsComponent', () => {
  let component: SymptomsComponent;
  let fixture: ComponentFixture<SymptomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymptomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
