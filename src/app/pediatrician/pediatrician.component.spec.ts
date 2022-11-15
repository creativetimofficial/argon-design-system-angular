import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PediatricianComponent } from './pediatrician.component';

describe('PediatricianComponent', () => {
  let component: PediatricianComponent;
  let fixture: ComponentFixture<PediatricianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PediatricianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PediatricianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
