import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctg4Component } from './ctg4.component';

describe('Ctg4Component', () => {
  let component: Ctg4Component;
  let fixture: ComponentFixture<Ctg4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ctg4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ctg4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
