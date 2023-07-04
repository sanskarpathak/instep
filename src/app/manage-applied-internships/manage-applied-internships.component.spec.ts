import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAppliedInternshipsComponent } from './manage-applied-internships.component';

describe('ManageAppliedInternshipsComponent', () => {
  let component: ManageAppliedInternshipsComponent;
  let fixture: ComponentFixture<ManageAppliedInternshipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageAppliedInternshipsComponent]
    });
    fixture = TestBed.createComponent(ManageAppliedInternshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
