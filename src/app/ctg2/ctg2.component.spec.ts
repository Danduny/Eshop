import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctg2Component } from './ctg2.component';

describe('Ctg2Component', () => {
  let component: Ctg2Component;
  let fixture: ComponentFixture<Ctg2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ctg2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ctg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
