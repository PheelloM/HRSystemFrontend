import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationCommissionerComponent } from './declarationCommissioner.component';

describe('DeclarationCommissionerComponent', () => {
  let component: DeclarationCommissionerComponent;
  let fixture: ComponentFixture<DeclarationCommissionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarationCommissionerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationCommissionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
