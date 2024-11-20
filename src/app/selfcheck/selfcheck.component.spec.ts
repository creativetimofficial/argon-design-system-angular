import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfcheckComponent } from './selfcheck.component';

describe('SelfcheckComponent', () => {
  let component: SelfcheckComponent;
  let fixture: ComponentFixture<SelfcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfcheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
