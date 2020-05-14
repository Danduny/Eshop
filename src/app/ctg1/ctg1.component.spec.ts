import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctg1Component } from './ctg1.component';

describe('Ctg1Component', () => {
  let component: Ctg1Component;
  let fixture: ComponentFixture<Ctg1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ctg1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ctg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
