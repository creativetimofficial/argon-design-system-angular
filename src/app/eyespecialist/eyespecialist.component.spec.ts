import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyespecialistComponent } from './eyespecialist.component';

describe('EyespecialistComponent', () => {
  let component: EyespecialistComponent;
  let fixture: ComponentFixture<EyespecialistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyespecialistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EyespecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
