import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EaterydetailsComponent } from './eaterydetails.component';

describe('EaterydetailsComponent', () => {
  let component: EaterydetailsComponent;
  let fixture: ComponentFixture<EaterydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaterydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaterydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
