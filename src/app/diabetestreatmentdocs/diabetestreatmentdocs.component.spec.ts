import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetestreatmentdocsComponent } from './diabetestreatmentdocs.component';

describe('DiabetestreatmentdocsComponent', () => {
  let component: DiabetestreatmentdocsComponent;
  let fixture: ComponentFixture<DiabetestreatmentdocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetestreatmentdocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabetestreatmentdocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
