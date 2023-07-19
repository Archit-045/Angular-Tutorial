import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComapnyComponent } from './about-comapny.component';

describe('AboutComapnyComponent', () => {
  let component: AboutComapnyComponent;
  let fixture: ComponentFixture<AboutComapnyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComapnyComponent]
    });
    fixture = TestBed.createComponent(AboutComapnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
