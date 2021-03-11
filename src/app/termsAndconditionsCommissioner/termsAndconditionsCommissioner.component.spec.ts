import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndConditionsCommissionerComponent } from './termsAndconditionsCommissioner.component';

describe('TermsAndConditionsComponent', () => {
  let component: TermsAndConditionsCommissionerComponent;
  let fixture: ComponentFixture<TermsAndConditionsCommissionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsAndConditionsCommissionerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsAndConditionsCommissionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
