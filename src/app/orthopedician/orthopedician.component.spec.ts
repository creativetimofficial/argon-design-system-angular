import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthopedicianComponent } from './orthopedician.component';

describe('OrthopedicianComponent', () => {
  let component: OrthopedicianComponent;
  let fixture: ComponentFixture<OrthopedicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrthopedicianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthopedicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
