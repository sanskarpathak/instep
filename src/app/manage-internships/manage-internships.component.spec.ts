import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInternshipsComponent } from './manage-internships.component';

describe('ManageInternshipsComponent', () => {
  let component: ManageInternshipsComponent;
  let fixture: ComponentFixture<ManageInternshipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageInternshipsComponent]
    });
    fixture = TestBed.createComponent(ManageInternshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
