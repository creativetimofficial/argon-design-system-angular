import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsComponent } from './doctors.component';

describe('DoctorsComponent', () => {
  let component: DoctorsComponent;
  let fixture: ComponentFixture<DoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
