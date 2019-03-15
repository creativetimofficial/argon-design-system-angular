import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NucleoiconsComponent } from './nucleoicons.component';

describe('NucleoiconsComponent', () => {
  let component: NucleoiconsComponent;
  let fixture: ComponentFixture<NucleoiconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NucleoiconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NucleoiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
