import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCommissionerComponent } from './detailsCommissioner.component';

describe('DetailsCommissionerComponent', () => {
  let component: DetailsCommissionerComponent;
  let fixture: ComponentFixture<DetailsCommissionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCommissionerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCommissionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
