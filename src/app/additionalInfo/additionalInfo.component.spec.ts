import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalInfoCommissionerComponent } from './additionalInfo.component';

describe('AdditionalInfoCommissionerComponent', () => {
  let component: AdditionalInfoCommissionerComponent;
  let fixture: ComponentFixture<AdditionalInfoCommissionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalInfoCommissionerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalInfoCommissionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
