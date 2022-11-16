import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrainetreatmentdocsComponent } from './migrainetreatmentdocs.component';

describe('MigrainetreatmentdocsComponent', () => {
  let component: MigrainetreatmentdocsComponent;
  let fixture: ComponentFixture<MigrainetreatmentdocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigrainetreatmentdocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrainetreatmentdocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
