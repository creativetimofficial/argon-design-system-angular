import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailverifyComponent } from './emailverify.component';

describe('EmailverifyComponent', () => {
  let component: EmailverifyComponent;
  let fixture: ComponentFixture<EmailverifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailverifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
