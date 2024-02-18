import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificProjectsComponent } from './specific-projects.component';

describe('SpecificProjectsComponent', () => {
  let component: SpecificProjectsComponent;
  let fixture: ComponentFixture<SpecificProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificProjectsComponent]
    });
    fixture = TestBed.createComponent(SpecificProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
