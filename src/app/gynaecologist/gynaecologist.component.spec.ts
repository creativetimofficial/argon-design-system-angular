import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GynaecologistComponent } from './gynaecologist.component';

describe('GynaecologistComponent', () => {
  let component: GynaecologistComponent;
  let fixture: ComponentFixture<GynaecologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GynaecologistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GynaecologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
