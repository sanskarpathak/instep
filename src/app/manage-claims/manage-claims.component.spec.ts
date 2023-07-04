import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClaimsComponent } from './manage-claims.component';

describe('ManageClaimsComponent', () => {
  let component: ManageClaimsComponent;
  let fixture: ComponentFixture<ManageClaimsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageClaimsComponent]
    });
    fixture = TestBed.createComponent(ManageClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
